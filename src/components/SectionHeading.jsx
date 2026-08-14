import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  sticker,
}) {
  return (
    <Reveal className="section-heading">
      <div className="section-sticker">{sticker}</div>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </Reveal>
  );
}