// src/SplashScreen.jsx
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Load the Google Font used for handwriting
const fontStyle = document.createElement("style");
fontStyle.innerHTML = `@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');`;
document.head.appendChild(fontStyle);

export default function SplashScreen({ onFinish }) {
  const [writingDone, setWritingDone] = useState(false);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [progress, setProgress] = useState(0);

  // Measure the container width once after mount
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  // Animate the mask from left to right over 4 seconds
  useEffect(() => {
    if (containerWidth === 0) return;
    let startTime = performance.now();
    let rafId;

    const step = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / 4000, 1);
      // Use a subtle easing (easeOutCubic)
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(eased);
      if (t < 1) {
        rafId = requestAnimationFrame(step);
      }
    };
    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, [containerWidth]);

  // After the writing animation finishes, wait 1 second then show the start button
  useEffect(() => {
    if (progress === 1) {
      const timer = setTimeout(() => {
        setWritingDone(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Width of the mask rectangle
  const maskWidth = progress * containerWidth;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {/* Outer container for the SVG – width is measured for the mask */}
        <div
          ref={containerRef}
          className="relative w-3/4 max-w-2xl h-auto"
        >
          <svg
            viewBox="0 0 600 200"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Mask that reveals the text gradually */}
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

            {/* The text in a cursive, handwriting font */}
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="64"
              fontFamily="'Great Vibes', 'Brush Script MT', cursive"
              fill="#ffffff"
              mask="url(#writingMask)"
            >
              Hello There
            </text>

            {/* Animated pen tip that follows the left edge of the reveal */}
            <circle
              cx={
                // convert progress (0‑1) to the x‑coordinate on the SVG canvas
                progress * 600
              }
              cy="120"
              r="5"
              fill="rgba(255,255,255,0.7)"
            />
          </svg>
        </div>

        {/* "Start" button, shown after the writing finishes */}
        {writingDone && (
          <motion.div
            onClick={onFinish}
            role="button"
            className="text-white tracking-wider text-4xl mt-8 animate-pulse cursor-pointer px-1 py-2 hover:underline hover:underline-offset-5"
            tabIndex={0}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          >
            Start
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
