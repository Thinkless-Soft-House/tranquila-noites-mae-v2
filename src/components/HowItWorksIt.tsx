import { ArrowRight, Clock, Target, Heart, Sparkles } from "lucide-react";

const HowItWorksIt = () => {
  const steps = [
    {
      number: "1",
      icon: Target,
      title: "Diagnosi iniziale",
      description: "Identifica il profilo del tuo bambino e le principali cause dei problemi di sonno",
      time: "Giorno 1"
    },
    {
      number: "2",
      icon: Heart,
      title: "Preparazione dell'ambiente",
      description: "Prepara la stanza e crea l'atmosfera perfetta per notti tranquille",
      time: "Giorni 2-3"
    },
    {
      number: "3",
      icon: Clock,
      title: "Implementazione della routine",
      description: "Stabilisci orari e rituali che funzionano per la tua famiglia",
      time: "Giorni 4-5"
    },
    {
      number: "4",
      icon: Sparkles,
      title: "Regolazioni e risultati",
      description: "Fai gli ultimi aggiustamenti e celebra le tue prime notti di pace",
      time: "Giorni 6-7"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full font-medium mb-6">
            <Clock className="w-4 h-4" />
            Metodo testato e approvato
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Come funziona il metodo<br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Mamma Serena
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un piano strutturato di 7 giorni per trasformare completamente le notti della tua famiglia
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-8 z-10">
                    <ArrowRight className="w-6 h-6 text-primary-300 mx-auto" />
                  </div>
                )}
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary-200 relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-accent-100 rounded-bl-full opacity-50"></div>
                  {/* Step number */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  {/* Time badge */}
                  <div className="inline-flex items-center gap-1 bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Clock className="w-3 h-3" />
                    {step.time}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Results section */}
          <div className="mt-20 bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-12 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                🎉 Risultati che puoi aspettarti:
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">85%</div>
                  <p className="text-gray-700">delle mamme vedono miglioramenti già nella prima settimana</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-600 mb-2">6-8h</div>
                  <p className="text-gray-700">di sonno ininterrotto per notte</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">97%</div>
                  <p className="text-gray-700">consiglierebbero il metodo ad altre mamme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksIt;
