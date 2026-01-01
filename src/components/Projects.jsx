import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "HR Suite & Candidate Management System",
      client: "Internal / Client HR Platform",
      features: [
        "Designed and developed a complete HR suite for candidate management",
        "Built admin dashboards for managing candidates, resumes, and job mandates",
        "Integrated resume upload, parsing, and database storage",
        "Implemented role-based access and secure data handling",
      ],
      outcome:
        "Streamlined recruitment workflow and centralized candidate information",
      tech: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    },
    {
      title: "Automated Billing & Service History Portal",
      client: "Aditya Birla Group (Enterprise Project)",
      features: [
        "Developed automated billing and service history features",
        "Built dynamic dashboards to display usage and approval history",
        "Implemented role-based views for different business users",
        "Enhanced UI performance and data visibility across modules",
      ],
      outcome:
        "Improved transparency and efficiency in billing and service tracking",
      tech: ["React", "JavaScript", "REST APIs", "Enterprise UI Standards"],
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-saudi-light to-white py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-saudi-dark">
            Our Projects
          </h2>

          <p className="mt-4 text-saudi-muted leading-relaxed">
            A showcase of real-world systems and automation solutions built for
            enterprise and growing organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
      {/* soft bottom fade to next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t  to-transparent pointer-events-none" />
    </section>
  );
}
