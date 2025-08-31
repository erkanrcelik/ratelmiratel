import LightRays from "./Bits/BackgorundCard";

const BackgroundLight = () => {
  return (
    <div className="absolute inset-0 z-0">
      <LightRays
        raysOrigin="top-center"
        raysColor="#0894d1"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
    </div>
  );
};

export default BackgroundLight;
