import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CheckCircle } from "lucide-react";

const FAQFr = () => {
  const faqs = [
    {
      question: "Pour quel âge de bébé la méthode est-elle indiquée ?",
      answer: "La méthode Maman Tranquille est efficace pour les bébés de 0 à 24 mois. Nous avons des techniques spécifiques adaptées à chaque tranche d'âge : nouveau-nés (0-3 mois), bébés (4-12 mois) et tout-petits (13-24 mois). Chaque phase a ses particularités et le guide les aborde toutes en détail."
    },
    {
      question: "Est-ce que ça marche même avec des bébés très agités ?",
      answer: "Oui ! Nous travaillons spécialement avec des bébés considérés comme 'difficiles' ou à haute demande. Le guide inclut des techniques spécifiques pour les bébés hyperactifs, souffrant de coliques ou ayant des difficultés à se détendre. De nombreuses mamans ont rapporté un succès extraordinaire, notamment avec des bébés qui semblaient impossibles à calmer."
    },
    {
      question: "Comment vais-je recevoir le matériel ?",
      answer: "Immédiatement après la confirmation du paiement, vous recevrez par e-mail le lien pour télécharger le guide complet en PDF. Le matériel est disponible en accès illimité, et vous pouvez le télécharger autant de fois que vous le souhaitez. Nous l'envoyons également par WhatsApp pour garantir la réception."
    },
    {
      question: "Puis-je accéder au guide sur mon téléphone ?",
      answer: "Absolument ! Le guide a été optimisé pour la lecture sur téléphone, tablette, ordinateur ou peut être imprimé. Nous savons que les mamans ont besoin de praticité, alors vous pouvez consulter les techniques à tout moment, n'importe où, même pendant la nuit."
    },
    {
      question: "Et si je veux être remboursée ?",
      answer: "Vous disposez de 7 jours calendaires à compter de l'achat pour demander un remboursement intégral, sans aucune question ni justification. Il suffit d'envoyer un e-mail à notre support et nous traitons le remboursement sous 48 heures. C'est aussi simple que cela - votre satisfaction est notre priorité."
    },
    {
      question: "La méthode fonctionne-t-elle pour des jumeaux ?",
      answer: "Oui ! Nous avons une section spéciale dédiée aux jumeaux et aux multiples. Nous savons que c'est un défi encore plus grand, c'est pourquoi nous avons adapté les techniques à cette réalité spécifique. De nombreuses mamans de jumeaux ont déjà eu du succès avec notre méthode."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Foire aux questions
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Questions
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                {" " }Fréquentes
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Nous répondons aux principales questions que d'autres mamans se sont posées
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-xl border p-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
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
                  Vous avez encore des questions ? 🤔
                </h3>
                <p className="text-gray-600 mb-4">
                  Notre équipe est prête à vous aider ! Contactez-nous sur WhatsApp et nous répondrons à toutes vos questions avant l'achat.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQFr;
