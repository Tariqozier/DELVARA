'use client';

import { Component, type ReactNode, useEffect, useState } from 'react';

import SoftAurora from './SoftAurora';

function hasWebGL(): boolean {
  if (typeof document === 'undefined') return false;
  try {
    const canvas = document.createElement('canvas');
    return !!(
      canvas.getContext('webgl') ?? canvas.getContext('webgl2')
    );
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
          'radial-gradient(ellipse 80% 60% at 72% 28%, rgb(134 163 145 / 0.22), transparent 55%)',
          'radial-gradient(ellipse 70% 50% at 88% 62%, rgb(201 155 173 / 0.18), transparent 50%)',
          'linear-gradient(180deg, #f8f5f0 0%, #f1eee8 100%)',
        ].join(', '),
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
  const [webGLAvailable, setWebGLAvailable] = useState(false);
  const [auroraFailed, setAuroraFailed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setWebGLAvailable(hasWebGL());

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const useStaticFallback =
    !mounted || prefersReducedMotion || !webGLAvailable || auroraFailed;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-50"
      style={{
        maskImage:
          'linear-gradient(90deg, transparent 0%, rgb(0 0 0 / 0.35) 40%, black 70%)',
        WebkitMaskImage:
          'linear-gradient(90deg, transparent 0%, rgb(0 0 0 / 0.35) 40%, black 70%)',
      }}
    >
      {useStaticFallback ? (
        <StaticAuroraFallback />
      ) : (
        <AuroraErrorBoundary onError={() => setAuroraFailed(true)}>
          <SoftAurora
            speed={0.45}
            scale={0.55}
            brightness={0.65}
            color1="#86A391"
            color2="#C99BAD"
            noiseFrequency={2.3}
            noiseAmplitude={1.6}
            bandHeight={0.45}
            bandSpread={1.15}
            octaveDecay={0.1}
            layerOffset={0.18}
            colorSpeed={0.55}
            enableMouseInteraction
            mouseInfluence={0.12}
            onUnavailable={() => setAuroraFailed(true)}
          />
        </AuroraErrorBoundary>
      )}
    </div>
  );
}
