import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { FiRefreshCw } from "react-icons/fi";
import { siteData } from "../data/siteData";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import BackToTop from "../components/BackToTop";

export default function Ending() {
  const [confetti, setConfetti] = useState(false);
  const [key, setKey] = useState(0);

  const replay = () => {
    setKey((value) => value + 1);
    setConfetti(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    window.setTimeout(() => setConfetti(false), 8000);
  };

  useEffect(() => {
    setConfetti(true);
    const timer = window.setTimeout(() => setConfetti(false), 7000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section id="ending" className="section-shell ending" key={key}>
      {confetti ? (
        <Confetti
          recycle={false}
          numberOfPieces={280}
          gravity={0.18}
          initialVelocityY={10}
          tweenDuration={4500}
        />
      ) : null}

      <div className="page-width ending-inner">
        <SectionHeading
          eyebrow="the last page"
          title={siteData.ending.title}
          description=""
          sticker="🎂"
        />

        <Reveal>
          <div className="ending-card">
            <div className="ending-sun">☼</div>
            <h3>{siteData.ending.name}</h3>
            <p>{siteData.ending.message}</p>

            <div className="ending-hearts">♡ ♡ ♡</div>

            <div className="ending-actions">
              <button className="soft-button" onClick={replay}>
                <FiRefreshCw />
                Replay
              </button>
              <BackToTop />
            </div>
          </div>
        </Reveal>

        <p className="footer-note">made with a little strawberry & matcha ♡</p>
      </div>
    </section>
  );
}