import { Star } from "lucide-react";

export default function Karriere() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="z-10 bg-white/70 p-8 rounded-3xl backdrop-blur-sm border border-white/60 shadow-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#0f172a] leading-tight mb-8 italic">
              Mitstreiter gesucht - <br/><span className="font-bold not-italic">dein neuer Job wartet</span>
            </h1>
            
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-xl">
              Wir sind eine papierlose, moderne Praxis für Psychotherapie &amp; Coaching.
              Unsere Mission: Einen Ort schaffen, an dem sich Menschen gerne behandeln lassen - und gleichzeitig einen, an dem sie gerne arbeiten.
              Bewirb dich jetzt!
            </p>
            
            <div className="flex gap-6 items-center">
              <a href="#offene-stellen" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md font-semibold transition-all shadow-lg shadow-primary-600/20 text-md">
                Offene Stellen ansehen
              </a>
              <a href="#video" className="text-sm font-semibold hover:text-primary-600 transition-colors flex items-center uppercase tracking-wider">
                Video ansehen &rarr;
              </a>
            </div>
          </div>
          
          {/* Image Collage Placeholder */}
          <div className="relative h-[500px] w-full z-0 hidden md:block">
            {/* We'll make a simplified collage out of 4 images */}
            <div className="absolute top-10 right-0 w-48 h-64 rounded-2xl overflow-hidden shadow-lg transform rotate-3">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-40 right-40 w-56 h-40 rounded-2xl overflow-hidden shadow-lg transform -rotate-2">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-10 right-10 w-48 h-48 rounded-2xl overflow-hidden shadow-lg transform -rotate-3 z-10">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-32 right-52 w-40 h-56 rounded-2xl overflow-hidden shadow-lg transform rotate-6">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
            </div>
            {/* Background blob to mimic the glow in the screenshot */}
            <div className="absolute top-1/2 right-20 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -translate-y-1/2 -z-10"></div>
          </div>

        </div>
      </section>

      {/* Video Section Placeholder */}
      <section id="video" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-200 aspect-video relative flex items-center justify-center cursor-pointer group">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
          
          <div className="absolute w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform shadow-lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          
          {/* Fake Video Player Controls */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex gap-4 items-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="w-1/4 h-full bg-primary-500"></div>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium shrink-0">
               <span>9:17</span>
               <span className="opacity-50">/ 14:02</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-light text-[#0f172a] mb-8 italic">Unsere <span className="font-bold not-italic">Mission</span></h2>
            <div className="space-y-6 text-slate-500 leading-relaxed text-[15px]">
              <p>
                Unsere Mission ist es, einen Ort zu schaffen, an dem der Mensch als Mensch gesehen und behandelt wird - mit allen Facetten. Das gilt sowohl für unsere Patient:innen als auch für uns als Team. Wir möchten einen Unterschied machen in der Psychotherapielandschaft, wo Kassensitze im großen Stil von MVZ-Betreibern aufgekauft werden, die selten von Psychotherapeut:innen geführt werden und wenig Spielraum für eigene Entfaltung und Gestaltung bieten. Bei uns ist das anders: Die Praxen sind von einer Psychotherapeutin gegründet und geleitet. Bei uns kannst du mitwirken, Prozesse entwickeln und verbessern, dich fortbilden und deine Ideen verwirklichen.
              </p>
              <p>
                Auch für unsere Patient:innen arbeiten wir unermüdlich daran, eine gute Behandlung bei uns zu gewährleisten, ansprechbar zu sein und begegnen ihnen und uns gegenseitig mit Empathie und Wertschätzung.
              </p>
              <p>
                Du willst bessere Eindrücke aus erster Hand? Schau dir gerne in unsere Bewertungen bei Google, Provenexpert oder Kununu an.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col justify-center gap-8 pl-0 md:pl-12 border-l-0 md:border-l border-slate-200">
            
            <div className="relative">
              <h3 className="font-bold text-[#1e293b] mb-2 flex items-center gap-2">
                <span className="text-xl">📱</span> Digitale Praxis
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Digitale Aktenführung oder Online-Sprechstunde: Wir stellen Tablet, Laptop und sämtliche erforderliche Utensilien für effiziente papierlose Arbeit bereit.
              </p>
            </div>

            <div className="relative">
              <h3 className="font-bold text-[#1e293b] mb-2 flex items-center gap-2">
                <span className="text-xl">🧘‍♀️</span> Flexible Arbeitsgestaltung
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bei uns besteht sowohl die Möglichkeit, hybrid zu arbeiten, als auch seine Arbeitszeiten frei zu gestalten.
              </p>
            </div>

            <div className="relative">
              <h3 className="font-bold text-[#1e293b] mb-2 flex items-center gap-2">
                <span className="text-xl">👥</span> Positives Arbeitsklima
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Wir sind einander wichtig - und das führt zu einem wertschätzenden, angenehmen Arbeitsklima. Wir freuen uns, wenn auch du ein Teil davon werden möchtest!
              </p>
            </div>

          </div>
        </div>

        {/* Team Image full width rounded below mission */}
        <div className="mt-24 rounded-3xl overflow-hidden h-[400px] shadow-lg">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Corporate Values */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-[#0f172a] mb-12 italic">Unsere <span className="font-bold not-italic">Werte</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            <div>
               <h3 className="font-bold text-[#1e293b] mb-3 flex items-center gap-2">
                <span className="text-lg">💡</span> Transparenz
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Offenheit und Ehrlichkeit sind uns sehr wichtig. Wir teilen Informationen und Einblicke offen, damit du die Zusammenhänge verstehst und zur Gestaltung unserer gemeinsamen Zukunft beitragen kannst.
              </p>
            </div>

            <div>
               <h3 className="font-bold text-[#1e293b] mb-3 flex items-center gap-2">
                <span className="text-lg">💕</span> Du bist wichtig
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Deine Bedürfnisse liegen uns am Herzen. Wir sind dankbar für deine Anregungen und schätzen dein Feedback und deine Ideen. Diese Wertschätzung ist uns bei allen Menschen wichtig - wir alle wollen mit unseren Eigenheiten angenommen werden.
              </p>
            </div>

            <div>
               <h3 className="font-bold text-[#1e293b] mb-3 flex items-center gap-2">
                <span className="text-lg">🛠️</span> Mach' dein Ding!
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Wir glauben, dass Menschen am besten arbeiten, wenn sie eigenverantwortlich handeln können. Bei uns hast du die Freiheit, deine Arbeit weitestgehend selbstbestimmt durchzuführen und zu gestalten.
              </p>
            </div>

            <div className="lg:col-start-1">
               <h3 className="font-bold text-[#1e293b] mb-3 flex items-center gap-2">
                <span className="text-lg">🤝</span> Arbeiten auf Augenhöhe
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Hier geht es nicht um Hierarchien, sondern um Ideen und Zusammenarbeit. Bei uns herrscht eine Atmosphäre, in der sich alle wohl genug fühlen, um sich auszudrücken, Vorschläge zu machen und Verantwortung zu übernehmen.
              </p>
            </div>

            <div>
               <h3 className="font-bold text-[#1e293b] mb-3 flex items-center gap-2">
                <span className="text-lg">🧑‍🤝‍🧑</span> Alle für alle
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Wir sind ein Team - uns ist es wichtig, dass wir uns alle als solches verstehen, voneinander lernen und gemeinsam unseren Arbeitsalltag gestalten.
              </p>
            </div>

            <div>
               <h3 className="font-bold text-[#1e293b] mb-3 flex items-center gap-2">
                <span className="text-lg">🎯</span> Geht nicht, gibt's nicht
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Wir finden für alles eine Lösung - getreu dem Motto der Praxis.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="offene-stellen" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-light text-[#0f172a] mb-6 italic">Offene <span className="font-bold not-italic">Positionen</span></h2>
        <p className="text-slate-500 mb-12">Nachfolgend findest du unsere Stellenausschreibungen. Wir freuen uns auf deine Bewerbung!</p>
        
        <div className="flex flex-col gap-0 border-t border-slate-200">
          
          {/* Job 1 */}
          <div className="border-b border-slate-200 py-8">
            <h3 className="text-lg font-bold text-[#1e293b] mb-4">
              Sachbearbeiter:in vorbereitende Buchhaltung &amp; Abrechnung psychotherapeutischer Leistungen
            </h3>
            <p className="text-sm text-slate-600 mb-6 max-w-3xl leading-relaxed">
              Du möchtest Deine Fähigkeiten im Finanz- und Sachbearbeitungsbereich in einem sinnstiftenden Umfeld einsetzen? Unsere Psychotherapiepraxis bietet Dir die Chance, Deine Expertise in der Buchhaltung und Sachbearbeitung einzubringen
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
              <span>Hamburg</span>
              <span>Veröffentlicht am 15. März 2026</span>
            </div>
            <a href="#" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-all shadow-lg shadow-primary-600/20">
              Job ansehen
            </a>
          </div>

          {/* Job 2 */}
          <div className="border-b border-slate-200 py-8">
            <h3 className="text-lg font-bold text-[#1e293b] mb-4">
              Praxisleitung (m/w/d) für Psychotherapie | Standort Hamburg-Winterhude
            </h3>
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
              <span>Hamburg</span>
              <span>Veröffentlicht am 02. März 2026</span>
            </div>
            <a href="#" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-all shadow-lg shadow-primary-600/20">
              Job ansehen
            </a>
          </div>

          {/* Job 3 */}
          <div className="border-b border-slate-200 py-8">
            <h3 className="text-lg font-bold text-[#1e293b] mb-4">
              Hochschul-Praktikum Psychologie: Studierende (B.Sc. oder M.Sc. Psychologie) m/w/d in Hamburg
            </h3>
            <p className="text-sm text-slate-600 mb-6 max-w-3xl leading-relaxed">
              Praktikum für Psychologiestudierende
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
              <span>Hamburg</span>
              <span>Veröffentlicht am 02. März 2026</span>
            </div>
            <a href="#" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-all shadow-lg shadow-primary-600/20">
              Job ansehen
            </a>
          </div>

          {/* Job 4 */}
          <div className="border-b border-slate-200 py-8">
            <h3 className="text-lg font-bold text-[#1e293b] mb-4">
              Hochschul-Praktikum: Studierende (B.Sc. oder M.Sc. Wirtschafts-/Psychologie) m/w/d in Hamburg
            </h3>
            <p className="text-sm text-slate-600 mb-6 max-w-3xl leading-relaxed">
              Praktikum für Psychologiestudierende
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
              <span>Hamburg</span>
              <span>Veröffentlicht am 16. Februar 2026</span>
            </div>
            <a href="#" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-all shadow-lg shadow-primary-600/20">
              Job ansehen
            </a>
          </div>
          
          {/* Job 5 */}
          <div className="border-b border-slate-200 py-8">
            <h3 className="text-lg font-bold text-[#1e293b] mb-4">
              Psychologische Psychotherapeut:innen (TP/VT/ST) - NEUE GEHALTSMODELLE - Hybrid möglich
            </h3>
             <p className="text-sm text-slate-600 mb-6 max-w-3xl leading-relaxed">
              Du möchtest einen echten Unterschied machen und dabei Menschen unterstützen, die oft mit besonderen Herausforderungen konfrontiert sind? Dann werde Teil unseres Teams in Hamburg Barmbek Süd!
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
              <span>Remote</span>
              <span>Veröffentlicht am 19. Dezember 2025</span>
            </div>
            <a href="#" className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-all shadow-lg shadow-primary-600/20">
              Job ansehen
            </a>
          </div>

        </div>
      </section>

      {/* Kununu Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Review 1 */}
          <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
            <div className="flex text-[#0f9d58] mb-4">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <h4 className="font-bold text-lg mb-4 text-[#1e293b]">Sehr tolle Arbeitgeberin</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sehr tolle Arbeitgeberin, die sich Zeit für einen nimmt. Die Arbeitsbedingungen sind wirklich toll, hier wird mit Herz &amp; Leidenschaft gearbeitet. Ich habe für meinen weiteren Weg sehr viele Einblicke erhalten und viel lernen können, dass Praktikanten so geschätzt und mit eingebunden werden, wie dort, ist wirklich sehr selten. Die Arbeitsatmosphäre war wirklich sehr angenehm. Alle sind super herzlich und offen. Man fühlt sich von Tag 1 an wohl. Hier werden Praktikanten in super viele Bereiche mit einbezogen. Dies gibt den Praktikanten eine wertvolle Gelegenheit ihre Fähigkeiten und Kenntnisse zu erweitern und Erfahrungen in verschiedenen Arbeitsbereichen zu sammeln.
            </p>
            <div className="mt-6 text-xl font-bold tracking-tighter text-[#1e293b]">kununu<sup className="text-xs">®</sup></div>
          </div>

          {/* Review 2 */}
          <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
            <div className="flex text-[#0f9d58] mb-4">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
            <h4 className="font-bold text-lg mb-4 text-[#1e293b]">Tolles Konzept...</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Besonders gefällt mir das Konzept der Praxis. Der Chefin ist besonders wichtig Psychotherapie für möglichst viele Patientinnen anzubieten. Dafür hat sie ihren Privatpraxis gegründet und arbeitet viel mit dem Kostenerstattungsverfahren, sodass die Patientinnen die Therapie nicht selbst bezahlen müssen. Das finde ich sehr beeindruckend und sie ist für mich ein Vorbild. Das Team aus Therapeutinnen und Therapeuten ist äußerst kompetent und einfühlsam. Schon von Anfang an fühlte ich mich willkommen und konnte mich darauf verlassen, dass meine Fragen und Anliegen stets ernst genommen und wertschätzend behandelt wurden. Ich hatte jederzeit die Möglichkeit alle Fragen, die aufkamen zu stellen.
            </p>
            <div className="mt-6 text-xl font-bold tracking-tighter text-[#1e293b]">kununu<sup className="text-xs">®</sup></div>
          </div>

        </div>
      </section>

    </div>
  );
}
