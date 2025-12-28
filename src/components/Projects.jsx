import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Local Café Billing & QR Menu",
      type: "Café",
      features: [
        "Digital billing system with VAT support",
        "QR-based menu (Arabic & English)",
        "Daily sales and order reports",
      ],
      result: "Faster billing and reduced order errors",
    },
    {
      title: "Restaurant POS & Online Presence",
      type: "Restaurant",
      features: [
        "POS and payment integration",
        "Menu & pricing management dashboard",
        "Business website with location & contact",
      ],
      result: "Improved customer experience and visibility",
    },
    {
      title: "Small Restaurant Digital Portfolio",
      type: "Restaurant",
      features: [
        "Professional business website",
        "Menu, timings, and WhatsApp integration",
        "Mobile-friendly design",
      ],
      result: "Increased online enquiries",
    },
  ];

  return (
    <section id="projects" className="bg-saudi-light py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-saudi-dark">
          Our Projects
        </h2>

        <p className="mt-4 text-center text-saudi-text max-w-3xl mx-auto">
          Real-world digital solutions delivered for cafés, restaurants, and
          local businesses across Saudi Arabia.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
