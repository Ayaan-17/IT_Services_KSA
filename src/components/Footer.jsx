export default function Footer() {
  return (
    <footer className="bg-saudi-deep text-center text-emerald-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold tracking-wide text-white">
              Saudi Digital Solutions
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-emerald-200">
              Digital systems and automation solutions for growing businesses
              across Saudi Arabia.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold tracking-wide text-white">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-emerald-200">
              <li>
                <span className="font-medium text-emerald-100">Phone:</span>{" "}
                <a
                  href="tel:+966501234567"
                  className="ml-1 transition-colors hover:text-saudi-gold"
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
                  className="ml-1 transition-colors hover:text-saudi-gold"
                >
                  Chat on WhatsApp
                </a>
              </li>

              <li>
                <span className="font-medium text-emerald-100">Email:</span>{" "}
                <a
                  href="mailto:contact@saudidigitalsolutions.com"
                  className="ml-1 transition-colors hover:text-saudi-gold"
                >
                  contact@saudidigitalsolutions.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-lg font-semibold tracking-wide text-white">
              Location
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-emerald-200">
              Saudi Arabia <br />
              Serving clients nationwide
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-emerald-700/40 text-center text-xs tracking-wide text-emerald-300">
          © {new Date().getFullYear()} Saudi Digital Solutions · All rights
          reserved
        </div>
      </div>
    </footer>
  );
}
