import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiHeart, FiMenu, FiX } from "react-icons/fi";
import { navItems } from "../data/siteData";
import { useScrollProgress } from "../hooks/useScrollProgress";

export default function Navbar() {
  const progress = useScrollProgress();
  const [open, setOpen] = useState(false);

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className="site-nav">
        <div className="nav-inner">
          <button
            className="brand"
            onClick={() => goTo("home")}
            aria-label="Back to home"
          >
            <span className="brand-icon">
              <FiHeart />
            </span>
            <span>for you</span>
          </button>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => goTo(item.id)}>
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="mobile-menu-button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div className="progress-track">
          <motion.div
            className="progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            {navItems.map((item) => (
              <button key={item.id} onClick={() => goTo(item.id)}>
                {item.label}
              </button>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}