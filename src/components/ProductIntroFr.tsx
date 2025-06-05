import { Star, BookOpen, CheckCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductIntroFr = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Techniques validées scientifiquement",
      description: "Méthodes approuvées par des pédiatres et des spécialistes du sommeil infantile"
    },
    {
      icon: CheckCircle,
      title: "Checklists pratiques",
      description: "Guides étape par étape pour appliquer chaque technique facilement"
    },
    {
      icon: Users,
      title: "Témoignages réels",
      description: "Histoires inspirantes de mamans qui ont transformé leurs nuits"
    },
    {
      icon: Clock,
      title: "Plan de 7 jours",
      description: "Programme structuré pour des résultats rapides et durables"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4 max-w-full">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            Méthode n°1 pour le sommeil des bébés
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Plus qu'un guide,<br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              une transformation complète
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-primary-600">Maman Tranquille</strong> est le résultat d'années de recherche et 
            d'expérience réelle avec des milliers de familles. Une méthode qui fonctionne vraiment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="animate-scale-in w-full max-w-[95vw] mx-auto" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl blur-3xl opacity-30 transform rotate-3"></div>
              <img 
                src="/lovable-uploads/mockupfr.png" 
                alt="Mamãe Tranquila - Guide Digital" 
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
                Ce que vous trouverez dans le guide :
              </h3>
              
              <div className="space-y-4">
                {[
                  "7 techniques éprouvées pour endormir rapidement votre bébé",
                  "Comment créer l'environnement parfait pour le sommeil",
                  "Des routines qui fonctionnent vraiment pour chaque âge",
                  "Que faire lorsque rien ne semble fonctionner",
                  "Techniques d'auto-soin pour la maman épuisée",
                  "Plan de mise en œuvre jour après jour"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-2xl border border-primary-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white fill-current" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Bonus Exclusif</h4>
              </div>
              <p className="text-gray-700">
                <strong>Accès au groupe privé</strong> avec d'autres mamans qui vivent la même expérience. 
                Soutien, conseils et beaucoup d'affection ! 💜
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full lg:w-auto"
              onClick={() => {
                const el = document.getElementById('cta-transformar-noites');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
            >
              🎯 Je veux transformer mes nuits
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntroFr;
