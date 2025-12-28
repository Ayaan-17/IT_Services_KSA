export default function ServiceCard({ title, description }) {
  return (
    <div className="relative bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition hover:-translate-y-1">
      {/* top accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-saudi-green rounded-t-xl" />

      <h3 className="mt-4 text-lg font-semibold text-saudi-dark">{title}</h3>

      <p className="mt-3 text-sm text-saudi-text leading-relaxed">
        {description}
      </p>

      <div className="mt-4 text-sm font-medium text-saudi-teal">
        Learn more →
      </div>
    </div>
  );
}
