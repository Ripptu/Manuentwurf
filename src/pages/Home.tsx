import { ChevronRight, Star, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 text-xs tracking-[0.2em] mb-4 text-slate-500 uppercase font-bold">
              <span className="text-primary-600">Termine verfügbar</span>
              <span className="w-px h-4 bg-slate-300"></span>
              <a href="#" className="flex items-center hover:text-primary-600 transition-colors">
                Online buchen <ChevronRight size={16} />
              </a>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0f172a] leading-tight mb-6 italic">
              Psychotherapie, Diagnostik und <br/><span className="font-bold not-italic">Coaching für Erwachsene</span>
            </h1>
            
            <p className="text-lg text-slate-500 mb-8 max-w-xl leading-relaxed">
              Neuen Mut schöpfen, Verhaltensmuster und mögliche Folgen daraus erkennen und ihnen aktiv entgegenwirken.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md font-semibold transition-all shadow-lg shadow-primary-600/20 text-md">
                Jetzt Anfrage stellen
              </a>
            </div>
          </div>
          
          <div className="rounded-3xl shadow-2xl overflow-hidden bg-slate-100 h-[500px] w-full max-w-md ml-auto relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 to-transparent pointer-events-none z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Therapeutin lächelnd" 
              className="w-full h-full object-cover relative z-0"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Services Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          
          {/* Service 1 */}
          <div className="p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#0f172a]">Psychotherapie (VT/TP)</h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Im Rahmen einer Psychotherapie werden Gedanken, Verhalten, aber auch Gefühle in der gemeinsamen Arbeit fokussiert. Diese drei Faktoren beeinflussen die Art, wie wir im Laufe unseres Lebens Beziehungen eingehen, Entscheidungen treffen, Situationen wahrnehmen und unser Leben beschreiten. Perspektivwechsel, das Hinterfragen von Glaubenssätzen und das Erlernen anderer Verhaltensmuster können somit auch zu einem neuen Lebensweg führen.
            </p>
            <div className="flex gap-4 items-center">
              <a href="#" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-md font-semibold transition-all shadow-lg shadow-primary-600/20 text-sm">
                Therapie anfragen
              </a>
              <Link to="/leistungen" className="text-sm font-semibold hover:text-primary-600 transition-colors flex items-center uppercase tracking-wider">
                Mehr erfahren &rarr;
              </Link>
            </div>
          </div>

          {/* Service 2 */}
          <div className="p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-[#0f172a]">Persönlichkeits- und Lifecoaching</h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Sie möchten Ihren persönlichen und beruflichen Weg finden? Mit Ihren Ressourcen, Stärken und Talenten wieder in Kontakt kommen? Gemeinsam räumen wir Hindernisse aus dem Weg, damit Sie Ihr Leben so führen können, wie Sie es sich wünschen. Dafür werden wir unter anderem einst bewährte, aber aktuell nicht mehr hilfreiche Glaubenssätze und Verhaltensmuster erkennen und verändern, damit es Ihnen gelingt, Ihre Ziele zu erreichen.
            </p>
            <div className="flex gap-4 items-center">
              <a href="#" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-md font-semibold transition-all shadow-lg shadow-primary-600/20 text-sm">
                Coaching anfragen
              </a>
              <Link to="/leistungen" className="text-sm font-semibold hover:text-primary-600 transition-colors flex items-center uppercase tracking-wider">
                Mehr erfahren &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="text-primary-600 font-bold mb-4 text-xs tracking-[0.2em] uppercase">Erfahrungsberichte</div>
              <h2 className="text-4xl font-light text-[#0f172a] leading-tight italic">
                Das sagen Patientinnen &amp; Patienten <br/><span className="font-bold not-italic">über eine Therapie bei uns</span>
              </h2>
            </div>
            
            <div className="flex gap-8 items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 border-r border-slate-100 pr-8">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-xs font-bold text-slate-500">
                  PE
                </div>
                <div>
                  <div className="flex text-[#facc15]">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">SEHR GUT <span className="text-slate-400">81 Bewertungen</span></div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="font-bold text-xl tracking-tighter text-blue-500">G<span className="text-red-500">o</span><span className="text-yellow-500">o</span><span className="text-blue-500">g</span><span className="text-green-500">l</span><span className="text-red-500">e</span></span>
                <div>
                  <div className="text-3xl font-bold">4.9</div>
                  <div className="flex text-[#facc15] mb-1">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                  <div className="text-xs text-slate-500">21 Reviews</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Masonry/Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-md transition-shadow flex flex-col gap-6">
              <p className="text-slate-700 leading-relaxed text-sm">
                Schon beim ersten Termin war es ein sehr gutes und konstruktives Gespräch was mich die ganze Zeit begleitete und Aufbaute.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                  M
                </div>
                <div>
                  <div className="font-semibold text-sm">Michael</div>
                  <div className="text-xs text-slate-500">Auf ProvenExpert veröffentlicht</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-md transition-shadow flex flex-col gap-6">
              <p className="text-slate-700 leading-relaxed text-sm">
                Ich war ein Jahr lang in Therapie und habe mich immer sehr wertgeschätzt und angenommen gefühlt. Dadurch ist es mir auch immer leicht gefallen mich zu öffnen und über meine Probleme und Gefühle zu reden. Meine Therapeutin war sehr einfühlsam und zugewandt, was mir geholfen hat mich selbst noch besser kennen zu lernen und vieles mal aus einer anderen Perspektive zu betrachten. Außerdem habe ich einige Techniken erlernt, die mir auch in Zukunft in schwierigen Situationen helfen und mich weiter bringen können. Danke für Alles!
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                  E
                </div>
                <div>
                  <div className="font-semibold text-sm">Ella</div>
                  <div className="text-xs text-slate-500">Auf Google veröffentlicht</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-md transition-shadow flex flex-col gap-6">
              <p className="text-slate-700 leading-relaxed text-sm">
                Da es sich um eine private Psychotherapie handelt, musste ich einen Antrag bei meiner Krankenkasse stellen. Hierbei waren Sie sehr hilfreich und haben mich bei allem begleitet. Während meiner Therapie bin ich umgezogen und da es ein online Angebot gab, musste ich mir in der neuen Stadt nicht noch einen neue/n Therapeut/in suchen. Die Gespräche haben mir sehr geholfen und mich ein Stück weit voran gebracht. Ich würde Frau Schramm jedem weiterempfehlen.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                  J
                </div>
                <div>
                  <div className="font-semibold text-sm">Julia</div>
                  <div className="text-xs text-slate-500">Auf ProvenExpert veröffentlicht</div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-md transition-shadow flex flex-col gap-6 lg:row-start-2 lg:col-start-1">
              <p className="text-slate-700 leading-relaxed text-sm">
                Ich bin mittlerweile seit 1,5 Jahren in der Praxis in Behandlung und habe mich entschlossen, hier einmal mein Lob mitzuteilen. Mal davon abgesehen, dass ich eine sehr gute Therapeutin abbekommen habe (Frau Nünemann), kann ich auch die Mitarbeiter loben, die dort im Büro arbeiten, und auch Frau Lübberding selbst. Mails werden fast in Rekordzeit beantwortet und es geht immer jemand ans Telefon. Sie sind unter der Woche jeden Tag ein paar Stunden erreichbar, und das zu guten Zeiten, in denen auch jemand, der berufstätig ist, immer eine Chance hat, einen Zeitraum zu finden, der passt. Ich hatte bisher noch niemanden am Telefon, der nicht geduldig und freundlich war und versucht hat, auf meine Bedürfnisse einzugehen. Man hat wirklich das Gefühl, dass diese Praxis das tut, was eigentlich jede Praxis tun sollte: helfen und unterstützen. Dieses Jahr musste ich mich schon durch mehrere Verfahren durchquälen und immer war das Praxisteam an meiner Seite, hat mich gut beraten und mir nützliche Tipps gegeben. Einfach super! Ich möchte auch sagen, wie toll ich das Konzept von Online Therapiesitzungen finde. Zwar war ich auch ein paar Mal in Präsenz bei Frau Nünemann, aber zu 95% online und wenn mein W-LAN funktionierte, hat auch immer alles super geklappt. So ist man einfach viel flexibler.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                  M
                </div>
                <div>
                  <div className="font-semibold text-sm">Millie</div>
                  <div className="text-xs text-slate-500">Auf Google veröffentlicht</div>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-md transition-shadow flex flex-col gap-6 lg:row-start-2 lg:col-start-2">
              <p className="text-slate-700 leading-relaxed text-sm">
                Ich bin sehr zufrieden mit der Praxis! Mit dem ganzen Team, deren Organisation, aber vor allem mit meiner Therapeutin Frau van Laak! Vor ihr war ich bei einer Kollegin aus der Praxis. Doch mit der Hilfe von Frau van Laak konnte ich sehr konstant und sehr viel an mir arbeiten und viel über mich lernen. Ihre Vorgehensweise besteht aus einer tollen Kombination von professioneller Hilfe, Lockerheit und entspanntem Humor. Sie suchte gemeinsam mit mir nach Lösungen für meine Probleme oder hatte immer gleich diverse Lösungsideen parat. Eine tolle Zeit, die ich nicht vergessen werde. Durch diverse Strategien, die in der Therapie erarbeitet wurden, fällt mir mein Alltag sehr viel einfacher/leichter und ich weiß immer, wie ich mit meinen Problemen umgehen und lösen kann. Eine Behandlung oder eher gesagt eine Zusammenarbeit mit ihr empfehle ich stark, vorausgesetzt, man will auch wirklich an sich selbst arbeiten und nimmt Ihre Hilfe an!
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                  M
                </div>
                <div>
                  <div className="font-semibold text-sm">Martje</div>
                  <div className="text-xs text-slate-500">Auf Google veröffentlicht</div>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-md transition-shadow flex flex-col gap-6 lg:row-start-2 lg:col-start-3">
              <p className="text-slate-700 leading-relaxed text-sm">
                Nach 7 Monaten Behandlung kann ich diese Praxis nur weiterempfehlen. Die Praxis von Frau Lübberding ist modern, gut gelegen und schön eingerichtet. Bei dem Team aus freundlichen, sympathischen und vertrauensvollen Frauen fühlte ich mich stets sicher, ernst genommen und gut aufgehoben. Nach mehreren Absagen bei anderen Psychotherapeuten habe ich hier sehr schnell einen Termin für Probesitzungen bekommen und wurde von Frau Lübberding an die zu meiner Situation passende Therapeutin Frau Stelzer weitergeleitet. Alle Formalitäten wie Anträge wurden stets schnell und korrekt bearbeitet. Die Behandlung bei Frau Stelzer war sehr angenehm, äußerst hilfreich und erfolgreich. In Zeiten der Corona Pandemie waren auch Sitzungen per Online Videochat möglich und meiner Meinung genauso produktiv und effektiv wie Sitzungen vor Ort.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                  C
                </div>
                <div>
                  <div className="font-semibold text-sm">Christin</div>
                  <div className="text-xs text-slate-500">Auf Google veröffentlicht</div>
                </div>
              </div>
            </div>
            
          </div>
          
          {/* Proven Expert Widget replacement */}
          <div className="mt-16 bg-white border border-slate-200 rounded-xl p-8 max-w-4xl mx-auto shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border border-slate-100">
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=200" alt="Anna Lübberding" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold font-serif text-lg">ProvenExpert</span>
                    <span className="text-slate-400 text-sm">Kundenbewertungen</span>
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-xl">4.91 <span className="font-normal text-sm text-slate-500">von 5</span></span>
                  </div>
                  <div className="flex text-[#facc15] mb-1">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <div className="font-bold">SEHR GUT <span className="font-normal text-sm text-slate-500 ml-1">123 Bewertungen</span></div>
                </div>
              </div>

              <div className="flex flex-col gap-4 flex-grow max-w-sm">
                <div className="flex items-center gap-4">
                  <div className="text-primary-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="text-xl font-bold text-primary-600">100% <span className="text-sm font-normal text-slate-500 block">Empfehlungen</span></div>
                </div>
              </div>

              <div className="flex flex-col gap-2 max-w-xs w-full text-sm">
                <div className="flex justify-between items-center text-slate-600">
                  <span className="flex items-center gap-2"><Check size={16} className="text-primary-600" /> Kundenservice</span>
                  <span className="text-xs text-slate-400">SEHR GUT (4.88)</span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span className="flex items-center gap-2"><Check size={16} className="text-primary-600" /> Aufwand / Nutzen</span>
                  <span className="text-xs text-slate-400">SEHR GUT (4.91)</span>
                </div>
              </div>

            </div>
            
            <div className="mt-8 pt-4 border-t border-slate-100 flex gap-6 text-sm text-slate-500 justify-between items-center">
               <div className="flex gap-6">
                <span>Top-Kompetenzen:</span>
                <span className="flex items-center gap-1"><Check size={14} className="text-primary-600"/> Professionalität</span>
                <span className="flex items-center gap-1"><Check size={14} className="text-primary-600"/> Kundenzufriedenheit</span>
                <span className="flex items-center gap-1"><Check size={14} className="text-primary-600"/> Persönliches Auftreten</span>
               </div>
               <a href="#" className="text-primary-600 hover:underline">Mehr Infos</a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
