export default function VisionMissionValues() {
  return (
    <section
      id="about"
      className="relative py-32 bg-gradient-to-b from-white to-emerald-50"
    >
      {/* Top fade */}
      <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      {/* Radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-900">
            Our Vision, Mission & Values
          </h2>
          <p className="mt-5 text-slate-600 max-w-3xl mx-auto text-lg">
            What drives us and how we deliver reliable digital solutions for
            growing businesses across Saudi Arabia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20 items-stretch">
          {/* Vision */}
          <div className="group bg-white/90 backdrop-blur border border-emerald-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-1 w-12 bg-emerald-600 rounded-full mb-4" />

            <h3 className="text-xl font-semibold text-emerald-900">
              Our Vision
            </h3>

            <p className="mt-4 text-slate-600 leading-relaxed">
              To become a trusted digital partner for businesses in Saudi Arabia
              by enabling efficient, modern, and scalable technology solutions
              that support long-term growth.
            </p>
          </div>

          {/* Mission (featured) */}
          <div className="relative bg-emerald-900 text-white rounded-2xl p-9 shadow-2xl md:-translate-y-6 hover:-translate-y-8 transition-all duration-300">
            <div className="absolute inset-0 rounded-2xl ring-1 ring-emerald-700/40" />

            <div className="relative">
              <div className="h-1 w-12 bg-emerald-300 rounded-full mb-4" />

              <h3 className="text-xl font-semibold">Our Mission</h3>

              <p className="mt-4 text-emerald-100 leading-relaxed">
                Our mission is to help businesses digitize and automate their
                operations through practical, secure, and easy-to-use systems
                tailored to real-world needs.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="group bg-white/90 backdrop-blur border border-emerald-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="h-1 w-12 bg-emerald-600 rounded-full mb-4" />

            <h3 className="text-xl font-semibold text-emerald-900">
              Our Values
            </h3>

            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Trust and transparency in every engagement</li>
              <li>• Practical solutions over unnecessary complexity</li>
              <li>• Commitment to quality and reliability</li>
              <li>• Long-term partnerships with our clients</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-emerald-50 to-transparent pointer-events-none" />
    </section>
  );
}
