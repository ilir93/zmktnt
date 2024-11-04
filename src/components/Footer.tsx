import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Rreth Poezive të Dashurisë</h2>
      <div className="prose prose-rose max-w-none">
        <p className="text-gray-700 leading-relaxed">
          Poezitë e dashurisë janë një mënyrë e bukur për të shprehur ndjenjat tona më të thella. Që nga kohët e lashta, poetët shqiptarë kanë përdorur fjalët për të përjetësuar dashurinë në vargje që prekin zemrën. Këto poezi dashurie janë një pasqyrë e ndjenjave më të sinqerta që mund të përjetojë një zemër e dashuruar.
        </p>
        
        <p className="text-gray-700 leading-relaxed mt-4">
          Në kulturën tonë shqiptare, poezitë e dashurisë kanë një vend të veçantë. Ato janë përdorur për shekuj me radhë për të shprehur dashurinë, mallin, dhe dëshirën. Çdo poezi dashurie është një dritare e vogël që na lejon të shohim thellë në shpirtin e poetit dhe të ndjejmë emocionet e tij të sinqerta.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          Koleksioni ynë përfshin poezi dashurie të zgjedhura me kujdes, duke filluar nga vargjet klasike deri tek krijimet moderne. Këto poezi janë të përshtatshme për çdo moment të veçantë - nga shprehja e dashurisë së parë deri tek përvjetoret e rëndësishme të çifteve.
        </p>
        
        <h3 className="text-xl font-semibold mt-8 mb-4">Pyetjet më të Shpeshta</h3>
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold">Si të shkruaj një poezi dashurie?</h4>
            <p>Shkruani nga zemra, përdorni ndjenjat tuaja të vërteta dhe mos u mundoni të jeni perfekt. Poezia më e mirë e dashurisë është ajo që vjen natyrshëm nga përjetimet tuaja personale.</p>
          </div>
          <div>
            <h4 className="font-semibold">Cilat janë elementet e një poezie dashurie?</h4>
            <p>Ndjenja e sinqertë, figura letrare, ritmi dhe rimë janë elementet kryesore të një poezie dashurie. Gjithashtu, përdorimi i metaforave dhe krahasimeve e bën poezinë më të pasur dhe më ekspresive.</p>
          </div>
          <div>
            <h4 className="font-semibold">Kur është momenti i duhur për të dërguar një poezi dashurie?</h4>
            <p>Çdo moment është i përshtatshëm për të shprehur dashurinë përmes poezisë. Megjithatë, ditëlindjet, përvjetoret, Dita e Shën Valentinit apo thjesht një ditë e zakonshme mund të bëhet e veçantë me një poezi të bukur dashurie.</p>
          </div>
          <div>
            <h4 className="font-semibold">A duhet të rimojnë poezitë e dashurisë?</h4>
            <p>Jo domosdoshmërisht. Ndërsa rimat tradicionale janë të bukura, poezitë moderne të dashurisë mund të jenë edhe në vargje të lira. E rëndësishme është që mesazhi dhe ndjenja të përcillen në mënyrë të sinqertë.</p>
          </div>
          <div>
            <h4 className="font-semibold">Si të zgjedh poezinë e duhur për partnerin tim?</h4>
            <p>Zgjidhni një poezi që reflekton ndjenjat tuaja të vërteta dhe që përshtatet me personalitetin e partnerit tuaj. Ndonjëherë poezitë më të thjeshta mund të kenë ndikimin më të madh emocional.</p>
          </div>
          <div>
            <h4 className="font-semibold">A mund të përdor poezitë e dashurisë në rrjetet sociale?</h4>
            <p>Po, poezitë tona mund të ndahen lirisht në rrjetet sociale, por është e këshillueshme të përmendni autorin nëse dihet. Përdorni butonin e ndarjes për të shpërndarë lehtësisht poezitë tuaja të preferuara.</p>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-600">
        © {currentYear} Poezi Dashurie Per Ty
      </div>
    </footer>
  );
}