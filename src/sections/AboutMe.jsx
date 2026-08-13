// src/sections/SectionTwo.jsx
import { motion } from "framer-motion";
import Adhan from "../assets/images/Adhanganteng.jpg"; 
import Aos from "aos";

export default function SectionTwo() {
  Aos.init();

  return (
    <motion.section
      id="aboutMe"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full bg-black py-20 sm:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="flex flex-col items-center mb-14">
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-3">
            About Me
          </h2>
          <span className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </div>

        {/* Main Grid */}
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Text Column */}
          <div className="text-base sm:text-lg leading-relaxed text-gray-300 space-y-6">
            <p>
              Hello there! My name is <span className="text-white font-bold">Wahyu Ramadhan</span>, but you can call me <span className="text-cyan-400 font-semibold">Adhan</span>. I have a strong passion for <span className="text-cyan-400 font-semibold">Internet of Things (IoT)</span> and <span className="text-cyan-400 font-semibold">Software Development</span>. I am constantly exploring diverse domains across IT to expand my technical horizon.
            </p>
            <p>
              Throughout my academic and professional journey, I’ve engineered scalable web applications, embedded IoT solutions, and system optimizations. I thrive on solving complex engineering challenges and delivering outcomes that exceed expectations.
            </p>
          </div>

          {/* Photo Column */}
          <div className="flex items-center justify-center">
            <div className="relative group">
              {/* Subtle background glow */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-40 group-hover:opacity-75 blur-lg transition duration-500" />
              <img
                src={Adhan}
                alt="Wahyu Ramadhan (Adhan)"
                className="relative h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80 rounded-full object-cover shadow-2xl border-2 border-cyan-400/40"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

