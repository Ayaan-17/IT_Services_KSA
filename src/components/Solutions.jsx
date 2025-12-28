import ServiceCard from "./ServiceCard";

export default function Solutions() {
  const solutions = [
    {
      title: "Restaurant & Café Billing System",
      description:
        "Simple and fast billing system designed for cafés and restaurants with daily sales reports.",
    },
    {
      title: "Digital Menu & QR Ordering",
      description:
        "Mobile-friendly QR menus with Arabic and English support. Update items and prices anytime.",
    },
    {
      title: "POS & Payment Integration",
      description:
        "Seamless POS integration with cash and card payments, including transaction history.",
    },
    {
      title: "Business Website & Digital Portfolio",
      description:
        "Professional website showcasing your menu, location, timings, and contact details.",
    },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center text-saudi-dark">
        Our Solutions
      </h2>

      <p className="mt-4 text-center text-slate-600 max-w-3xl mx-auto">
        Built specifically for cafés, restaurants, and local businesses across
        Saudi Arabia.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {solutions.map((solution, index) => (
          <ServiceCard key={index} {...solution} />
        ))}
      </div>
    </section>
  );
}
