import React, { useState } from "react";
import FAQ from "./FAQ";

export default function FAQGer(props) {
  // Tradução dos textos para alemão
  const faqs = [
    {
      question: "Für welches Alter ist die Methode geeignet?",
      answer: "Die Methode Mamãe Tranquila ist für Babys von 0 bis 24 Monaten wirksam. Wir haben spezifische Techniken für jedes Alter: Neugeborene (0-3 Monate), Babys (4-12 Monate) und Kleinkinder (13-24 Monate). Jede Phase hat ihre Besonderheiten und der Leitfaden behandelt alle ausführlich."
    },
    {
      question: "Funktioniert es auch bei sehr unruhigen Babys?",
      answer: "Ja! Wir arbeiten besonders mit sogenannten 'anspruchsvollen' oder sehr aktiven Babys. Der Leitfaden enthält spezielle Techniken für hyperaktive Babys, Babys mit Koliken oder solche, die Schwierigkeiten beim Entspannen haben. Viele Mütter berichten gerade bei scheinbar 'untröstlichen' Babys von großem Erfolg."
    },
    {
      question: "Wie erhalte ich das Material?",
      answer: "Sofort nach Zahlungsbestätigung erhalten Sie per E-Mail den Download-Link zum vollständigen PDF-Leitfaden. Das Material steht Ihnen unbegrenzt zur Verfügung und Sie können es beliebig oft herunterladen. Wir senden es auch per WhatsApp, damit Sie es sicher erhalten."
    },
    {
      question: "Kann ich es auf dem Handy nutzen?",
      answer: "Absolut! Der Leitfaden ist für die Nutzung auf Handy, Tablet, Computer oder zum Ausdrucken optimiert. Wir wissen, dass Mütter Flexibilität brauchen – Sie können die Techniken jederzeit und überall nachschlagen, auch nachts."
    },
    {
      question: "Was, wenn ich mein Geld zurück möchte?",
      answer: "Sie haben 7 Tage ab Kaufdatum Zeit, eine vollständige Rückerstattung zu verlangen – ohne Fragen oder Begründung. Senden Sie einfach eine E-Mail an unseren Support und wir erstatten innerhalb von 48 Stunden. Ihre Zufriedenheit ist unsere Priorität."
    },
    {
      question: "Funktioniert die Methode auch bei Zwillingen?",
      answer: "Ja! Wir haben einen speziellen Abschnitt für Zwillinge und Mehrlinge. Uns ist bewusst, dass dies eine besondere Herausforderung ist, daher sind die Techniken entsprechend angepasst. Viele Mütter von Zwillingen hatten bereits Erfolg mit unserer Methode."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-6">
              {/* Ícone de ajuda */}
              <span className="w-4 h-4">❓</span>
              Häufige Fragen
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Häufig gestellte
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                {" "}Fragen
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Wir beantworten die wichtigsten Fragen, die andere Mütter hatten
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl border p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {/* Accordions */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl px-6 py-4 border-none shadow-sm hover:shadow-md transition-shadow">
                  <button
                    type="button"
                    className="w-full text-left text-gray-800 font-semibold py-2 flex items-center gap-3 focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">✔️</span>
                    <span className="text-lg">{faq.question}</span>
                    <span className="ml-auto text-xl transition-transform" style={{transform: openIndex === index ? 'rotate(90deg)' : 'rotate(0deg)'}}>
                      ▶
                    </span>
                  </button>
                  {openIndex === index && (
                    <div
                      id={`faq-answer-${index}`}
                      className="text-gray-600 leading-relaxed pb-2 pl-11 text-base animate-fade-in"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Noch Fragen? 🤔
                </h3>
                <p className="text-gray-600 mb-4">
                  Unser Team hilft Ihnen gerne weiter! Kontaktieren Sie uns über WhatsApp und wir beantworten alle Ihre Fragen vor dem Kauf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
