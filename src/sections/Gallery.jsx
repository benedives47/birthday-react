import { useState } from "react";
import { FiMaximize2 } from "react-icons/fi";
import { motion } from "framer-motion";
import { siteData } from "../data/siteData";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import PhotoModal from "../components/PhotoModal";

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="gallery" className="section-shell">
      <div className="page-width">
        <SectionHeading
          eyebrow="chapter two"
          title="Our Gallery"
          description="Little snapshots, kept like photos on a bedroom wall."
          sticker="📷"
        />

        <div className="gallery-grid">
          {siteData.gallery.map((photo, index) => (
            <Reveal key={photo.image} delay={index * 0.05}>
              <motion.button
                type="button"
                className="polaroid"
                style={{ "--rotate": `${photo.rotate}deg` }}
                initial={{ rotate: photo.rotate }}
                whileHover={{ rotate: 0, scale: 1.04, y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25 }}
                onClick={() => setSelected(photo)}
              >
                <span className="polaroid-tape" />
                <span className="polaroid-image">
                  <img src={photo.image} alt={photo.caption} />
                  <span className="zoom-icon">
                    <FiMaximize2 />
                  </span>
                </span>
                <span className="polaroid-caption">{photo.caption}</span>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <PhotoModal photo={selected} onClose={() => setSelected(null)} />
    </section>
  );
}