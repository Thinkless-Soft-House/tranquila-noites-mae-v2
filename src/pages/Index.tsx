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
    const handlePopState = () => {
      if (window.location.pathname !== "/downsell") {
        window.location.replace("/downsell");
      }
    };

    // Determine browser language for the popstate listenernpm r
    const browserLanguage = (navigator.language || (navigator as any).userLanguage || '').toLowerCase();

    if (browserLanguage.startsWith("pt")) {
      window.addEventListener("popstate", handlePopState);
    } else {
      // Ensure the listener is removed if the browser language is not Portuguese
      window.removeEventListener("popstate", handlePopState);
    }

    // Remove script antigo
    const oldScript = document.getElementById("cartpanda-script");
    if (oldScript) document.body.removeChild(oldScript);
    // Remove widgets Cartpanda residuais
    document.querySelectorAll('[id^="cartpanda"], .cartpanda-secure-order').forEach(el => el.remove());
    if (i18n.language !== "pt") {
      const script = document.createElement("script");
      script.id = "cartpanda-script";
      script.type = "text/javascript";
      script.src = "https://assets.mycartpanda.com/cartx-ecomm-ui-assets/js/cpsales.js";
      script.async = true;
      document.body.appendChild(script);
    }
    return () => {
      const el = document.getElementById("cartpanda-script");
      if (el) document.body.removeChild(el);
      // Always remove the popstate listener on cleanup
      window.removeEventListener("popstate", handlePopState);
      // Cleanup extra ao desmontar
      document.querySelectorAll('[id^="cartpanda"], .cartpanda-secure-order').forEach(el => el.remove());
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
