import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ProductIntro from "@/components/ProductIntro";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import DownsellFinalCTA from "@/components/DownsellFinalCTA";
import { useEffect, useRef, useState } from "react";
import { Clock } from "lucide-react";

const COUNTDOWN_KEY = "downsell_countdown_expiry";
const INITIAL_MINUTES = 10;

function getExpiryTimestamp() {
  const saved = localStorage.getItem(COUNTDOWN_KEY);
  if (saved) {
    const expiry = parseInt(saved, 10);
    if (!isNaN(expiry) && expiry > Date.now()) return expiry;
  }
  const expiry = Date.now() + INITIAL_MINUTES * 60 * 1000;
  localStorage.setItem(COUNTDOWN_KEY, expiry.toString());
  return expiry;
}

const DownsellCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const expiry = getExpiryTimestamp();
    return Math.max(0, Math.floor((expiry - Date.now()) / 1000));
  });
  const intervalRef = useRef(null);

  useEffect(() => {
    const expiry = getExpiryTimestamp();
    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, Math.floor((expiry - now) / 1000));
      setTimeLeft(diff);
      if (diff <= 0 && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");
  const isEnding = timeLeft <= 10;
  const expired = timeLeft <= 0;

  return (
    <div className="downsell-countdown-bar">
      <div className="downsell-countdown-content">
        <span className="downsell-countdown-icon" role="img" aria-label="Presente">🎁</span>
        <div className="downsell-countdown-texts">
          <span className="downsell-countdown-title">Espera um pouco... Temos uma nova oportunidade para você!</span>
          <span className="downsell-countdown-desc">Oferta exclusiva por tempo limitado. Aproveite antes que acabe!</span>
          <div className="downsell-countdown-timer-row">
            <span className="downsell-countdown-label">Oferta especial expira em:</span>
            <span className={`downsell-countdown-timer${isEnding ? " downsell-countdown-timer-ending" : ""}`}>{minutes}:{seconds}</span>
          </div>
        </div>
        <button
          className="downsell-countdown-cta"
          disabled={expired}
          style={{ opacity: expired ? 0.5 : 1, pointerEvents: expired ? "none" : "auto" }}
          onClick={() => {
            const cta = document.getElementById("cta-transformar-noites");
            if (cta) {
              cta.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }}
        >
          <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5em', fontWeight: 600}}>
            <span role="img" aria-label="estrela">✨</span> Quero receber agora
          </span>
        </button>
      </div>
      <style>{`
        .downsell-countdown-bar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: #fff;
          border-bottom: 2px solid #a78bfa;
          box-shadow: 0 2px 8px 0 rgba(127, 86, 217, 0.04);
          padding: 0.5rem 0;
        }
        .downsell-countdown-content {
          max-width: 700px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          justify-content: center;
        }
        .downsell-countdown-icon {
          font-size: 2rem;
          color: #a78bfa;
        }
        .downsell-countdown-texts {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
        }
        .downsell-countdown-title {
          color: #7c3aed;
          font-family: 'Poppins', 'Inter', Arial, sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          text-align: center;
        }
        .downsell-countdown-desc {
          color: #6d28d9;
          font-family: 'Poppins', 'Inter', Arial, sans-serif;
          font-size: 0.95rem;
          text-align: center;
        }
        .downsell-countdown-timer-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 0.2rem;
          justify-content: center;
        }
        .downsell-countdown-label {
          color: #7c3aed;
          font-family: 'Poppins', 'Inter', Arial, sans-serif;
          font-size: 0.95rem;
        }
        .downsell-countdown-timer {
          background: #f5f3ff;
          border: 2px solid #a78bfa;
          color: #7c3aed;
          font-family: 'Poppins', 'Inter', Arial, sans-serif;
          font-weight: 700;
          font-size: 1.3rem;
          border-radius: 8px;
          padding: 0.2rem 0.8rem;
          min-width: 70px;
          text-align: center;
          transition: box-shadow 0.2s, color 0.2s, background 0.2s;
        }
        .downsell-countdown-timer-ending {
          background: #ede9fe;
          color: #a78bfa;
          box-shadow: 0 0 8px 2px #a78bfa99;
          animation: downsell-timer-blink 0.7s steps(1) infinite alternate;
        }
        @keyframes downsell-timer-blink {
          0% { background: #ede9fe; }
          100% { background: #f5f3ff; }
        }
        .downsell-countdown-cta {
          background: linear-gradient(90deg, #7c3aed 0%, #6d28d9 100%);
          color: #fff;
          font-family: 'Poppins', 'Inter', Arial, sans-serif;
          font-weight: 700;
          font-size: 1rem;
          border: none;
          border-radius: 999px;
          padding: 0.7rem 1.5rem;
          margin-top: 1rem;
          cursor: pointer;
          transition: background 0.2s, opacity 0.2s, box-shadow 0.2s;
          box-shadow: 0 2px 8px 0 rgba(127, 86, 217, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5em;
          letter-spacing: 0.01em;
          text-shadow: 0 1px 2px #0001;
        }
        .downsell-countdown-cta:disabled {
          background: #d1c4e9;
          cursor: not-allowed;
        }
        @media (max-width: 600px) {
          .downsell-countdown-content {
            padding: 0 0.5rem;
          }
          .downsell-countdown-cta {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

const Downsell = () => {
  return (
    <>
      <DownsellCountdown />
      <div className="min-h-screen">
        <Hero />
        <PainPoints />
        <ProductIntro />
        <HowItWorks />
        <Testimonials />
        <Guarantee />
        <FAQ />
        <DownsellFinalCTA />
      </div>
    </>
  );
};

export default Downsell;
