export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-saudi-dark">
          Saudi Digital Solutions
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-saudi-text">
          <li>
            <a href="#home" className="hover:text-saudi-green transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-saudi-green transition">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-saudi-green transition">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-saudi-green transition">
              Our Work
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="bg-saudi-green text-white px-4 py-2 rounded-md hover:bg-saudi-teal transition"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
