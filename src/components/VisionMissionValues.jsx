export default function VisionMissionValues() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-saudi-dark">
            Our Vision, Mission & Values
          </h2>
          <p className="mt-4 text-saudi-text max-w-3xl mx-auto">
            What drives us and how we deliver reliable digital solutions for
            growing businesses across Saudi Arabia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Vision */}
          <div className="bg-saudi-light border border-slate-200 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-saudi-dark">
              Our Vision
            </h3>
            <p className="mt-4 text-saudi-text leading-relaxed">
              To become a trusted digital partner for businesses in Saudi Arabia
              by enabling efficient, modern, and scalable technology solutions
              that support long-term growth.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-saudi-dark">
              Our Mission
            </h3>
            <p className="mt-4 text-saudi-text leading-relaxed">
              Our mission is to help businesses digitize and automate their
              operations through practical, secure, and easy-to-use systems
              tailored to real-world needs.
            </p>
          </div>

          {/* Values */}
          <div className="bg-saudi-light border border-slate-200 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-saudi-dark">
              Our Values
            </h3>
            <ul className="mt-4 space-y-3 text-saudi-text">
              <li>• Trust and transparency in every engagement</li>
              <li>• Practical solutions over unnecessary complexity</li>
              <li>• Commitment to quality and reliability</li>
              <li>• Long-term partnerships with our clients</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
