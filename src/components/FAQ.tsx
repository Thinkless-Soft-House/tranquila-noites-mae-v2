import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

// Define the structure for FAQ items if needed for type safety
interface FaqItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const { t } = useTranslation();

  const faqs = t("faq.faqs", { returnObjects: true }) as FaqItem[];
  const whatsappLink = "https://wa.me/553196333896?text=Oi%2C%20tudo%20bem%3F%20Tenho%20d%C3%BAvidas%20sobre%20o%20livro%20Mam%C3%A3e%20Tranquila."; // Keep link static for now

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              {t("faq.badge")}
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              {t("faq.titleLine1")}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                {" "}{t("faq.titleLine2")}
              </span>
            </h2>
            
            <p className="text-xl text-gray-600">
              {t("faq.subtitle")}
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl border p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Accordion type="single" collapsible className="space-y-4">
              {Array.isArray(faqs) && faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-gray-50 rounded-2xl px-6 border-none shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left text-gray-800 font-semibold hover:no-underline py-6 hover:text-primary-600">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary-600" />
                      </div>
                      <span className="text-lg">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6 pl-11">
                    <div className="text-base">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl border border-primary-100">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {t("faq.supportTitle")}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t("faq.supportText")}
                </p>
                <a
                  href={whatsappLink} // Use the static link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors cursor-pointer"
                >
                  {/* Emoji might need adjustment or removal for i18n */}
                  <span>💬</span> 
                  <span>{t("faq.supportButton").substring(t("faq.supportButton").indexOf(' ') + 1)}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

