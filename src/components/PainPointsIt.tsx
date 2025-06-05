import { Check, X } from "lucide-react";

const PainPointsIt = () => {
  const problems = [
    "Dorme male ogni notte e si sveglia più volte",
    "Si sente esausta fisicamente ed emotivamente",
    "Ha paura di sbagliare come madre e di danneggiare il bambino",
    "Piange di nascosto per la stanchezza e l'esaurimento",
    "Non riesce ad avere un momento di riposo",
    "Sente di aver perso la propria identità e libertà"
  ];

  const solutions = [
    "Notti tranquille con 6-8 ore di sonno",
    "Energia rinnovata per godersi la maternità",
    "Fiducia totale nelle proprie capacità materne",
    "Momenti di pace e gioia con il tuo bambino",
    "Tempo per prendersi cura di sé",
    "Equilibrio tra essere madre ed essere donna"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Ti riconosci in questa situazione?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Migliaia di mamme vivono questo ogni giorno. Ma c'è una luce in fondo al tunnel.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-12 items-center max-w-7xl mx-auto">
          {/* Problems - Left */}
          <div className="space-y-6 animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-red-600 mb-2">😰 Prima</h3>
              <p className="text-gray-600">Quello che stai vivendo ora</p>
            </div>
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-xl"
              >
                <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{problem}</p>
              </div>
            ))}
          </div>
          {/* Center image */}
          <div className="flex flex-col items-center animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              <img 
                src="/lovable-uploads/mae.webp" 
                alt="Mamma stanca con bambino" 
                className="w-full max-w-sm rounded-3xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
            </div>
            <div className="mt-8 text-center">
              <div className="bg-white rounded-full p-4 shadow-lg inline-flex items-center gap-3 transform -translate-y-8">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Situazione attuale</span>
                <div className="w-8 h-0.5 bg-gray-300"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">La tua nuova vita</span>
              </div>
            </div>
          </div>
          {/* Solutions - Right */}
          <div className="space-y-6 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-green-600 mb-2">✨ Dopo</h3>
              <p className="text-gray-600">Come sarà la tua vita</p>
            </div>
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 p-4 bg-green-50 border border-green-200 rounded-xl"
              >
                <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{solution}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl mx-auto border">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              🎯 La trasformazione è a portata di mano
            </h3>
            <p className="text-lg text-gray-600">
              Con il metodo <strong className="text-primary-600">Mamma Serena</strong>,
              passerai dall'esaurimento totale a notti di pace in soli 7 giorni.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsIt;
