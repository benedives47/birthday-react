import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";

export default function PhotoModal({ photo, onClose }) {
  useLockBodyScroll(Boolean(photo));

  return (
    <AnimatePresence>
      {photo ? (
        <motion.div
          className="photo-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="photo-modal-card"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="photo-close"
              onClick={onClose}
              aria-label="Close photo"
            >
              <FiX />
            </button>
            <img src={photo.image} alt={photo.caption} />
            <p>{photo.caption}</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}