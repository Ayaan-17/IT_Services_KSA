export default function Hero() {
  return (
    <section id="home" className="bg-saudi-light">
      <div className="max-w-7xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-saudi-dark leading-tight">
          Digital Systems for Growing Businesses <br />
          <span className="text-saudi-green">in Saudi Arabia</span>
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          We help businesses digitize operations, automate workflows, and build
          modern online systems from billing and management tools to
          professional digital presence.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="border border-saudi-green text-saudi-green px-6 py-3 rounded-lg font-medium hover:bg-saudi-green hover:text-white transition">
            View Solutions
          </button>
        </div>
      </div>
    </section>
  );
}
