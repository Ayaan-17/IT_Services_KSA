export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm text-saudi-text">
        {/* Company */}
        <div>
          <h4 className="font-semibold text-saudi-dark">
            Saudi Digital Solutions
          </h4>
          <p className="mt-3 text-slate-600">
            Digital systems and automation solutions for growing businesses
            across Saudi Arabia.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-saudi-dark">Contact</h4>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>
              📞 <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+966501234567" className="hover:text-saudi-green">
                +966 50 123 4567
              </a>
            </li>
            <li>
              💬 <span className="font-medium">WhatsApp:</span>{" "}
              <a
                href="https://wa.me/966501234567"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-saudi-green"
              >
                Chat on WhatsApp
              </a>
            </li>
            <li>
              ✉️ <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:contact@saudidigitalsolutions.com"
                className="hover:text-saudi-green"
              >
                contact@saudidigitalsolutions.com
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="font-semibold text-saudi-dark">Location</h4>
          <p className="mt-3 text-slate-600">
            Saudi Arabia <br />
            Serving clients nationwide
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t mt-8">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Saudi Digital Solutions · All rights
          reserved
        </div>
      </div>
    </footer>
  );
}
