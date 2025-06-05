import { Star, BookOpen, CheckCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductIntro = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Scientifically validated techniques",
      description: "Methods approved by paediatricians and child sleep specialists"
    },
    {
      icon: CheckCircle,
      title: "Practical checklists",
      description: "Step-by-step guides to implement each technique with ease"
    },
    {
      icon: Users,
      title: "Real testimonials",
      description: "Inspiring stories from mums who transformed their nights"
    },
    {
      icon: Clock,
      title: "7-day plan",
      description: "Structured schedule for fast and lasting results"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4 max-w-full">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium mb-6">
            <Star className="w-4 h-4 fill-current" />
            UK's #1 Child Sleep Method
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            More than just a guide,<br />
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              a complete transformation
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-primary-600">Calm Mum</strong> is the result of years of research and real-life experience with thousands of families. A method that truly works.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="animate-scale-in w-full max-w-[95vw] mx-auto" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl blur-3xl opacity-30 transform rotate-3"></div>
              <img 
                src="/lovable-uploads/80510ec7-7bcf-44d8-8b82-0935e173eea4.png" 
                alt="Calm Mum - Digital Guide" 
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
                What you'll find inside the guide:
              </h3>
              
              <div className="space-y-4">
                {[
                  "7 proven techniques to help your baby fall asleep quickly",
                  "How to create the perfect sleep environment",
                  "Routines that truly work for every age",
                  "What to do when nothing seems to work",
                  "Self-care techniques for exhausted mums",
                  "Day-by-day implementation plan"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-700 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-2xl border border-primary-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white fill-current" />
                </div>
                <h4 className="text-lg font-semibold text-gray-800">Exclusive Bonus</h4>
              </div>
              <p className="text-gray-700">
                <strong>Access to a private group</strong> with other mums on the same journey. Support, tips and lots of care! 💜
              </p>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full lg:w-auto"
              onClick={() => {
                const el = document.getElementById('cta-transformar-noites');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
            >
              🎯 I want to transform my nights
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;
