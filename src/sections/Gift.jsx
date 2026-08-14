import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiGift, FiHeart } from "react-icons/fi";
import { siteData } from "../data/siteData";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Gift() {
  const [opened, setOpened] = useState(false);

  return (
    <section id="gift" className="section-shell">
      <div className="page-width">
        <SectionHeading
          eyebrow="chapter four"
          title="A Little Surprise"
          description="Okay... this one is interactive."
          sticker="🎁"
        />

        <Reveal>
          <div className={`gift-stage ${opened ? "is-open" : ""}`}>
            <AnimatePresence mode="wait">
              {!opened ? (
                <motion.div
                  key="closed"
                  className="gift-closed"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <motion.div
                    className="gift-box"
                    animate={{ rotate: [0, -2, 2, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                    onClick={() => setOpened(true)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        setOpened(true);
                      }
                    }}
                  >
                    <div className="gift-lid">
                      <span />
                    </div>
                    <div className="gift-body">
                      <span className="gift-ribbon-vertical" />
                      <span className="gift-ribbon-horizontal" />
                    </div>
                    <div className="gift-bow">
                      <span />
                      <span />
                    </div>
                  </motion.div>

                  <p>{siteData.gift.closedText}</p>
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  className="gift-open"
                  initial={{ opacity: 0, scale: 0.75, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                >
                  <motion.div
                    className="gift-heart"
                    animate={{ y: [0, -10, 0], scale: [1, 1.08, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  >
                    <FiHeart />
                  </motion.div>

                  <h3>{siteData.gift.openedTitle}</h3>
                  <p>{siteData.gift.openedText}</p>

                  <button
                    className="soft-button"
                    onClick={() => setOpened(false)}
                  >
                    <FiGift />
                    {siteData.gift.buttonText}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}