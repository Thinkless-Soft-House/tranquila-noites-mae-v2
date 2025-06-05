import { Shield, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GuaranteeGer = (props) => {
  return (
    <section className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4 max-w-full">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium mb-6">
              <Shield className="w-4 h-4" />
              100% risikofrei
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Volle Garantie
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                7 Tage
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-full">
            {/* Left side - Guarantee details */}
            <div className="space-y-8 animate-slide-up w-full max-w-full" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-lg border w-full max-w-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">Null Risiko</h3>
                    <p className="text-green-600 font-medium">Ihre Zufriedenheit ist garantiert</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>7 volle Tage</strong> um alle Inhalte zu testen
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Vollständige Rückerstattung</strong> ohne Fragen oder Bürokratie
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                    <p className="text-gray-700">
                      <strong>Persönlicher Support</strong> während des gesamten Zeitraums
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 sm:p-6 border border-blue-200 w-full max-w-full">
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  💡 So funktioniert unsere Garantie:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <p className="text-gray-700">Kaufe den Leitfaden heute</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <p className="text-gray-700">Teste 7 volle Tage lang</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <p className="text-gray-700">Nicht zufrieden? Wir erstatten 100% des Betrags zurück</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 sm:p-6 mb-6 w-full max-w-full">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-green-600" />
                  <span className="text-lg font-semibold text-gray-800">Angebot für begrenzte Zeit</span>
                </div>
                <p className="text-gray-600 text-center">
                  Nutze unsere erweiterte Garantie und starte deine Veränderung noch heute
                </p>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 sm:px-10 py-7 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full group flex items-center justify-center gap-2 whitespace-normal text-center"
                onClick={() => {
                  const el = document.getElementById('cta-transformar-noites');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                <span className="flex items-center justify-center gap-2 w-full break-words whitespace-normal">
                  <span role="img" aria-label="escudo">🛡️</span>
                  <span>Ich möchte mit voller Sicherheit starten</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </span>
              </Button>
            </div>
            {/* Right side - Guarantee image and CTA */}
            <div className="text-center animate-scale-in w-full max-w-full" style={{ animationDelay: '0.4s' }}>
              <div className="relative mb-8 w-full flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl opacity-20 w-48 h-48 left-1/2 -translate-x-1/2"></div>
                <img
                  src="/lovable-uploads/garantiager.png"
                  alt="Garantia de 7 dias"
                  className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto drop-shadow-2xl max-w-full"
                  loading="lazy"
                />
              </div>
              <div className="bg-white rounded-3xl p-4 sm:p-8 shadow-xl border w-full max-w-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Ihre Ruhe ist unsere Priorität
                </h3>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Wir sind so überzeugt von den Ergebnissen, dass wir diese bedingungslose Garantie anbieten. Du hast nichts zu verlieren, nur ruhige Nächte zu gewinnen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeGer;
