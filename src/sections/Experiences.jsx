// src/sections/SectionExperience.jsx
import { motion } from "framer-motion";

/* ---------- 1.  Your data ------------ */
const experiences = [
  {
    company: "PT. Matra Unggul Teknologi",
    period: "Apr 2025 – May 2025",
    role: "Part‑Time Web Developer",
    logo: "/images/companies/matra.svg", // 96×96 transparent png/svg
    points: [
      "Developed an informational website for a printing business as a part‑time developer.",
      "Delivered the project on schedule with high client satisfaction.",
    ],
  },
  // 👉 add more objects here to grow the list
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
      className="relative w-screen bg-gradient-to-r from-gray-50 via-gray-200 to-gray-400 py-20 sm:py-24 overflow-hidden"
    >
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-16">
        Experience
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
            <div className="text-gray-900">
              <h3 className="text-2xl sm:text-3xl font-semibold">
                {exp.company}
              </h3>
              <p className="mt-1 text-lg text-gray-500">{exp.period}</p>

              <p className="mt-4 text-lg font-medium">{exp.role}</p>

              <ul className="mt-4 list-disc pl-5 space-y-2 text-base sm:text-lg leading-relaxed text-gray-800">
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
