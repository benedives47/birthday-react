import { FiMapPin } from "react-icons/fi";
import { siteData } from "../data/siteData";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

export default function Story() {
  return (
    <section id="story" className="section-shell section-paper">
      <div className="page-width">
        <SectionHeading
          eyebrow="chapter one"
          title="Our Journey"
          description="A few little moments that deserve their own page."
          sticker="🌸"
        />

        <div className="timeline">
          {siteData.story.map((story, index) => (
            <Reveal key={story.title} delay={index * 0.12}>
              <article className="timeline-item">
                <div className="timeline-line" aria-hidden="true">
                  <span>{index + 1}</span>
                </div>

                <div className="story-card">
                  <div className="story-image-wrap">
                    <div className="story-tape" />
                    <img src={story.image} alt={story.title} />
                    <span className="story-sticker">{story.sticker}</span>
                  </div>

                  <div className="story-content">
                    <p className="story-date">
                      <FiMapPin />
                      {story.date}
                    </p>
                    <h3>{story.title}</h3>
                    <p>{story.description}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}