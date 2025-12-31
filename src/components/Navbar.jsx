export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-emerald-900/90 border-b border-emerald-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-white tracking-wide">
          Saudi <span className="text-emerald-300">Digital</span> Solutions
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-emerald-100">
          <li>
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-white transition">
              Services
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-white transition">
              Our Work
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="bg-white text-emerald-900 px-4 py-2 rounded-lg font-semibold hover:bg-emerald-100 transition shadow"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
