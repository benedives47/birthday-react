import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import { siteData } from "../data/siteData";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Letter() {
  return (
    <section id="letter" className="section-shell section-matcha">
      <div className="page-width">
        <SectionHeading
          eyebrow="chapter three"
          title="A Little Letter"
          description="A quiet page for the things that are easier to write than say."
          sticker="💌"
        />

        <Reveal>
          <article className="letter-book">
            <div className="letter-clip">📎</div>
            <div className="letter-tape" />

            <div className="letter-page">
              <div className="letter-top">
                <span>16</span>
                <span>august</span>
                <span>2026</span>
              </div>

              <p className="letter-greeting">{siteData.letter.greeting}</p>

              <div className="letter-body">
                {siteData.letter.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="letter-signature">
                <span>{siteData.letter.sign}</span>
                <strong>{siteData.letter.signature}</strong>
                <FiHeart />
              </div>

              <div className="letter-flower" aria-hidden="true">
                ✿
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}