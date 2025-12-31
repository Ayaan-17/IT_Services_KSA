export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-saudi-deep border-b border-emerald-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold tracking-wide text-white">
          Saudi <span className="text-emerald-300 font-bold">Digital</span>{" "}
          Solutions
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-emerald-100">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Our Work", href: "#projects" },
          ].map((item) => (
            <li key={item.href} className="relative group">
              <a
                href={item.href}
                className="transition-colors group-hover:text-saudi-gold"
              >
                {item.label}
              </a>

              {/* underline accent */}
              <span
                className="
                  absolute left-0 -bottom-1 h-[2px] w-0
                  bg-saudi-gold
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </li>
          ))}

          {/* CTA */}
          <li>
            <a
              href="#contact"
              className="
                ml-4
                bg-white
                text-saudi-dark
                px-5 py-2
                rounded-lg
                font-semibold
                tracking-wide
                hover:bg-yellow-400
                transition
                shadow-sm
              "
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
