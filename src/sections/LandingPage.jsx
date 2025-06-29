import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import profilePic from "../assets/images/Adhanganteng.jpg";

export default function SectionOne() {
  return (
    <motion.section
    id="landing"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-screen min-h-screen bg-black text-white flex items-center overflow-hidden"
    >
      {/* top‑left dots */}
      <div className="hidden sm:flex absolute top-10 left-4 sm:left-16 space-x-4 sm:space-x-6">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-gray-400/60"
          />
        ))}
      </div>

      {/* bottom‑right dots */}
      <div className="hidden sm:flex absolute bottom-10 right-4 sm:right-16 space-x-4 sm:space-x-6">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-gray-400/60"
          />
        ))}
      </div>

      {/* content wrapper */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* text column */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-light leading-snug">
            Hi, I’m <span className="font-extrabold tracking-wide">Adhan</span>
          </h1>

          <p className="mt-6 sm:mt-8 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg md:text-xl leading-relaxed text-gray-300">
            An informatic student from&nbsp;President University, passionate
            about the Internet&nbsp;of&nbsp;Things and software development.
          </p>

          {/* CV button */}
          <div className="mt-8 sm:mt-10 flex justify-center lg:justify-start items-center space-x-2">
            <a
              href="/cv.pdf"
              download
              className="rounded-full bg-gradient-to-b from-gray-300 to-gray-500 px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-black shadow-md hover:opacity-90 transition"
            >
              My CV
            </a>
            <span className="text-lg sm:text-xl select-none">.pdf</span>
          </div>

          {/* social links */}
          <div className="mt-10 flex justify-center lg:justify-start space-x-6">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-2xl sm:text-3xl hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-2xl sm:text-3xl hover:scale-110 transition"
            >
              <SiInstagram className="rounded-md p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-600 to-purple-600" />
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-2xl sm:text-3xl hover:scale-110 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* portrait column */}
        <div className="flex items-center justify-center order-1 lg:order-none">
          <div className="h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full overflow-hidden shadow-xl">
            <img
              src={profilePic}
              alt="Wahyu portrait"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
