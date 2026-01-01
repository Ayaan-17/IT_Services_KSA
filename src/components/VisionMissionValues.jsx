export default function VisionMissionValues() {
  return (
    <section
      id="about"
      className="
        relative
        py-32
        bg-transparent
        overflow-hidden
      "
    >
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blacktracking-tight">
          Our Vision, Mission & Values
        </h2>
        <p className="mt-5 text-black/90 max-w-3xl mx-auto text-lg">
          What drives us and how we deliver reliable digital solutions for
          growing businesses across Saudi Arabia.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 mt-20 items-stretch">
        {/* Vision */}
        <div
          className="
              group
              relative
              rounded-2xl
              p-8
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
          {/* Gloss */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative h-1 w-12 bg-emerald-400 rounded-full mb-4" />

          <h3 className="relative text-xl font-semibold text-black">
            Our Vision
          </h3>

          <p className="relative mt-4 text-black/85 leading-relaxed">
            To become a trusted digital partner for businesses in Saudi Arabia
            by enabling efficient, modern, and scalable technology solutions
            that support long-term growth.
          </p>
        </div>

        {/* Mission (featured glass) */}
        <div
          className="
              group
              relative
              rounded-2xl
              p-9
              backdrop-blur-xl
              bg-emerald-500/20
              border
              border-emerald-300/30
              shadow-[0_12px_40px_rgba(0,0,0,0.25)]
              transition-all
              duration-300
              md:-translate-y-6
              hover:-translate-y-8
            "
        >
          {/* Gloss */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative h-1 w-12 bg-emerald-300 rounded-full mb-4" />

          <h3 className="relative text-xl font-semibold text-black">
            Our Mission
          </h3>

          <p className="relative mt-4 text-black/90 leading-relaxed">
            Our mission is to help businesses digitize and automate their
            operations through practical, secure, and easy-to-use systems
            tailored to real-world needs.
          </p>
        </div>

        {/* Values */}
        <div
          className="
              group
              relative
              rounded-2xl
              p-8
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
          {/* Gloss */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative h-1 w-12 bg-emerald-400 rounded-full mb-4" />

          <h3 className="relative text-xl font-semibold text-black">
            Our Values
          </h3>

          <ul className="relative mt-4 space-y-3 text-black/85">
            <li>• Trust and transparency in every engagement</li>
            <li>• Practical solutions over unnecessary complexity</li>
            <li>• Commitment to quality and reliability</li>
            <li>• Long-term partnerships with our clients</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
