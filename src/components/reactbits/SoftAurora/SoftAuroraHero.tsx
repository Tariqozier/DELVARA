"use client";

import { Component, type ReactNode, useEffect, useState } from "react";

import SoftAurora from "./SoftAurora";

function hasWebGL(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") ?? canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

function StaticAuroraFallback() {
  return (
    <div
      className="h-full w-full"
      style={{
        background: [
          "radial-gradient(ellipse 90% 70% at 72% 28%, rgb(211 160 181 / 0.48), transparent 56%)",
          "radial-gradient(ellipse 70% 55% at 88% 68%, rgb(241 196 174 / 0.32), transparent 52%)",
          "radial-gradient(ellipse 65% 50% at 58% 78%, rgb(137 169 147 / 0.28), transparent 50%)",
          "linear-gradient(180deg, #f8f5f0 0%, #f1eee8 100%)",
        ].join(", "),
      }}
    />
  );
}

type AuroraErrorBoundaryProps = {
  children: ReactNode;
  onError: () => void;
};

type AuroraErrorBoundaryState = {
  hasError: boolean;
};

class AuroraErrorBoundary extends Component<
  AuroraErrorBoundaryProps,
  AuroraErrorBoundaryState
> {
  state: AuroraErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): AuroraErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(): void {
    this.props.onError();
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export function SoftAuroraHero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isCompactViewport, setIsCompactViewport] = useState(false);
  const [webGLAvailable, setWebGLAvailable] = useState(false);
  const [auroraFailed, setAuroraFailed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setWebGLAvailable(hasWebGL());

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactQuery = window.matchMedia("(max-width: 768px)");
    setPrefersReducedMotion(motionQuery.matches);
    setIsCompactViewport(compactQuery.matches);

    const handleMotion = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };
    const handleCompact = (event: MediaQueryListEvent) => {
      setIsCompactViewport(event.matches);
    };

    motionQuery.addEventListener("change", handleMotion);
    compactQuery.addEventListener("change", handleCompact);
    return () => {
      motionQuery.removeEventListener("change", handleMotion);
      compactQuery.removeEventListener("change", handleCompact);
    };
  }, []);

  const useStaticFallback =
    !mounted || prefersReducedMotion || !webGLAvailable || auroraFailed;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.88]"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0%, rgb(0 0 0 / 0.25) 28%, rgb(0 0 0 / 0.75) 52%, black 72%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, rgb(0 0 0 / 0.25) 28%, rgb(0 0 0 / 0.75) 52%, black 72%)",
      }}
    >
      {useStaticFallback ? (
        <StaticAuroraFallback />
      ) : (
        <AuroraErrorBoundary onError={() => setAuroraFailed(true)}>
          <SoftAurora
            speed={isCompactViewport ? 0.42 : 0.6}
            scale={isCompactViewport ? 0.5 : 0.58}
            brightness={1.08}
            color1="#D3A0B5"
            color2="#89A993"
            noiseFrequency={isCompactViewport ? 1.8 : 2.3}
            noiseAmplitude={isCompactViewport ? 1.5 : 2}
            bandHeight={0.54}
            bandSpread={1.24}
            octaveDecay={0.1}
            layerOffset={0.16}
            colorSpeed={isCompactViewport ? 0.45 : 0.62}
            enableMouseInteraction={!isCompactViewport}
            mouseInfluence={0.22}
            onUnavailable={() => setAuroraFailed(true)}
          />
        </AuroraErrorBoundary>
      )}
    </div>
  );
}
