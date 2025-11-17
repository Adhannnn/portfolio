// src/sections/SectionExperience.jsx
import { motion } from "framer-motion";
import MatraLogo from "../assets/images/favicon.png"
import AhmLogo from "../assets/images/ahmlogo.png"

/* ---------- 1. Experience Data */
const experiences = [
  {
    company: "PT. Matra Unggul Teknologi",
    period: "Apr 2025 – May 2025",
    role: "Web Developer",
    logo:  MatraLogo , 
    points: [
      "Created a responsive informational website for a local printing business.",
      "Customized layout, color scheme, and sections to align with the client's branding and service offerings.",
      "Integrated contact forms, product showcases, and social media links for better engagement.",
      "Completed the project on schedule and received positive feedback from the client."
    ],
  },
  {
    company: "PT. Astra Honda Motor",
    period: "Sep 2025 - Present",
    role: "Software Engineer Intern",
    logo: AhmLogo,
    points: [
      "Migrated 4+ internal applications from legacy systems to modern technology frameworks, improving overall system performance, reliability, and maintainability.",
      "Successfully delivered all assigned applications within scheduled deadlines, maintaining consistent quality standards.",
      "Participated in debugging and testing phases to ensure system stability and minimize deployment issues.",
      "Documented migration workflows and created clear technical guides to assist future maintenance teams."
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
