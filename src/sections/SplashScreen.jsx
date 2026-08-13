// src/SplashScreen.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Load the Google Font used for handwriting
const fontStyle = document.createElement("style");
fontStyle.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');`;
document.head.appendChild(fontStyle);

export default function SplashScreen({ onFinish }) {
  const [writingDone, setWritingDone] = useState(false);
  const [progress, setProgress] = useState(0);

  // Animate the writing reveal from left to right over 3.2 seconds
  useEffect(() => {
    let startTime = performance.now();
    let rafId;

    const step = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / 3200, 1);
      // Subtle cubic ease-out
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) {
        rafId = requestAnimationFrame(step);
      }
    };
    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, []);

  // After writing finishes, reveal the action button
  useEffect(() => {
    if (progress === 1) {
      const timer = setTimeout(() => {
        setWritingDone(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // SVG viewBox coordinates: 0 0 750 200
  const svgWidth = 750;
  const maskWidth = progress * svgWidth;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 px-4"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* Outer SVG container */}
        <div className="relative w-full max-w-3xl h-auto flex items-center justify-center">
          <svg
            viewBox="0 0 750 200"
            className="w-full h-auto max-h-[300px]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="splashGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="60%" stopColor="#e0f7fa" />
                <stop offset="100%" stopColor="#80deea" />
              </linearGradient>

              {/* Mask that reveals the text in SVG user units */}
              <mask id="writingMask">
                <rect
                  x="0"
                  y="0"
                  width={maskWidth}
                  height="200"
                  fill="white"
                />
              </mask>
            </defs>

            {/* Cursive handwriting text */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="68"
              fontFamily="'Great Vibes', 'Brush Script MT', cursive"
              fill="url(#splashGradient)"
              mask="url(#writingMask)"
              letterSpacing="1"
            >
              Hello There, Welcome!
            </text>

            {/* Glowing pen-tip trace indicator */}
            {progress > 0.05 && progress < 0.98 && (
              <circle
                cx={progress * svgWidth}
                cy="105"
                r="4"
                fill="#00ffcc"
                className="animate-pulse"
                style={{
                  filter: "drop-shadow(0px 0px 8px rgba(0, 255, 204, 0.9))",
                }}
              />
            )}
          </svg>
        </div>

        {/* Start button */}
        {writingDone && (
          <motion.button
            onClick={onFinish}
            className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span>Explore Portfolio</span>
            <span className="text-xl">→</span>
          </motion.button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}

