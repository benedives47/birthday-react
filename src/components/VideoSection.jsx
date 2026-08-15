import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

export default function VideoSection() {
  return (
    <section
      id="video"
      className="relative px-5 py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-4xl text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-3 text-sm uppercase tracking-[0.3em]"
        >
          A Little Memory
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold"
        >
          {siteData.video.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-xl"
        >
          {siteData.video.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-10 overflow-hidden rounded-3xl shadow-2xl"
        >
          <video
            className="w-full"
            src={siteData.video.src}
            controls
            playsInline
            preload="metadata"
          />
        </motion.div>

      </div>
    </section>
  );
}