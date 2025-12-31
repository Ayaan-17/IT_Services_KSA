export default function Footer() {
  return (
    <footer className="relative bg-emerald-900 text-emerald-100">
      {/* Soft top fade for smooth transition */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-t from-emerald-900 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white">
              Saudi Digital Solutions
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-emerald-200">
              Digital systems and automation solutions for growing businesses
              across Saudi Arabia.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-emerald-200">
              <li>
                <span className="font-medium text-emerald-100">Phone:</span>{" "}
                <a
                  href="tel:+966501234567"
                  className="hover:text-white transition"
                >
                  +966 50 123 4567
                </a>
              </li>

              <li>
                <span className="font-medium text-emerald-100">WhatsApp:</span>{" "}
                <a
                  href="https://wa.me/966501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Chat on WhatsApp
                </a>
              </li>

              <li>
                <span className="font-medium text-emerald-100">Email:</span>{" "}
                <a
                  href="mailto:contact@saudidigitalsolutions.com"
                  className="hover:text-white transition"
                >
                  contact@saudidigitalsolutions.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold text-white">Location</h4>
            <p className="mt-4 text-sm text-emerald-200 leading-relaxed">
              Saudi Arabia <br />
              Serving clients nationwide
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-emerald-700/40 text-center text-xs text-emerald-300">
          © {new Date().getFullYear()} Saudi Digital Solutions · All rights
          reserved
        </div>
      </div>
    </footer>
  );
}
