// src/sections/SectionExperience.jsx
import { motion } from "framer-motion";
import MatraLogo from "../assets/images/favicon.png";
import AhmLogo from "../assets/images/ahmlogo.png";
import B7Logo from "../assets/images/bintang-toedjoe.jpeg";

/* ---------- 1. Experience Data */
const experiences = [
  {
    company: "PT. Matra Unggul Teknologi",
    period: "Apr 2025 – May 2025",
    role: "Web Developer",
    logo: MatraLogo,
    points: [
      "Designed and developed a responsive company profile website for a local printing business using modern web technologies.",
      "Customized website layouts, branding elements, and user interface components based on client requirements.",
      "Implemented contact forms, product showcase pages, and social media integration to enhance customer engagement.",
      "Optimized the website for desktop and mobile devices, ensuring a responsive and user-friendly experience.",
    ],
  },
  {
    company: "PT. Astra Honda Motor",
    period: "Sep 2025 - Feb 2026",
    role: "Software Engineer Intern",
    logo: AhmLogo,
    points: [
      "Migrated 7+ internal web applications from legacy systems to modern architectures while preserving existing business functionality.",
      "Developed and maintained application features using Java, Spring MVC, Hibernate, Oracle Database, HTML, CSS, JavaScript, and Bootstrap.",
      "Refactored legacy code by applying clean code principles and reusable components, improving code maintainability and reducing duplication.",
      "Performed debugging, functional testing, and issue resolution to ensure application stability before deployment.",
      "Produced technical documentation covering migration workflows, implementation details, and system behavior to support future maintenance.",
    ],
  },
  {
    company: "PT. Bintang Toedjoe",
    period: "Mar 2026 - July 2026",
    role: "Project Digitalization Intern",
    logo: B7Logo,
    points: [
      "Developed internal digitalization platform using Next.js, Go, PostgreSQL, and RESTful APIs.",
      "Collaborated with cross-functional teams to analyze business workflows and translate requirements into scalable digital solutions.",
      "Integrated frontend interfaces with backend services while performing testing and debugging to ensure application reliability.",
      "Contributed to the digitalization of manual business processes by developing centralized web-based applications that improve operational efficiency.",
    ],
  },
];

/* ---------- 2. Section component ------------ */
export default function SectionExperience() {
  return (
    <motion.section
      id="experiences"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full bg-black py-20 sm:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
            Experiences
          </h2>
          <span className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <motion.article
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 flex flex-col sm:flex-row sm:items-start sm:space-x-8"
            >
              {/* Logo */}
              <div className="flex-shrink-0 mb-6 sm:mb-0">
                <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl bg-zinc-800/80 p-2 flex items-center justify-center border border-zinc-700/60 shadow-md">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="h-full w-full object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="flex-1 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.company}
                    </h3>
                    <p className="text-cyan-400 text-base font-semibold mt-0.5">
                      {exp.role}
                    </p>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-400 bg-zinc-800/80 px-3 py-1 rounded-full border border-zinc-700/50 w-fit">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 list-disc pl-5 space-y-2.5 text-sm sm:text-base leading-relaxed text-gray-300">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

