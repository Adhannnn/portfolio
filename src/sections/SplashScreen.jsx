// src/SplashScreen.jsx
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onFinish }) {
  const [writingDone, setWritingDone] = useState(false);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    // After component mounts, measure the total length of the SVG path
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setPathLength(length);
    }
  }, []);

  useEffect(() => {
    if (pathLength > 0) {
      // The animation duration is 4 seconds, then we wait 1 second before finishing
      const timer = setTimeout(() => {
        setWritingDone(true);
      }, 5000); // 4s animation + 1s pause
      return () => clearTimeout(timer);
    }
  }, [pathLength]);

  const [writingDone, setWritingDone] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {/* SVG overlay for handwriting animation */}
        <svg
          viewBox="0 0 600 200"
          className="w-3/4 max-w-2xl h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* The path that will be drawn */}
          <path
            d="M 50 100 
               C 80 60, 120 60, 150 100
               C 180 140, 220 140, 250 100
               C 280 60, 320 60, 350 100
               C 380 140, 420 140, 450 100
               C 480 60, 520 60, 550 100"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength}
            style={{
              transition: `stroke-dashoffset 4s ease-in-out`,
            }}
            ref={pathRef}
          />
        </svg>

        {/* Start button after writing finishes */}
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
