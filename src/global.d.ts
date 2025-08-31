export { };

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Three.js extended elements
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

// Three.js extended elements için tip tanımlamaları
declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: any;
    meshLineMaterial: any;
  }
}

// Meshline için özel tip tanımlamaları
declare module 'three' {
  interface Object3D {
    meshLineGeometry?: any;
    meshLineMaterial?: any;
  }
}