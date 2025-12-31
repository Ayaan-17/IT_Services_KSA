export default function ServiceCard({ title, description }) {
  return (
    <div className="group bg-emerald-50/95 backdrop-blur-xl border border-white/40 rounded-2xl p-7 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      {/* Accent bar */}
      <div className="h-1 w-14 bg-emerald-600 rounded-full mb-5" />

      {/* Title */}
      <h3 className="text-lg font-semibold text-emerald-900 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-slate-700 text-sm leading-relaxed">
        {description}
      </p>

      {/* CTA */}
      <div className="mt-5 inline-flex items-center text-emerald-700 font-medium text-sm group-hover:text-emerald-900 transition">
        Learn more
        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </div>
  );
}
