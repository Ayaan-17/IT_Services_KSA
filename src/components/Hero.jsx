export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        py-28
        md:py-36
        bg-transparent
        overflow-hidden
      "
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-saudi-dark leading-tight tracking-tight">
          Digital Systems & Automation <br />
          <span className="text-saudi-primary">
            for Growing Businesses in Saudi Arabia
          </span>
        </h1>

        <p className="mt-6 text-lg text-saudi-text max-w-3xl mx-auto">
          We help businesses digitize operations, automate workflows, and build
          reliable digital systems — from internal management tools to modern
          customer-facing platforms.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#services"
            className="
              bg-saudi-primary
              text-white
              px-8
              py-3
              rounded-lg
              font-semibold
              shadow
              hover:bg-saudi-secondary
              transition
            "
          >
            Explore Solutions
          </a>

          <a
            href="#contact"
            className="
              bg-white
              border
              border-saudi-primary
              text-saudi-primary
              px-8
              py-3
              rounded-lg
              font-semibold
              hover:bg-saudi-primary
              hover:text-white
              transition
            "
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
