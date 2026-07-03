// src/sections/SectionExperience.jsx
import { motion } from "framer-motion";
import MatraLogo from "../assets/images/favicon.png"
import AhmLogo from "../assets/images/ahmlogo.png"
import B7Logo from "../assets/images/bintang-toedjoe.jpeg"

/* ---------- 1. Experience Data */
const experiences = [
  {
    company: "PT. Matra Unggul Teknologi",
    period: "Apr 2025 – May 2025",
    role: "Web Developer",
    logo:  MatraLogo , 
    points: [
      "Designed and developed a responsive company profile website for a local printing business using modern web technologies.",
      "Customized website layouts, branding elements, and user interface components based on client requirements.",
      "Implemented contact forms, product showcase pages, and social media integration to enhance customer engagement.",
      "Optimized the website for desktop and mobile devices, ensuring a responsive and user-friendly experiences.",
    ],
  },
  {
    company: "PT. Astra Honda Motor",
    period: "Sep 2025 - Feb 2026",
    role: "Software Engineer Intern",
    logo: AhmLogo,
    points: [
      "Migrated 7+ internal web applications from legacy systems to modern architectures while preserving existing business functionality.",
      "Developed and maintained applications features using Java, Spring MVC, Hibernate, Oracle Database, HTML, CSS, JavaScript, and Bootstrap.",
      "Refactored legacy code by applying clean code principles and reusable components, improving code maintainability and reducing duplication.",
      "Performed debugging, functional testing, and issue resolution to ensure application stability before deployment.",
      "Produced technical documentation covering migration workflows, implementation details, and system behavior to support future maintainance."
    ]
  },
  {
    company: "PT. Bintang Toedjoe",
    period: "Mar 2026 - July 2026",
    role: "Project Digitalization Intern",
    logo: B7Logo,
    points: [
      "Dveloped internal digitalization platform using Next.js, Go, PostgreSQL, and RESTful APIs.",
      "Collaborated with cross-functional teams to analyze business workflows and translate requirements into scallable digital solutions.",
      "Integrated frontend interfaces with backend services while performing testing and debugging to ensure application reliability.",
      "Contributed to the digitalization of manual business process by developing centralized web-based applications that improve operational efficiency",
    ]
  }
];

/* ---------- 2.  Section component ------------ */
export default function SectionExperience() {
  return (
    <motion.section
    id="experiences"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      /* light‑to‑dark horizontal gradient */
      className="relative w-screen bg-black py-20 sm:py-24 overflow-hidden"
    >
      <h2 className="text-white text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16">
        Experiences
      </h2>

      <div className="mx-auto max-w-5xl px-6 space-y-16">
        {experiences.map((exp, idx) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, x: idx % 2 ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row sm:items-start sm:space-x-8"
          >
            {/* logo */}
            <div className="flex-shrink-0 mb-6 sm:mb-0">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="h-24 w-24 rounded-full object-contain shadow-md"
              />
            </div>

            {/* detail block */}
            <div className="text-white">
              <h3 className="text-2xl sm:text-3xl font-semibold">
                {exp.company}
              </h3>
              <p className="mt-1 text-lg text-gray-500">{exp.period}</p>

              <p className="text-white mt-4 text-lg font-medium">{exp.role}</p>

              <ul className="text-white mt-4 list-disc pl-5 space-y-2 text-base sm:text-lg leading-relaxed text-gray-800">
                {exp.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
