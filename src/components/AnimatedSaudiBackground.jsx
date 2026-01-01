import saudiEmblem from "../assets/saudi-emblem2.svg";

export default function AnimatedSaudiBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Embossed + glossy logo */}
      <img
        src={saudiEmblem}
        alt=""
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[550px]
          opacity-[0.50]
          blur-[0.3px]
          scale-100

          /* 3D depth */
          drop-shadow-[0_18px_35px_rgba(0,0,0,0.18)]
          drop-shadow-[0_-8px_18px_rgba(255,255,255,0.35)]
        "
      />

      {/* Gloss highlight overlay */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]
        "
      />
    </div>
  );
}
