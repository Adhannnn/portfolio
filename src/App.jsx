import { useState } from "react";
import SplashScreen from "./sections/SplashScreen";
import Navbar from "./sections/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import SectionOne from "./sections/LandingPage";
import SectionTwo from "./sections/AboutMe";
import SectionThree from "./sections/Skilss";
import SectionExperience from "./sections/Experiences";
import SectionFive from "./sections/Projects";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    /* hide any accidental horizontal overflow from absolute dots */
    <div className="overflow-x-hidden no-scrollbar overflow-y-auto">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onFinish={() => setShowSplash(false)} />
        ) : (
          <>
            <Navbar />

            <motion.main
              key="main"
              className="pt-24"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <SectionOne />
              <SectionTwo />
              <SectionThree />
              <SectionExperience />
              <SectionFive />
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
