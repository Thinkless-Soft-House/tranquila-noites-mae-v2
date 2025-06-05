import { Star, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

// Define the structure for testimonial items if needed for type safety
interface TestimonialItem {
  name: string;
  city: string;
  imageAlt: string; // Assuming image path is static or handled differently
  text: string;
  highlight: string;
  rating?: number; // Rating might be static or dynamic
}

const Testimonials = () => {
  const { t } = useTranslation();

  // Retrieve testimonials data - adjust keys as needed
  const testimonialsData: TestimonialItem[] = [
    t("testimonials.testimonial1", { returnObjects: true }),
    t("testimonials.testimonial2", { returnObjects: true }),
    t("testimonials.testimonial3", { returnObjects: true })
  ];

  // Static image paths - these might need adjustment if they are language-specific
  const testimonialImages = [
    "/lovable-uploads/mae3.webp",
    "/lovable-uploads/mae1.webp",
    "/lovable-uploads/mae2.webp"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            {t("testimonials.badge")}
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            {t("testimonials.titleLine1")}<br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              {t("testimonials.titleLine2")}
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
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
                    src={testimonialImages[index % testimonialImages.length]} // Use static image path
                    alt={testimonial.imageAlt} // Use translated alt text
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
                  
                  {/* Rating - Assuming 5 stars for all */}
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
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
                  <span className="text-sm font-medium">{t("testimonials.verifiedBadge")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 lg:p-12 text-white animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="text-center mb-8">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              {t("testimonials.statsTitle")}
            </h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">{t("testimonials.stat1Value")}</div>
              <p className="text-primary-100">{t("testimonials.stat1Label")}</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">{t("testimonials.stat2Value")}</div>
              <p className="text-primary-100">{t("testimonials.stat2Label")}</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">{t("testimonials.stat3Value")}</div>
              <p className="text-primary-100">{t("testimonials.stat3Label")}</p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">{t("testimonials.stat4Value")}</div>
              <p className="text-primary-100">{t("testimonials.stat4Label")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

