import { Star, Quote } from "lucide-react";

const TestimonialsIt = () => {
  const testimonials = [
    {
      name: "Maria Rossi",
      city: "Milano, Lombardia",
      image: "/lovable-uploads/07734f1e-a5f0-4aba-971a-2dc3247575f4.png",
      text: "In soli 3 giorni mia figlia dormiva tutta la notte. Non credevo fosse possibile! Il metodo è davvero incredibile.",
      rating: 5,
      highlight: "3 giorni per i risultati"
    },
    {
      name: "Anna Bianchi",
      city: "Roma, Lazio",
      image: "/lovable-uploads/3d25edc9-75e1-4ebe-a4aa-53ac97b5ae70.png",
      text: "Finalmente riesco a dormire! La guida ha salvato la mia sanità mentale e il mio matrimonio. Sono di nuovo felice e piena di energia.",
      rating: 5,
      highlight: "Trasformazione completa"
    },
    {
      name: "Carla Verdi",
      city: "Napoli, Campania",
      image: "/lovable-uploads/5da3d5d9-b257-4191-a403-37731032c15e.png",
      text: "Ero allo stremo. Questa guida mi ha dato speranza e risultati concreti. La mia bambina dorme 8 ore di fila!",
      rating: 5,
      highlight: "8 ore di sonno"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            +5.000 mamme trasformate
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Storie vere di<br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              trasformazione
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Scopri come altre mamme sono passate dall'esaurimento totale a notti di pace e serenità
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-bl-full opacity-30"></div>
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary-600" />
              </div>
              {/* Profile section */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="relative">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <Star className="w-3 h-3 text-white fill-current" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.city}</p>
                  {/* Rating */}
                  <div className="flex gap-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              {/* Highlight badge */}
              <div className="inline-flex items-center gap-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                ✨ {testimonial.highlight}
              </div>
              {/* Testimonial text */}
              <blockquote className="text-gray-700 leading-relaxed relative z-10 group-hover:text-gray-800 transition-colors">
                "{testimonial.text}"
              </blockquote>
              {/* Verified badge */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-green-600">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                    <Star className="w-2 h-2 text-white fill-current" />
                  </div>
                  <span className="text-sm font-medium">Testimonianza verificata</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Statistics */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Numeri che dimostrano la nostra efficacia
            </h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">5.247</div>
              <p className="text-primary-100">Mamme aiutate</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">97%</div>
              <p className="text-primary-100">Tasso di successo</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">3,2</div>
              <p className="text-primary-100">Giorni per vedere risultati</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">4,9</div>
              <p className="text-primary-100">Valutazione media (⭐⭐⭐⭐⭐)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsIt;
