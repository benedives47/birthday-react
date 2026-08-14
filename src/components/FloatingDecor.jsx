import { motion } from "framer-motion";

const decorations = [
  { icon: "♡", left: "8%", top: "18%", delay: 0 },
  { icon: "✿", left: "88%", top: "24%", delay: 0.8 },
  { icon: "♡", left: "14%", top: "72%", delay: 1.4 },
  { icon: "✦", left: "84%", top: "70%", delay: 0.5 },
  { icon: "·", left: "45%", top: "13%", delay: 1.1 },
  { icon: "♡", left: "68%", top: "84%", delay: 1.8 },
];

export default function FloatingDecor() {
  return (
    <div className="floating-decor" aria-hidden="true">
      {decorations.map((item, index) => (
        <motion.span
          key={`${item.icon}-${index}`}
          style={{ left: item.left, top: item.top }}
          animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
          transition={{
            duration: 4 + index * 0.3,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.span>
      ))}
    </div>
  );
}