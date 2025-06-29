// src/sections/SectionTwo.jsx
import { motion } from "framer-motion";
import Adhan from "../assets/images/Adhanganteng.jpg"; 
export default function SectionTwo() {
  return (
    <motion.section
      id="aboutMe"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      /* full‑width gradient + corner lines */
      className="
        relative w-screen
        bg-gradient-to-b from-gray-100 via-gray-200 to-gray-400
        py-20 sm:py-24
        overflow-hidden
      "
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12">
        About&nbsp;Me
      </h2>

      {/* Main Grid */}
      <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2">
        {/* Text Column */}
        <div className="text-lg sm:text-xl leading-relaxed text-gray-800 indent-8 space-y-8">
          <p>
            Hello there! My name is Wahyu Ramadhan, but you can call me Adhan. I
            have a strong passion for <span className="font-bold">Internet of Things</span> and <span className="font-bold">Software
            Development</span>. I’m also eager to explore various areas within the IT
            field. I’m passionate about learning new technologies and keeping up
            with how they evolve.
          </p>
          <p>
            Throughout my journey, I’ve worked on several projects that reflect
            my dedication to quality and problem solving. Each one resulted
            in outcomes that exceeded expectations. I’m always looking for
            opportunities to grow, contribute, and apply my knowledge in real‑world
            environments.
          </p>
        </div>

        {/* Photo Column */}
        <div className="flex items-center justify-center">
          <figure className="relative">
            <img
              src={ Adhan }
              alt="Adhan giving thumbs‑up (2020)"
              className="
                h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80
                rounded-full object-cover shadow-lg
              "
            />
            <figcaption className="absolute bottom-2 right-3 text-sm sm:text-base text-black/80 italic">
              *2020
            </figcaption>
          </figure>
        </div>
      </div>
    </motion.section>
  );
}
