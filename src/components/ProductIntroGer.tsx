import { Star, BookOpen, CheckCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductIntroGer = (props) => {
  const features = [
    {
      icon: BookOpen,
      title: "Wissenschaftlich validierte Techniken",
      description: "Von Kinderärzten und Schlafexperten empfohlene Methoden"
    },
    {
      icon: CheckCircle,
      title: "Praktische Checklisten",
      description: "Schritt-für-Schritt-Anleitungen zur einfachen Umsetzung jeder Technik"
    },
    {
      icon: Users,
      title: "Echte Erfahrungsberichte",
      description: "Inspirierende Geschichten von Müttern, die ihre Nächte verändert haben"
    },
    {
      icon: Clock,
      title: "7-Tage-Plan",
      description: "Strukturierter Zeitplan für schnelle und nachhaltige Ergebnisse"
    }
  ];
  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4 max-w-full">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            Methode Nr. 1 für Kinderschlaf
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Mehr als ein Leitfaden,<br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              eine komplette Transformation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-primary-600">Entspannte Mama</strong> ist das Ergebnis jahrelanger Forschung und echter Erfahrung mit tausenden Familien. Eine Methode, die wirklich funktioniert.
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
                src="/lovable-uploads/mockupger.png" 
                alt="Mamãe Tranquila - Guia Digital" 
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
                Das findest du im Leitfaden:
              </h3>
              <div className="space-y-4">
                {[
                  "7 bewährte Techniken, damit dein Baby schnell einschläft",
                  "Wie du die perfekte Schlafumgebung schaffst",
                  "Routinen, die in jedem Alter wirklich funktionieren",
                  "Was tun, wenn scheinbar nichts hilft",
                  "Selbstfürsorge-Techniken für erschöpfte Mütter",
                  "Tag-für-Tag-Umsetzungsplan"
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
                <h4 className="text-lg font-semibold text-gray-800">Exklusiver Bonus</h4>
              </div>
              <p className="text-gray-700">
                <strong>Zugang zur privaten Gruppe</strong> mit anderen Müttern, die denselben Weg gehen. Unterstützung, Tipps und ganz viel Herzlichkeit! 💜
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
              🎯 Ich will meine Nächte verändern
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntroGer;
