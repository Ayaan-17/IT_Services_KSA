export default function ProjectCard({ title, type, features, result }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl transition hover:-translate-y-1">
      {/* header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-saudi-dark">{title}</h3>
        <span className="text-xs px-3 py-1 rounded-full bg-saudi-light text-saudi-green font-medium">
          {type}
        </span>
      </div>

      {/* features */}
      <ul className="mt-4 space-y-2 text-sm text-saudi-text">
        {features.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-saudi-green">✔</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* result */}
      <div className="mt-4 text-sm font-medium text-saudi-teal">
        Result: {result}
      </div>
    </div>
  );
}
