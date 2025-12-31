export default function ProjectCard({
  title,
  client,
  features,
  outcome,
  tech,
  index,
}) {
  const accent = index % 2 === 0 ? "bg-saudi-primary" : "bg-saudi-secondary";

  return (
    <div
      className="
        group
        bg-white
        rounded-xl
        border border-saudi-border
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-saudi-dark">{title}</h3>
          <p className="mt-1 text-sm text-saudi-muted">{client}</p>
        </div>

        {/* Accent bar */}
        <span
          className={`
            h-10 w-1 rounded-full
            ${accent}
            transition-all duration-300
            group-hover:h-16
          `}
        />
      </div>

      {/* Features */}
      <ul className="mt-6 space-y-3 text-sm text-saudi-text">
        {features.map((feature, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-saudi-primary font-bold">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Outcome */}
      <div
        className="
          mt-6
          rounded-lg
          p-4
          bg-saudi-light
          transition-colors
          group-hover:bg-emerald-50
        "
      >
        <p className="text-sm">
          <span className="font-semibold text-saudi-dark">Outcome:</span>{" "}
          <span className="text-saudi-text">{outcome}</span>
        </p>
      </div>

      {/* Tech stack */}
      <div className="mt-6 flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <span
            key={i}
            className="
              text-xs
              px-3 py-1
              rounded-full
              bg-saudi-light
              text-saudi-text
              border border-saudi-border
              transition
              group-hover:bg-white
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
