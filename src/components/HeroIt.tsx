import { Button } from "@/components/ui/button";
import { Star, Shield, Users } from "lucide-react";

const HeroIt = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-accent-300 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-32 w-20 h-20 bg-primary-300 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 pt-8 pb-16 relative">
        {/* Logo */}
        <div className="flex items-center justify-center mb-12 animate-fade-in">
          <img 
            src="/lovable-uploads/logoit.webp" 
            alt="Mamma Serena Logo" 
            className="h-20 w-auto drop-shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-8 mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center gap-2 text-primary-600">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-sm font-medium">+5.000 mamme soddisfatte</span>
          </div>
          <div className="flex items-center gap-2 text-primary-600">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">Garanzia di 7 giorni</span>
          </div>
          <div className="flex items-center gap-2 text-primary-600">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">Approvato dagli specialisti</span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in w-full max-w-[95vw] sm:max-w-xl mx-auto" style={{animationDelay: '0.4s'}}>
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight break-words">
                <span className="text-gray-800">Stanca di</span>
                <span className="block text-primary-600 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  notti insonni?
                </span>
                <span className="block text-gray-800 text-4xl lg:text-5xl mt-4">
Abbiamo la <span className="text-accent-600">soluzione</span>.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-full lg:max-w-none break-words">
                Scopri il metodo che ha già trasformato la vita di <strong className="text-primary-600">migliaia di mamme</strong> e finalmente goditi le notti tranquille che meriti.
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-6 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform w-full sm:w-auto mx-auto"
                onClick={() => {
                  const el = document.getElementById('cta-transformar-noites');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                ✨ Voglio una maternità più serena
              </Button>
              
              <p className="text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-2">
                <Shield className="w-4 h-4" />
                Acquisto 100% sicuro • Accesso immediato
              </p>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center lg:justify-start gap-1 pt-4">
              <div className="flex -space-x-2">
                <img src="/lovable-uploads/07734f1e-a5f0-4aba-971a-2dc3247575f4.png" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white object-cover" loading="lazy"/>
                <img src="/lovable-uploads/3d25edc9-75e1-4ebe-a4aa-53ac97b5ae70.png" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white object-cover" loading="lazy"/>
                <img src="/lovable-uploads/5da3d5d9-b257-4191-a403-37731032c15e.png" alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white object-cover" loading="lazy"/>
              </div>
              <div className="ml-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Oltre 5.000 recensioni a 5 stelle</p>
              </div>
            </div>
          </div>
          
          {/* Right content - Product image */}
          <div className="flex justify-center animate-scale-in" style={{animationDelay: '0.6s'}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
              <img 
                src="/lovable-uploads/mockupit.webp" 
                alt="Mamma Serena - Guida Digitale" 
                className="relative w-full max-w-md sm:max-w-lg md:max-w-lg lg:max-w-lg h-[28.75rem] sm:h-[32rem] md:h-[36rem] rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 object-contain"
                loading="lazy"
              />
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">100%</div>
                  <div className="text-xs text-gray-600">Digitale</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">7</div>
                  <div className="text-xs text-gray-600">Giorni</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroIt;
