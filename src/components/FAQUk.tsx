import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CheckCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What age is the method suitable for?",
      answer: "The Calm Mum method is effective for babies from 0 to 24 months. We have specific techniques adapted for each age group: newborns (0-3 months), babies (4-12 months), and toddlers (13-24 months). Each stage has its own particularities and the guide covers them all in detail."
    },
    {
      question: "Does it work even with very restless babies?",
      answer: "Yes! We work especially with babies considered 'difficult' or high demand. The guide includes specific techniques for hyperactive babies, those with colic, or who have trouble relaxing. Many mums have reported extraordinary success, especially with babies who seemed impossible to settle."
    },
    {
      question: "How will I receive the material?",
      answer: "Immediately after payment confirmation, you will receive an email with the link to download the complete guide in PDF. The material is available for unlimited access, and you can download it as many times as you wish. We also send it via WhatsApp to ensure you receive it."
    },
    {
      question: "Can I access it on my phone?",
      answer: "Absolutely! The guide is optimised for reading on your phone, tablet, computer, or can be printed. We know mums need practicality, so you can consult the techniques at any time, anywhere, even during the night."
    },
    {
      question: "What if I want my money back?",
      answer: "You have 7 calendar days from purchase to request a full refund, with no questions asked. Just send an email to our support and we will process the refund within 48 hours. It's that simple – your satisfaction is our priority."
    },
    {
      question: "Does the method work for twins?",
      answer: "Yes! We have a special section dedicated to twins and multiples. We know it's an even bigger challenge, so we've adapted the techniques for this specific reality. Many mums of twins have already succeeded with our method."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              Get your questions answered
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Frequently
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                {" "}Asked Questions
              </span>
            </h2>
            
            <p className="text-xl text-gray-600">
              We answer the main questions other mums have had
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
                  Still have questions? 🤔
                </h3>
                <p className="text-gray-600 mb-4">
                  Our team is ready to help! Contact us on WhatsApp and we'll answer all your questions before you buy.
                </p>
                <a
                  href="https://wa.me/553196333896?text=Hi%2C%20I%20have%20some%20questions%20about%20the%20Calm%20Mum%20guide."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-medium hover:bg-green-600 transition-colors cursor-pointer"
                >
                  <span>💬</span>
                  <span>Chat on WhatsApp</span>
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
