declare module 'ogl' {
  type OGLContext = WebGLRenderingContext | WebGL2RenderingContext;

  export class Renderer {
    // gl.canvas is HTMLCanvasElement | OffscreenCanvas on WebGL contexts; cast in components.
    gl: OGLContext;
    constructor(options?: {
      alpha?: boolean;
      premultipliedAlpha?: boolean;
      antialias?: boolean;
      dpr?: number;
      webgl?: number;
    });
    setSize(width: number, height: number): void;
    render(options: { scene: Mesh }): void;
  }

  export class Program {
    uniforms: Record<string, { value: unknown }>;
    constructor(
      gl: OGLContext,
      options: {
        vertex: string;
        fragment: string;
        uniforms?: Record<string, { value: unknown }>;
      }
    );
  }

  export class Mesh {
    constructor(
      gl: OGLContext,
      options: { geometry: Triangle; program: Program }
    );
  }

  export class Triangle {
    constructor(gl: OGLContext);
  }
}
