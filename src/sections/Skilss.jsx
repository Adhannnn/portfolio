// src/sections/SectionThree.jsx
import { motion } from "framer-motion";

/* Logo Import */
import tailwindLogo from "../assets/images/tailwindcss.png";
import htmlLogo     from "../assets/images/html.png";
import cssLogo      from "../assets/images/css.png";
import jsLogo       from "../assets/images/javascript.png";
import cppLogo      from "../assets/images/cpp.png";
import phpLogo      from "../assets/images/php.png";
import javalogo     from "../assets/images/java.png";
import laravelLogo  from "../assets/images/laravel.png";
import flutterLogo  from "../assets/images/flutter.png";
import psqlLogo     from "../assets/images/postgresql.png";
import mysqlLogo    from "../assets/images/mysql.png";
import figmalogo    from "../assets/images/figma-rmbg.png";

/* List of Skills */
const skills = [
  { logo: tailwindLogo, title: "Tailwind CSS", subtitle: "CSS Framework" },
  { logo: htmlLogo,    title: "HTML",          subtitle: "Markup Language" },
  { logo: cssLogo,     title: "CSS",           subtitle: "Style-Sheet Language" },
  { logo: jsLogo,      title: "JavaScript",    subtitle: "Programming Language" },
  { logo: cppLogo,     title: "C++",           subtitle: "Programming Language" },
  { logo: phpLogo,     title: "PHP",           subtitle: "Programming Language" },
  { logo: javalogo,    title: "Java",          subtitle: "Programming Language" },
  { logo: laravelLogo, title: "Laravel",       subtitle: "PHP Framework" },
  { logo: flutterLogo, title: "Flutter",       subtitle: "Dart Framework" },
  { logo: psqlLogo,    title: "PostgreSQL",    subtitle: "Database" },
  { logo: mysqlLogo,   title: "MySQL",         subtitle: "Database" },
  { logo: figmalogo,   title: "Figma",         subtitle: "Design Application" },
];

export default function SectionThree() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full bg-black text-white overflow-hidden py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-[260px_1fr_120px]">
        {/* Left Column */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-3 text-white">
              Skills
            </h2>
            <span className="block h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
          </div>

          <p className="mt-8 text-sm sm:text-base text-gray-400 font-medium">
            — Continuously learning &amp; expanding tech stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map(({ logo, title, subtitle }, i) => (
            <div
              key={i}
              className="
                flex items-center space-x-4
                rounded-xl border border-zinc-800 bg-zinc-900/60
                px-4 py-4
                hover:border-cyan-500/40 hover:bg-zinc-900/90 hover:shadow-lg hover:shadow-cyan-500/5 transition duration-300
                backdrop-blur-sm group
              "
            >
              <div className="h-12 w-12 rounded-lg bg-zinc-800/80 p-2 flex items-center justify-center shrink-0 border border-zinc-700/50">
                <img
                  src={logo}
                  alt={`${title} logo`}
                  className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {title}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical Separator */}
        <div className="hidden lg:flex flex-col items-center justify-center">
          <div className="h-32 w-px bg-zinc-800" />
          <p className="rotate-90 my-8 whitespace-nowrap tracking-widest text-xs uppercase text-gray-500 font-semibold">
            c o m i n g &nbsp; s o o n
          </p>
          <div className="h-32 w-px bg-zinc-800" />
        </div>
      </div>
    </motion.section>
  );
}

