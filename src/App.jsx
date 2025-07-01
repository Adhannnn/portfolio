import { useState } from "react";
import SplashScreen from "./sections/SplashScreen";
import Navbar from "./sections/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import SectionOne from "./sections/LandingPage";
import SectionTwo from "./sections/AboutMe";
import SectionThree from "./sections/Skilss";
import SectionExperience from "./sections/Experiences";
import SectionFive from "./sections/Projects";
import { Scrollbar } from "react-scrollbars-custom";
import AnimatedCursor from "./components/AnimatedCursor";
import ContactSection from "./sections/Contacts";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onFinish={() => setShowSplash(false)} />
        ) : (
          <>
            <AnimatedCursor />
            <Navbar />

            <motion.main
              key="main"
              className="pt-24"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Scrollbar
                style={{ height: "calc(100vh - 96px)" }} 
                trackYProps={{
                  style: {
                    backgroundColor: "#111",
                    width: "10px",
                    borderRadius: "9999px",
                    scrollBehavior: "smooth",
                  },
                }}
                thumbYProps={{
                  style: {
                    backgroundColor: "#00ffcc",
                    borderRadius: "9999px",
                    scrollBehavior: "smooth"
                  },
                }}
              >
                <div id="content-area">
                  <SectionOne />
                  <SectionTwo />
                  <SectionThree />
                  <SectionExperience />
                  <SectionFive />
                  <ContactSection />
                </div>
              </Scrollbar>
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
