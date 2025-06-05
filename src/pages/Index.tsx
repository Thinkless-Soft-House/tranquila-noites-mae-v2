import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ProductIntro from "@/components/ProductIntro";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    // Sempre adiciona o script Cartpanda
    const oldScript = document.getElementById("cartpanda-script");
    if (oldScript) document.body.removeChild(oldScript);
    document.querySelectorAll('[id^="cartpanda"], .cartpanda-secure-order').forEach(el => el.remove());

    const script = document.createElement("script");
    script.id = "cartpanda-script";
    script.type = "plain/javascript";
    script.src = "https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/cpsales.js";
    script.async = true;
    document.body.appendChild(script);

    // Esconde o widget Cartpanda se for português
    let hideInterval = null;
    if (i18n.language === "pt" || i18n.language.startsWith("pt-")) {
      hideInterval = setInterval(() => {
        document.querySelectorAll('[id^="cartpanda"], .cartpanda-secure-order').forEach(el => {
          (el as HTMLElement).style.setProperty("display", "none", "important");
        });
      }, 500);
    }

    return () => {
      const el = document.getElementById("cartpanda-script");
      if (el) document.body.removeChild(el);
      document.querySelectorAll('[id^="cartpanda"], .cartpanda-secure-order').forEach(el => el.remove());
      if (hideInterval) clearInterval(hideInterval);
    };
  }, [i18n.language]);

  return (
    <div className="min-h-screen">
      <Hero />
      <PainPoints />
      <ProductIntro />
      <HowItWorks />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Index;
