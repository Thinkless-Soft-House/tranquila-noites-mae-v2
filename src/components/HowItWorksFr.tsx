import { ArrowRight, Clock, Target, Heart, Sparkles } from "lucide-react";

const HowItWorksFr = () => {
  const steps = [
    {
      number: "1",
      icon: Target,
      title: "Diagnostic initial",
      description: "Identifiez le profil de votre bébé et les principales causes des problèmes de sommeil",
      time: "Jour 1"
    },
    {
      number: "2", 
      icon: Heart,
      title: "Préparation de l'environnement",
      description: "Aménagez la chambre et créez l'atmosphère parfaite pour des nuits paisibles",
      time: "Jours 2-3"
    },
    {
      number: "3",
      icon: Clock,
      title: "Mise en place de la routine",
      description: "Établissez des horaires et des rituels adaptés à votre famille",
      time: "Jours 4-5"
    },
    {
      number: "4",
      icon: Sparkles,
      title: "Ajustements et résultats",
      description: "Faites les derniers ajustements et célébrez vos premières nuits paisibles",
      time: "Jours 6-7"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full font-medium mb-6">
            <Clock className="w-4 h-4" />
            Méthode testée et approuvée
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Comment fonctionne la méthode<br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Maman Tranquille
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un plan structuré de 7 jours pour transformer complètement les nuits de votre famille
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
                🎉 Résultats que vous pouvez attendre :
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">85%</div>
                  <p className="text-gray-700">des mamans constatent une amélioration dès la première semaine</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-600 mb-2">6-8h</div>
                  <p className="text-gray-700">de sommeil ininterrompu par nuit</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">97%</div>
                  <p className="text-gray-700">recommanderaient la méthode à d'autres mamans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksFr;
