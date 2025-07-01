// src/sections/SectionThree.jsx
import { motion } from "framer-motion";


/* Logo Import */
import tailwindLogo from "../assets/images/tailwindcss.png";
import htmlLogo     from "../assets/images/html.png";
import cssLogo      from "../assets/images/css.png";
import jsLogo       from "../assets/images/javascript.png";
import cppLogo      from "../assets/images/cpp.png";
import phpLogo      from "../assets/images/php.png";
import laravelLogo  from "../assets/images/laravel.png";
import flutterLogo  from "../assets/images/flutter.png";
import psqlLogo     from "../assets/images/postgresql.png";
import mysqlLogo    from "../assets/images/mysql.png";
import figmalogo from "../assets/images/figma-rmbg.png";

/* List of Skills */
const skills = [
  { logo: tailwindLogo, title: "Tailwind CSS", subtitle: "CSS Framework" },
  { logo: htmlLogo,    title: "HTML",          subtitle: "Markup Language" },
  { logo: cssLogo,     title: "CSS",           subtitle: "Style‑Sheet Language" },
  { logo: jsLogo,      title: "JavaScript",    subtitle: "Programming Language" },
  { logo: cppLogo,     title: "C++",           subtitle: "Programming Language" },
  { logo: phpLogo,     title: "PHP",           subtitle: "Programming Language" },
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
      
      /* Gradient */
      className="relative w-screen bg-black text-white overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 grid gap-12 lg:grid-cols-[260px_1fr_180px]">
        {/* Left Column */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-2">
              Skills
            </h2>
            <span className="block h-1 w-16 bg-white rounded-full" />
          </div>

          <p className="mt-12 text-sm sm:text-base text-gray-300">
            — still learning and always improve
          </p>
        </div>

        {/*  Skills Grid  */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map(({ logo, title, subtitle }, i) => (
            <div
              key={i}
              className="
                flex items-center space-x-4
                rounded-xl border border-white/20 bg-white/5
                px-4 py-5
                shadow-sm hover:shadow-lg transition
                backdrop-blur-sm
              "
            >
              <img
                src={logo}
                alt={`${title} logo`}
                className="h-12 w-12 object-contain shrink-0"
              />
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-gray-300">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* "Coming Soon" */}
        <div className="hidden lg:flex flex-col items-center justify-center">
          <div className="h-56 w-px bg-white/30" />
          <p className="rotate-90 translate-x-[38px] whitespace-nowrap tracking-widest text-gray-200">
            c&nbsp;o&nbsp;m&nbsp;i&nbsp;n&nbsp;g&nbsp;&nbsp;&nbsp;s&nbsp;o&nbsp;o&nbsp;n&nbsp;&nbsp;:)
          </p>
          <div className="h-56 w-px bg-white/30" />
        </div>
      </div>
    </motion.section>
  );
}
