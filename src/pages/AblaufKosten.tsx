import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const costs = [
  { title: "Gesetzliche Krankenversicherung", content: "Die Kosten für die Behandlung werden in der Regel vollständig von der gesetzlichen Krankenversicherung übernommen, sofern eine entsprechende Indikation vorliegt." },
  { title: "Private Krankenversicherung und Beihilfe", content: "Private Krankenversicherungen und die Beihilfe erstatten die Kosten für Psychotherapie je nach Tarifbedingungen. Bitte erkundigen Sie sich vorab bei Ihrer Versicherung." },
  { title: "Soldat*innen", content: "Die Kosten werden über die Heilfürsorge der Bundeswehr abgerechnet. Ein entsprechender Überweisungsschein bzw. Kostenübernahmeerklärung ist erforderlich." },
  { title: "Bundespolizist*innen", content: "Auch hier erfolgt die Abrechnung über die Heilfürsorge. Bitte bringen Sie die entsprechenden Formulare zum Erstgespräch mit." },
  { title: "Selbstzahlung", content: "Sie können die Kosten für Diagnose, Beratung, Coaching oder Psychotherapie auch selbst tragen. Unser Honorar richtet sich dabei nach der Gebührenordnung für Psychotherapeuten (GOP)." },
  { title: "Paartherapie", content: "Paartherapie ist keine Kassenleistung und muss in der Regel selbst bezahlt werden." },
  { title: "ADHS Diagnostik", content: "Die Kosten für eine ADHS Diagnostik im Erwachsenenalter werden häufig privat getragen. Sprechen Sie uns an." },
  { title: "Autismus Diagnostik", content: "Auch die Autismus Diagnostik ist oft eine Selbstzahlerleistung. Kontaktieren Sie uns für Details." },
];

export default function AblaufKosten() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="rounded-3xl shadow-2xl overflow-hidden bg-slate-100 h-[500px] w-full max-w-md relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 to-transparent pointer-events-none z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
              alt="Frau im Sessel macht sich Notizen" 
              className="w-full h-full object-cover relative z-0"
              referrerPolicy="no-referrer"
            />
          </div>

          <div>
            <div className="text-primary-600 font-bold mb-4 text-xs tracking-[0.2em] uppercase">Ablauf &amp; Kosten</div>
            <h1 className="text-4xl md:text-5xl font-light text-[#0f172a] leading-tight mb-6 italic">
              Die ersten <span className="font-bold not-italic">Schritte</span>
            </h1>
            
            <p className="text-lg text-slate-500 mb-6 leading-relaxed">
              Sie können ganz unkompliziert eine digitale Anfrage stellen.
            </p>
            
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Anschließend begleiten wir Sie Schritt für Schritt durch den jeweiligen Prozess - ganz individuell abgestimmt darauf, wie Sie zu uns kommen (z.B. über das Kostenerstattungsverfahren, eine private Krankenversicherung, Heilfürsorge, Selbstzahlung o.Ä.) und aus welchem Grund Sie uns kontaktieren (z.B. Psychotherapie, Coaching, Diagnostik o.Ä.)
            </p>
            
            <a href="#" className="font-medium text-primary-600 hover:text-primary-700 transition-colors flex items-center gap-2">
              Jetzt eine Anfrage stellen &rarr;
            </a>
          </div>
          
        </div>
      </section>

      {/* Phases Section */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-primary-600 font-bold mb-4 text-xs tracking-[0.2em] uppercase">Therapie Ablauf</div>
            <h2 className="text-4xl font-light text-[#0f172a] leading-tight mb-6 italic">
              Phasen der <span className="font-bold not-italic">Therapie</span>
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Ambulante psychotherapeutische Sitzungen finden in der Regel hochfrequentiert einmal wöchentlich 50 Minuten statt. Je nach Bedarf und Not kann dies individuell gehandhabt werden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Phase 1 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-primary-600 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                  Phase 1
                </div>
                <div className="h-px bg-slate-200 flex-grow hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0f172a]">Erstgespräch</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Das Erstgespräch dient dem gegenseitigen Kennenlernen. Hier stellt der Therapeut Fragen zur Lebensgeschichte, aktuellen Problemen und Zielen der Therapie. Es wird ein vertrauensvolles Umfeld geschaffen, in dem sich der Klient öffnen kann.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-primary-600 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                  Phase 2
                </div>
                <div className="h-px bg-slate-200 flex-grow hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0f172a]">Probatorik &amp; Diagnose</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                In dieser Phase erfolgt eine tiefergehende Untersuchung der psychischen Probleme des Klienten. Es werden diagnostische Gespräche geführt und gegebenenfalls Tests durchgeführt, um einen individuellen Behandlungsplan zu entwickeln.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-primary-600 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                  Phase 3
                </div>
                <div className="h-px bg-slate-200 flex-grow hidden lg:block"></div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0f172a]">Veränderung</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Diese Phase ist der Kern der therapeutischen Arbeit. Es werden verschiedene Techniken und Methoden angewandt, um die identifizierten Probleme anzugehen. Der Klient lernt Strategien, um mit seinen Herausforderungen besser umzugehen und positive Veränderungen in seinem Leben herbeizuführen.
              </p>
            </div>

            {/* Phase 4 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-primary-600 font-medium text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                  Phase 4
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0f172a]">Abschluss der Therapie</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                In der Abschlussphase reflektieren Therapeut und Klient gemeinsam die erzielten Fortschritte und besprechen, wie die erreichten Veränderungen im Alltag aufrechterhalten werden können. Es wird auch besprochen, wie zukünftigen Herausforderungen begegnet werden kann. Die Therapie endet mit einem abschließenden Gespräch..
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Costs Section */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-light text-[#0f172a] leading-tight mb-16 italic">
          Was kostet eine <span className="font-bold not-italic">Therapie?</span>
        </h2>
        
        <div className="flex flex-col gap-0 text-left">
          {costs.map((cost, index) => (
            <div key={index} className="border-b border-slate-200 overflow-hidden">
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full py-6 flex justify-between items-center text-lg font-bold text-[#1e293b] hover:text-primary-600 transition-colors group"
                aria-expanded={openIndex === index}
              >
                {cost.title}
                {openIndex === index ? (
                  <Minus className="text-primary-600 flex-shrink-0 ml-4" />
                ) : (
                  <Plus className="text-slate-400 group-hover:text-primary-600 transition-colors flex-shrink-0 ml-4" />
                )}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out px-4 text-slate-600 leading-relaxed ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                {cost.content}
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
