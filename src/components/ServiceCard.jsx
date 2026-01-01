export default function ServiceCard({ title, description }) {
  return (
    <div
      className="
        group
        relative
        rounded-2xl
        p-7
        backdrop-blur-xl
        bg-white/18
        border
        border-white/25
        shadow-[0_8px_30px_rgba(0,0,0,0.12)]
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.18)]
      "
    >
      {/* Gloss highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Accent bar */}
      <div className="relative h-1 w-14 bg-emerald-500/90 rounded-full mb-5" />

      {/* Title */}
      <h3 className="relative text-lg font-semibold text-black leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="relative mt-3 text-black/85 text-sm leading-relaxed">
        {description}
      </p>

      {/* CTA */}
      <div className="relative mt-5 inline-flex items-center text-emerald-300 font-medium text-sm group-hover:text-emerald-200 transition">
        Learn more
        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </div>
  );
}
