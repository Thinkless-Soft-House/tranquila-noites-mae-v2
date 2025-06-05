import { Button } from "@/components/ui/button";
import { Shield, Clock, Star, ArrowRight, Gift } from "lucide-react";
import { useTranslation } from "react-i18next";

const FinalCTA = () => {
  const { t } = useTranslation();
  const paymentLink = "https://pay.kirvano.com/723dbad7-ba44-4223-acc9-a874956fc05b"; // Keep link static
  const ctaPoints = t("finalCta.ctaPoints", { returnObjects: true }) as string[];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white rounded-full opacity-5 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-accent-300 rounded-full opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-medium mb-6">
              <Gift className="w-4 h-4" />
              {t("finalCta.badge")}
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {t("finalCta.titleLine1")}
              <span className="block text-accent-300">{t("finalCta.titleLine2")}</span>
            </h2>
            
            <p className="text-xl lg:text-2xl mb-8 text-primary-100 leading-relaxed max-w-3xl mx-auto">
              {t("finalCta.subtitlePart1")} <strong>{t("finalCta.subtitlePart2")}</strong>
              {t("finalCta.subtitlePart3")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Product and offer */}
            <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-white rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
                <img 
                  src="/lovable-uploads/80510ec7-7bcf-44d8-8b82-0935e173eea4.png" 
                  alt={t("finalCta.imageAlt")} 
                  className="relative w-full max-w-sm mx-auto rounded-2xl shadow-2xl"
                />
                
                {/* Price badge */}
                <div className="absolute -top-4 right-2 sm:-right-4 bg-accent-500 text-white rounded-full p-4 shadow-lg animate-float">
                  <div className="text-center">
                    <div className="text-xs font-medium">{t("finalCta.priceOld")}</div>
                    <div className="text-2xl font-bold">{t("finalCta.priceNew")}</div>
                  </div>
                </div>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <Shield className="w-8 h-8 text-accent-300 mx-auto mb-2" />
                  <div className="text-sm text-white font-medium">{t("finalCta.trustIndicator1")}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <Clock className="w-8 h-8 text-accent-300 mx-auto mb-2" />
                  <div className="text-sm text-white font-medium">{t("finalCta.trustIndicator2")}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <Star className="w-8 h-8 text-accent-300 mx-auto mb-2" />
                  <div className="text-sm text-white font-medium">{t("finalCta.trustIndicator3")}</div>
                </div>
              </div>
            </div>

            {/* Right side - CTA */}
            <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-2xl max-w-[95vw] mx-auto">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  {t("finalCta.ctaTitle")}
                </h3>
                
                <div className="space-y-4 mb-8">
                  {Array.isArray(ctaPoints) && ctaPoints.map((point, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  id="cta-transformar-noites"
                  size="lg" 
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 sm:px-10 py-8 text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full group mx-auto flex items-center justify-center gap-2 whitespace-normal text-center"
                  asChild
                >
                  <a href={paymentLink}>
                    <span className="flex items-center justify-center gap-2 w-full break-words whitespace-normal">
                      {/* Moon emoji might need adjustment or removal for i18n */}
                      <span role="img" aria-label="lua">🌙</span> 
                      <span>{t("finalCta.ctaButton").substring(t("finalCta.ctaButton").indexOf(' ') + 1)}</span>
                      <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </span>
                  </a>
                </Button>
                
                <div className="text-center mt-6 space-y-2">
                  <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" />
                    {t("finalCta.ctaSubtext1")}
                  </p>
                  <p className="text-xs text-gray-400">
                    {t("finalCta.ctaSubtext2")}
                  </p>
                </div>
              </div>

              {/* Urgency */}
              <div className="bg-red-500 text-white rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Clock className="w-5 h-5" />
                  <span className="font-bold">{t("finalCta.urgencyTitle")}</span>
                </div>
                <p className="text-sm">
                  {t("finalCta.urgencyText")}
                </p>
              </div>
            </div>
          </div>

          {/* Final message */}
          <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {t("finalCta.finalMessageTitle")}
              </h3>
              <p className="text-lg text-primary-100 max-w-3xl mx-auto">
                {t("finalCta.finalMessageText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

