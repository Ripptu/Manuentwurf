import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Column 1: Contact Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                a
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight text-white">anna lübberding</span>
                <span className="text-[10px] uppercase tracking-widest text-primary-600 font-semibold mt-1">&amp; KOLLEGINNEN</span>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-4 max-w-sm">
              Ihre erste Anlaufstelle für Verhaltenstherapie und Coaching im Großraum Hamburg
            </p>
            <p className="text-sm text-slate-400 mb-2">
              Email: info@praxisluebberding.de
            </p>
            <p className="text-sm text-slate-400 mb-6">
              Tel: +49 (0)40 238302626
            </p>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Column 2: Sprechzeiten */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-widest text-xs opacity-70">Telefonsprechzeiten</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="grid grid-cols-3 gap-2"><span>Mo</span> <span>9-12 und 13-16 Uhr</span></li>
              <li className="grid grid-cols-3 gap-2"><span>Di</span> <span>9-12 und 14-16 Uhr</span></li>
              <li className="grid grid-cols-3 gap-2"><span>Mi</span> <span>9-12 und 13-16 Uhr</span></li>
              <li className="grid grid-cols-3 gap-2"><span>Do</span> <span>9-12 und 13-16 Uhr</span></li>
              <li className="grid grid-cols-3 gap-2"><span>Fr</span> <span>9-12 Uhr</span></li>
            </ul>
          </div>

          {/* Column 3: Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-widest text-xs opacity-70">Über uns</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/standorte" className="hover:text-white transition-colors">Standorte</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Häufige Fragen</a></li>
              <li><Link to="/karriere" className="hover:text-white transition-colors">Karriere</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Presse</a></li>
            </ul>
          </div>

          {/* Column 4: Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-widest text-xs opacity-70">Therapie</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link to="/ablauf-kosten" className="hover:text-white transition-colors">Ablauf</Link></li>
              <li><Link to="/ablauf-kosten" className="hover:text-white transition-colors">Kosten</Link></li>
              <li><Link to="/leistungen" className="hover:text-white transition-colors">Leistungen</Link></li>
            </ul>
            
            <h4 className="font-semibold text-white mb-6 mt-8 uppercase tracking-widest text-xs opacity-70">Rechtliches</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Datenschutz</a></li>
            </ul>
          </div>

        </div>

        {/* Newsletter & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="w-full md:w-auto">
            <h4 className="font-semibold text-white text-sm uppercase tracking-widest opacity-90">Melden Sie sich zu unserem Newsletter an</h4>
            <p className="text-xs text-slate-400 mt-1">Wissenswertes rund um das Thema Psychotherapie 1x im Monat</p>
          </div>
          <form className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Ihre Email Adresse" 
              className="bg-slate-800 border-none text-sm px-4 py-3 rounded-md focus:ring-2 focus:ring-primary-500 outline-none text-white w-full md:w-64"
            />
            <button type="submit" className="bg-primary-600 hover:bg-primary-700 px-6 py-3 rounded-md text-sm font-semibold transition-colors shadow-lg shadow-primary-600/20">
              Anmelden
            </button>
          </form>
        </div>
        <div className="mt-8 text-xs text-slate-500">
          © 2026 Praxis Lübberding &amp; Kollegen GmbH. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
