import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Standorte", path: "/standorte" },
    { name: "Leistungen", path: "/leistungen" },
    { name: "Ablauf & Kosten", path: "/ablauf-kosten" },
    { name: "Karriere", path: "/karriere" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-12 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
            a
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold tracking-tight text-[#0f172a]">anna lübberding</span>
            <span className="text-[10px] uppercase tracking-widest text-primary-600 font-semibold mt-1">&amp; KOLLEGINNEN</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium uppercase tracking-wider">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-primary-600 transition-colors pb-1 ${
                location.pathname === link.path ? "text-primary-600 border-b-2 border-primary-600" : "text-slate-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a href="#" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md font-semibold transition-all shadow-lg shadow-primary-600/20">
            Termin buchen
          </a>
        </div>
      </div>
    </header>
  );
}
