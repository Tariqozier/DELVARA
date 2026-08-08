"use client";

import { Component, type ReactNode, useEffect, useState } from "react";

import MoltenMetal from "./MoltenMetal";

function hasWebGL(): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") ?? canvas.getContext("webgl2"));
  } catch {
    return false;
  }
}

function StaticMoltenFallback() {
  return (
    <div
      className="h-full w-full"
      style={{
        background: [
          "radial-gradient(ellipse 85% 65% at 35% 35%, rgb(22 59 57 / 0.72), transparent 55%)",
          "radial-gradient(ellipse 75% 55% at 72% 58%, rgb(182 126 150 / 0.38), transparent 52%)",
          "radial-gradient(ellipse 65% 50% at 48% 82%, rgb(241 196 174 / 0.22), transparent 50%)",
          "linear-gradient(180deg, #0a1514 0%, #121018 100%)",
        ].join(", "),
      }}
    />
  );
}

type MoltenErrorBoundaryProps = {
  children: ReactNode;
  onError: () => void;
};

type MoltenErrorBoundaryState = {
  hasError: boolean;
};

class MoltenErrorBoundary extends Component<
  MoltenErrorBoundaryProps,
  MoltenErrorBoundaryState
> {
  state: MoltenErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): MoltenErrorBoundaryState {
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

export function MoltenMetalHero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [webGLAvailable, setWebGLAvailable] = useState(false);
  const [moltenFailed, setMoltenFailed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setWebGLAvailable(hasWebGL());

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const useStaticFallback =
    !mounted || prefersReducedMotion || !webGLAvailable || moltenFailed;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
    >
      {useStaticFallback ? (
        <StaticMoltenFallback />
      ) : (
        <MoltenErrorBoundary onError={() => setMoltenFailed(true)}>
          <MoltenMetal
            color1="#163B39"
            color2="#B67E96"
            color3="#F1C4AE"
            speed={0.24}
            scale={4}
            detail={3}
            glow={1.5}
            coreSize={0.1}
            swirl={0.85}
            fold={-0.2}
            blackPoint={0.05}
            brightness={1.15}
            colorMode="molten"
            grain
            grainIntensity={0.035}
            mouseInteraction
            mouseStrength={0.18}
            opacity={0.9}
            onUnavailable={() => setMoltenFailed(true)}
          />
        </MoltenErrorBoundary>
      )}
    </div>
  );
}
