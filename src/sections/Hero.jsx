import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { siteData } from "../data/siteData";

export default function Hero() {
  const scrollToStory = () => {
    document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero section-shell">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-blob hero-blob-one" />
        <div className="hero-blob hero-blob-two" />
        <div className="hero-grid" />
      </div>

      <div className="hero-inner page-width">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="hero-badge">
            <span>🍓</span>
            <span>{siteData.hero.eyebrow}</span>
            <span>🍵</span>
          </div>

          <p className="hero-script">a tiny website made with love</p>

          <h1>{siteData.hero.title}</h1>

          <p className="hero-subtitle">{siteData.hero.subtitle}</p>

          <div className="hero-photo-wrap">
            <div className="hero-tape" />
            <motion.img
              src={siteData.heroImage}
              alt={`${siteData.name} birthday`}
              className="hero-photo"
              initial={{ scale: 0.88, rotate: -3 }}
              animate={{ scale: 1, rotate: -2 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <span className="hero-photo-note">my favorite person ♡</span>
          </div>

          <p className="hero-note">{siteData.hero.note}</p>

          <button className="scroll-button" onClick={scrollToStory}>
            <span>Start our story</span>
            <FiArrowDown />
          </button>
        </motion.div>
      </div>

      <div className="hero-corner hero-corner-left">✿</div>
      <div className="hero-corner hero-corner-right">♡</div>
    </section>
  );
}