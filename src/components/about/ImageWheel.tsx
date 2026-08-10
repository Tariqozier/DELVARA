"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import "./ImageWheel.css";

export type WheelItem = {
  id: string;
  label: string;
  src: string;
  alt: string;
  accent?: string;
};

export type ImageWheelProps = {
  items: WheelItem[];
  heading?: string;
  variant?: "treatments" | "growth";
  className?: string;
};

const TAU = Math.PI * 2;
const FRICTION = 0.94;
const MAX_VELOCITY = 0.018;
const DRAG_SENSITIVITY = 0.0042;
const SCROLL_SENSITIVITY = 0.00055;
const IDLE_VELOCITY = 0.00028;

type CardTransform = {
  x: number;
  z: number;
  rotateY: number;
  scale: number;
  opacity: number;
  zIndex: number;
};

function normalizeAngle(radians: number) {
  let angle = radians % TAU;
  if (angle < 0) angle += TAU;
  return angle;
}

function computeCardTransform(
  index: number,
  count: number,
  rotation: number,
  radiusX: number,
  radiusZ: number,
): CardTransform {
  const angle = normalizeAngle((index / count) * TAU + rotation);
  const x = Math.sin(angle) * radiusX;
  const z = Math.cos(angle) * radiusZ;
  const depth = (z + radiusZ) / (radiusZ * 2);
  const scale = 0.72 + depth * 0.34;
  const opacity = 0.42 + depth * 0.58;
  const rotateY = -(angle * 180) / Math.PI;
  const zIndex = Math.round(depth * 100);

  return { x, z, rotateY, scale, opacity, zIndex };
}

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return prefersReducedMotion;
}

export function ImageWheel({
  items,
  heading,
  variant = "treatments",
  className = "",
}: ImageWheelProps) {
  const headingId = useId();
  const stageRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef(0);
  const velocityRef = useRef(IDLE_VELOCITY);
  const dragRef = useRef<{ active: boolean; lastX: number }>({
    active: false,
    lastX: 0,
  });
  const rafRef = useRef<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  const count = items.length;
  const [radiusX, setRadiusX] = useState(240);
  const [radiusZ, setRadiusZ] = useState(110);
  const [isVisible, setIsVisible] = useState(true);

  const ariaLabel = useMemo(() => {
    const labels = items.map((item) => item.label).join(", ");
    return heading
      ? `${heading}. Featured concepts: ${labels}`
      : `Featured concepts: ${labels}`;
  }, [heading, items]);

  const applyTransforms = useCallback(() => {
    const rotation = rotationRef.current;

    items.forEach((_, index) => {
      const card = cardRefs.current[index];
      if (!card) return;

      const transform = computeCardTransform(
        index,
        count,
        rotation,
        radiusX,
        radiusZ,
      );

      card.style.zIndex = String(transform.zIndex);
      card.style.opacity = String(transform.opacity);
      card.style.transform = `translate3d(${transform.x}px, 0, ${transform.z}px) rotateY(${transform.rotateY}deg) scale(${transform.scale})`;
    });
  }, [count, items, radiusX, radiusZ]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const updateRadii = () => {
      const width = stage.clientWidth;
      const scale = Math.min(1, Math.max(0.42, width / 640));
      setRadiusX(Math.round(240 * scale));
      setRadiusZ(Math.round(110 * scale));
    };

    updateRadii();
    const observer = new ResizeObserver(updateRadii);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(Boolean(entry?.isIntersecting)),
      { rootMargin: "120px 0px", threshold: 0.05 },
    );
    observer.observe(stage);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const tick = useCallback(() => {
    if (!dragRef.current.active) {
      velocityRef.current =
        velocityRef.current * FRICTION +
        Math.sign(velocityRef.current || 1) * IDLE_VELOCITY * 0.08;

      if (Math.abs(velocityRef.current) < IDLE_VELOCITY * 0.35) {
        velocityRef.current = IDLE_VELOCITY;
      }

      velocityRef.current = Math.max(
        -MAX_VELOCITY,
        Math.min(MAX_VELOCITY, velocityRef.current),
      );
    }

    rotationRef.current = normalizeAngle(
      rotationRef.current + velocityRef.current,
    );
    applyTransforms();
    rafRef.current = window.requestAnimationFrame(tick);
  }, [applyTransforms]);

  useEffect(() => {
    if (prefersReducedMotion || !isVisible) {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (!prefersReducedMotion) applyTransforms();
      return;
    }

    applyTransforms();
    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [applyTransforms, isVisible, prefersReducedMotion, tick]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const stage = stageRef.current;
    if (!stage) return;

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) return;

      velocityRef.current = Math.max(
        -MAX_VELOCITY,
        Math.min(
          MAX_VELOCITY,
          velocityRef.current + event.deltaY * SCROLL_SENSITIVITY,
        ),
      );
    };

    stage.addEventListener("wheel", onWheel, { passive: true });
    return () => stage.removeEventListener("wheel", onWheel);
  }, [prefersReducedMotion]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    dragRef.current = { active: true, lastX: event.clientX };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active || prefersReducedMotion) return;

    const deltaX = event.clientX - dragRef.current.lastX;
    dragRef.current.lastX = event.clientX;

    rotationRef.current = normalizeAngle(
      rotationRef.current + deltaX * DRAG_SENSITIVITY,
    );
    velocityRef.current = Math.max(
      -MAX_VELOCITY,
      Math.min(MAX_VELOCITY, deltaX * DRAG_SENSITIVITY * 0.85),
    );
    applyTransforms();
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const rootClass = [
    "image-wheel",
    variant === "growth" ? "image-wheel--growth" : "image-wheel--treatments",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      className={rootClass}
      aria-labelledby={heading ? headingId : undefined}
      aria-label={heading ? undefined : ariaLabel}
    >
      {(heading || !prefersReducedMotion) && (
        <header className="image-wheel__header">
          {heading ? (
            <h2 id={headingId} className="image-wheel__heading">
              {heading}
            </h2>
          ) : null}
          {!prefersReducedMotion ? (
            <p className="image-wheel__hint">Scroll or drag to explore</p>
          ) : null}
        </header>
      )}

      <div
        ref={stageRef}
        className="image-wheel__stage"
        aria-label={heading ? ariaLabel : undefined}
        role={heading ? "group" : undefined}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
      >
        {prefersReducedMotion ? (
          <div className="image-wheel__static">
            {items.map((item) => (
              <figure key={item.id} className="image-wheel__static-card">
                <div className="image-wheel__card-inner">
                  <div className="image-wheel__image-wrap">
                    {/* Local SVG placeholders — plain img avoids next/image SVG constraints */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={340}
                      height={425}
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                  </div>
                  {item.accent ? (
                    <span
                      className="image-wheel__accent"
                      style={{ backgroundColor: item.accent }}
                      aria-hidden="true"
                    />
                  ) : null}
                  <figcaption className="image-wheel__label">
                    {item.label}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        ) : (
          <>
            <div className="image-wheel__scene">
              <div className="image-wheel__ring">
                {items.map((item, index) => (
                  <div
                    key={item.id}
                    ref={(node) => {
                      cardRefs.current[index] = node;
                    }}
                    className="image-wheel__card"
                  >
                    <figure className="image-wheel__card-inner">
                      <div className="image-wheel__image-wrap">
                        <img
                          src={item.src}
                          alt={item.alt}
                          width={340}
                          height={425}
                          className="h-full w-full object-cover"
                          draggable={false}
                        />
                      </div>
                      {item.accent ? (
                        <span
                          className="image-wheel__accent"
                          style={{ backgroundColor: item.accent }}
                          aria-hidden="true"
                        />
                      ) : null}
                      <figcaption className="image-wheel__label">
                        {item.label}
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>
            <div className="image-wheel__floor" aria-hidden="true" />
          </>
        )}
      </div>
    </section>
  );
}
