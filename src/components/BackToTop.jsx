import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  return (
    <button
      className="back-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <FiArrowUp />
      <span>Back to top</span>
    </button>
  );
}