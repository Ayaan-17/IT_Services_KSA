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
    <section id="services" className="bg-saudi-deep py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Our Solutions
        </h2>

        <p className="mt-4 text-center text-white">
          Built specifically for cafés, restaurants, and local businesses across
          Saudi Arabia.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {solutions.map((solution, index) => (
            <ServiceCard key={index} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
