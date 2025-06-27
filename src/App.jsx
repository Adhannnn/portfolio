import { useState, useEffect } from "react";
import SplashScreen from "./splashScreen";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Landing from "./Landing";
import AboutMe from "./AboutMe";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="w-full h-screen">
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen onFinish={() => setShowSplash(false)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className=""
          >
            <Navbar />
            <Landing />
            <AboutMe />
            
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
