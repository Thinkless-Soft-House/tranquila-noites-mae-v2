import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CheckCircle } from "lucide-react";

const FAQIt = () => {
  const faqs = [
    {
      question: "Per quale età del bambino è indicato il metodo?",
      answer: "Il metodo Mamma Serena è efficace per neonati e bambini da 0 a 24 mesi. Abbiamo tecniche specifiche adattate a ogni fascia d'età: neonati (0-3 mesi), bambini (4-12 mesi) e piccoli (13-24 mesi). Ogni fase ha le sue particolarità e la guida le affronta tutte in dettaglio."
    },
    {
      question: "Funziona anche con bambini molto agitati?",
      answer: "Sì! Lavoriamo soprattutto con bambini considerati 'difficili' o ad alta richiesta. La guida include tecniche specifiche per bambini iperattivi, con coliche o che hanno difficoltà a rilassarsi. Molte mamme hanno riportato risultati straordinari proprio con bambini che sembravano impossibili da calmare."
    },
    {
      question: "Come riceverò il materiale?",
      answer: "Subito dopo la conferma del pagamento riceverai via email il link per scaricare la guida completa in PDF. Il materiale sarà disponibile per accesso illimitato e potrai scaricarlo tutte le volte che vuoi. Lo inviamo anche via WhatsApp per garantirne la ricezione."
    },
    {
      question: "Posso accedere alla guida dal cellulare?",
      answer: "Assolutamente sì! La guida è ottimizzata per la lettura su cellulare, tablet, computer oppure può essere stampata. Sappiamo che le mamme hanno bisogno di praticità, quindi puoi consultare le tecniche in qualsiasi momento, ovunque, anche di notte."
    },
    {
      question: "E se volessi il rimborso?",
      answer: "Hai 7 giorni di tempo dall'acquisto per richiedere il rimborso totale, senza domande o giustificazioni. Basta inviare una mail al nostro supporto e processeremo il rimborso entro 48 ore. È semplice: la tua soddisfazione è la nostra priorità."
    },
    {
      question: "Il metodo funziona anche per gemelli?",
      answer: "Sì! Abbiamo una sezione speciale dedicata ai gemelli e ai fratelli multipli. Sappiamo che è una sfida ancora più grande, per questo abbiamo adattato le tecniche a questa realtà specifica. Molte mamme di gemelli hanno già avuto successo con il nostro metodo."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Domande frequenti
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Domande
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                {" " }Comuni
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Rispondiamo ai principali dubbi che altre mamme hanno avuto
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
                  Hai ancora domande? 🤔
                </h3>
                <p className="text-gray-600 mb-4">
                  Il nostro team è pronto ad aiutarti! Contattaci su WhatsApp e risponderemo a tutti i tuoi dubbi prima dell'acquisto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQIt;
