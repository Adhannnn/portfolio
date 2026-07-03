// src/SplashScreen.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function SplashScreen({ onFinish }) {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingDone(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        {/* Teks utama */}
        <motion.h1
          className="text-white text-6xl md:text-9xl font-bold font-[Poppins] mb-4"
          initial={{ scale: 0.5, opacity: 0, y: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: typingDone ? -50 : 0,
          }}
          transition={{
            scale: { duration: 1.5, ease: "easeOut" },
            opacity: { duration: 1.5, ease: "easeOut" },
            y: { duration: 2, ease: "easeInOut" },
          }}
        >
          <Typewriter
            words={["Hello There ! 👋"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h1>

        {/* Tombol Start */}
        {typingDone && (
          <motion.div
            onClick={onFinish}
            role="button"
            className="text-white tracking-wider text-4xl mt-1 animate-pulse cursor-pointer px-1 py-2 hover:underline hover:underline-offset-5"
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
