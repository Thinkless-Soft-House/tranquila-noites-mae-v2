import { Button } from "@/components/ui/button";
import { Star, Shield, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || i18n.language || "pt";

  // Imagens dinâmicas por idioma
  const logoSrc = `/lovable-uploads/logo_${lang}.webp`;
  const mockupSrc = `/lovable-uploads/mockup_${lang}.webp`;

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
            src={logoSrc}
            alt={t("hero.logoAlt")}
            className="h-20 w-auto drop-shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Trust indicators */}
        <div className="flex justify-center items-center gap-8 mb-12 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="flex items-center gap-2 text-primary-600">
            <Star className="w-5 h-5 fill-current" />
            <span className="text-sm font-medium">{t("hero.trustIndicator1")}</span>
          </div>
          <div className="flex items-center gap-2 text-primary-600">
            <Shield className="w-5 h-5" />
            <span className="text-sm font-medium">{t("hero.trustIndicator2")}</span>
          </div>
          <div className="flex items-center gap-2 text-primary-600">
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">{t("hero.trustIndicator3")}</span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in w-full max-w-[95vw] sm:max-w-xl mx-auto" style={{animationDelay: '0.4s'}}>
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight break-words">
                <span className="text-gray-800">{t("hero.titleLine1")}</span>
                <span className="block text-primary-600 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                  {t("hero.titleLine2")}
                </span>
                <span className="block text-gray-800 text-4xl lg:text-5xl mt-4">
                  {t("hero.titleLine3")} <span className="text-accent-600">{t("hero.titleLine4")}</span>.
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-full lg:max-w-none break-words">
                {t("hero.subtitlePart1")} <strong className="text-primary-600">{t("hero.subtitlePart2")}</strong> 
                {t("hero.subtitlePart3")}
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
                {t("hero.ctaButton")}
              </Button>
              
              <p className="text-sm text-gray-500 flex items-center justify-center lg:justify-start gap-2">
                <Shield className="w-4 h-4" />
                {t("hero.ctaSubtext")}
              </p>
            </div>

            {/* Social proof */}
            <div className="flex items-center justify-center lg:justify-start gap-1 pt-4">
              <div className="flex -space-x-2">
                <img src="/lovable-uploads/mae3.webp" alt={t("hero.socialProofAlt")} className="w-10 h-10 rounded-full border-2 border-white object-cover" loading="lazy"/>
                <img src="/lovable-uploads/mae1.webp" alt={t("hero.socialProofAlt")} className="w-10 h-10 rounded-full border-2 border-white object-cover" loading="lazy"/>
                <img src="/lovable-uploads/mae2.webp" alt={t("hero.socialProofAlt")} className="w-10 h-10 rounded-full border-2 border-white object-cover" loading="lazy"/>
              </div>
              <div className="ml-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">{t("hero.socialProofText")}</p>
              </div>
            </div>
          </div>
          
          {/* Right content - Product image */}
          <div className="flex justify-center animate-scale-in" style={{animationDelay: '0.6s'}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
              <img 
                src={mockupSrc}
                alt={t("hero.productImageAlt")}
                className="relative w-full max-w-md sm:max-w-lg md:max-w-lg lg:max-w-lg h-[28.75rem] sm:h-[32rem] md:h-[36rem] rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 object-contain"
                loading="lazy"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{t("hero.badge1Value")}</div>
                  <div className="text-xs text-gray-600">{t("hero.badge1Label")}</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg animate-float" style={{animationDelay: '1s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-600">{t("hero.badge2Value")}</div>
                  <div className="text-xs text-gray-600">{t("hero.badge2Label")}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

