// import { motion, AnimatePresence }  from "framer-motion";

// export default function SplashScreen({ onFinish }) {
//     return (
//         <AnimatePresence>
//             <motion.div
//                 className="fixed inset-0 bg-black flex items-center justify-center z-50"
//                 initial={{ opacity: 1 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1 }}
//                 onAnimationComplete={onFinish}
//             >

//                 <motion.h1
//                     className="text-white text-6xl font-bold"
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 1.2, ease:"easeOut" }}
//                 >

//                     Welcome

//                 </motion.h1>
                
//             </motion.div>
//         </AnimatePresence>
//     )
// }

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
        transition={{ duration: 1 }}
      >
        {/* Teks utama */}
        <motion.h1
          className="text-white text-6xl md:text-9xl font-bold font-[Poppins] mb-4"
          initial={{ scale: 0.8, opacity: 0, y: 0 }}
          animate={{
            scale: 1,
            opacity: 1,
            y: typingDone ? -50 : 0,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Typewriter
            words={["Hello There ! 👋"]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={50}
            delaySpeed={1500}
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
            transition={{ duration: 1 }}
          >
            Start
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
