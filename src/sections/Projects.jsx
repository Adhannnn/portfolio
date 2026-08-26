import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaGlobe, FaImages, FaRedo } from "react-icons/fa";

/* Monitoring System */
import MonitoringSystem from "../assets/images/MonitoringSystem.png";
import LoginPage from "../assets/images/loginPage.png";
import AddRoomModal from "../assets/images/AddRoom.png";
import Logout from "../assets/images/Logout.png";
import DeleteRoom from "../assets/images/deleteRoomModal.png";
import DemoVideo from "../assets/videos/MonitoringSystem.mp4";

/* Website Portfolio */
import Portfolio from "../assets/images/PortfolioWebsite.png";

/* Car Control */
import CarControl from "../assets/images/Projects-Arduino/CarControl.jpeg";
import CarDemo from "../assets/images/Projects-Arduino/VideoDemo.mp4";

/* First Website */
import aboutPage from "../assets/images/first-web/about.png";
import menuPage from "../assets/images/first-web/menu.png";
import benefitPage from "../assets/images/first-web/benefits.png";
import contactPage from "../assets/images/first-web/menu.png";
import homePage from "../assets/images/first-web/home.png";

/* Kanban board */
import kanbanBoard from "../assets/images/kanban-board/kanban-board.png";

const projects = [
  {
    /* Monitoring System */
    title: "Monitoring Dashboard",
    description:
      "Dashboard for monitoring room sensors in real-time using MQTT and Laravel.",
    details: `This dashboard was built using Laravel for backend, MQTT for real-time communication,
and Chart.js for visualizing data from temperature, humidity, and gas sensors.
It includes features like room grouping, user management, and notification system.`,
    type: "solo",
    thumbnail: MonitoringSystem,
    images: [LoginPage, MonitoringSystem, AddRoomModal, DeleteRoom, Logout],
    video: DemoVideo,
    techStack: ["Laravel", "MQTT", "Chart.js", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/Adhannnn/monitoring-dashboard",
    liveUrl: null,
    hasPreview: false,
  },

  {
    /* Portfolio Website */
    title: "Portfolio Website",
    description: "Personal Interactive Portfolio Website.",
    details:
      "My Portfolio Website is built using ReactJS + Vite to showcase my Skills, Experiences, Projects, and interactive demos. Features dynamic dark mode glassmorphism and custom CSS animations.",
    thumbnail: Portfolio,
    images: [Portfolio],
    video: null,
    techStack: ["ReactJS", "Vite", "Tailwind CSS", "Framer Motion"],
    githubUrl: null,
    liveUrl: "https://porto-adhan.netlify.app",
    hasPreview: true,
  },
  {
    /* Car Control */
    title: "Control Car Using PS3 Controller",
    description:
      "Robotic Car Controlled via PS3 Controller and NodeMCU Microcontroller.",
    details:
      "This project showcases a robotic car controlled using a PlayStation 3 (PS3) controller, with a NodeMCU microcontroller serving as the core component. The system uses Bluetooth to receive joystick inputs from the PS3 controller, which are then interpreted by the NodeMCU to control motor directions. Additionally, MQTT is integrated as part of the tech stack to enable real-time communication and remote monitoring.",
    thumbnail: CarControl,
    images: [CarControl],
    video: CarDemo,
    techStack: ["C++", "Python", "MQTT", "NodeMCU"],
    githubUrl: null,
    liveUrl: null,
    hasPreview: false,
  },
  {
    /* First Website */
    title: "Gimi Gimi Resale",
    description: "Culinary Advertising & Online Food Order Website.",
    details:
      "Gimi Gimi Resale is a fast food and Indonesian traditional culinary showcase web app. Built with clean responsive HTML, CSS, JavaScript, dark/light theme toggle, and AOS scroll animations.",
    thumbnail: homePage,
    images: [homePage, aboutPage, menuPage, benefitPage, contactPage],
    video: null,
    techStack: ["HTML", "CSS", "JavaScript", "AOS"],
    githubUrl: null,
    liveUrl: "https://gimi-gimi-resale.netlify.app",
    hasPreview: true,
  },
  {
    /* Kanban board */
    title: "Kanban Board",
    description: "Realtime team collaboration & project management platform",
    details: `CollabSaaS is a full-stack project management app built for real-time team execution.

    - High-performance Kanban board with smooth drag-and-drop reordering using fractional indexing (LexoRank) — moving a task only updates 1 database row instead of re-indexing the whole list, with optimistic UI and automatic rollback on failure.
    - Realtime Pub/Sub via Socket.io room isolation per board (board:<projectId>), with live user presence and instant activity notifications when tasks are created, updated, commented on, or moved.
    - Multi-view workspace: Kanban Board, Timeline (Gantt-style date range view), and an Analytics dashboard showing completion rate, in-progress count, and per-member workload.
    - Rich task execution: multiple assignees, subtasks/checklists, inline comment threads, and one-click CSV export.
    - Multi-tenant workspace system with role-based access control (Admin / Member / Viewer) enforced at the API layer.
    - Custom user profiles, dark/light mode, and a modern SaaS UI with glassmorphism and ambient gradients.

    ⚠️ Note on the live demo: the backend for this project is self-hosted from my personal laptop (not a managed cloud server), while the frontend is deployed on Vercel. This keeps the demo free to run, but it also means response times can be slower than a real production setup, and the live site may occasionally go offline if my laptop is off or my connection drops. It's built to show the app working end-to-end in real time — for a business or production use case, the backend would need to move to a proper managed host (VPS, Railway, Render, etc.) for stable uptime and performance.`,
    type: "solo",
    vidoe: null,
    techStack: [
      "NestJS",
      "Socket.io",
      "PostgreSQL",
      "Prisma",
      "Next.js 15",
      "React",
      "Tailwind CSS",
    ],
    thumbnail: kanbanBoard,
    images: [kanbanBoard],
    liveUrl: "https://kanban-board-one-lac.vercel.app",
    hasPreview: false,
    githubUrl: false,
  }
];

function ImageSlider({ images, video }) {
  const slides = video ? [...images, video] : images;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) =>
      newDirection === 1
        ? (prev + 1) % slides.length
        : (prev - 1 + slides.length) % slides.length
    );
  };

  const isVideo = video && index === slides.length - 1;

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: { x: 0, opacity: 1, position: "relative" },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute",
    }),
  };

  return (
    <div className="relative w-full h-56 sm:h-64 overflow-hidden rounded-xl mb-4 bg-zinc-950">
      <AnimatePresence custom={direction} mode="wait">
        {isVideo ? (
          <motion.video
            key={slides[index]}
            src={slides[index]}
            controls
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
          />
        ) : (
          <motion.img
            key={slides[index]}
            src={slides[index]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
          />
        )}
      </AnimatePresence>
      {slides.length > 1 && (
        <>
          <button
            onClick={() => paginate(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white px-2.5 py-1 rounded-full text-sm z-10 transition cursor-pointer"
          >
            ‹
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white px-2.5 py-1 rounded-full text-sm z-10 transition cursor-pointer"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}

export default function SectionFive() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [activeTab, setActiveTab] = useState("preview");
  const [iframeKey, setIframeKey] = useState(0);

  const openModal = (project) => {
    setActiveProject(project);
    setActiveTab(project.hasPreview && project.liveUrl ? "preview" : "gallery");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveProject(null);
  };

  const reloadIframe = () => {
    setIframeKey((prev) => prev + 1);
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-black text-white py-20 px-6 w-full"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-zinc-800 pb-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Projects</h2>
            <p className="text-gray-400 text-sm mt-1">Showcase of software apps, web solutions & IoT projects</p>
          </div>
          <span className="block h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-4 sm:mt-0" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-zinc-900/80 border border-zinc-800 hover:border-cyan-500/40 rounded-2xl overflow-hidden shadow-xl transform hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />
                {project.hasPreview && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-cyan-500/90 text-black font-semibold text-[10px] tracking-wider uppercase backdrop-blur-md shadow-md">
                    Live Web
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-3 border-t border-zinc-800/80">
                  <button
                    onClick={() => openModal(project)}
                    className="px-5 py-2 bg-zinc-800 hover:bg-cyan-500 text-white hover:text-black text-xs font-semibold rounded-full transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    {project.hasPreview ? (
                      <>
                        <FaGlobe size={12} />
                        <span>Preview</span>
                      </>
                    ) : (
                      <span>Details</span>
                    )}
                  </button>

                  <div className="flex items-center space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-white transition"
                        title="GitHub Repository"
                      >
                        <FaGithub size={18} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition"
                        title="Open Live Website"
                      >
                        <FaExternalLinkAlt size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---- separator + info ---- */}
        <div className="mt-16 flex items-center justify-center">
          <span className="flex-grow border-t border-dashed border-zinc-800" />
          <span className="mx-4 text-xs sm:text-sm tracking-widest uppercase text-gray-400 whitespace-nowrap">
            more private projects &amp; coming&nbsp;soon
          </span>
          <span className="flex-grow border-t border-dashed border-zinc-800" />
        </div>

        <AnimatePresence>
          {isOpen && activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
            >
              <motion.div
                initial={{ y: 60, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 60, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`bg-zinc-900 border border-zinc-800 rounded-2xl relative text-white shadow-2xl flex flex-col overflow-hidden ${activeProject.hasPreview
                    ? "max-w-5xl w-full h-[85vh] sm:h-[88vh]"
                    : "max-w-xl w-full max-h-[90vh] p-6 sm:p-8 overflow-y-auto"
                  }`}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute top-3 right-4 z-20 text-gray-400 hover:text-white hover:cursor-pointer text-2xl font-bold p-1 transition"
                  title="Close Modal"
                >
                  &times;
                </button>

                {/* Header & Tabs for Preview-enabled Projects */}
                {activeProject.hasPreview ? (
                  <div className="flex flex-col h-full">
                    {/* Top bar with tabs */}
                    <div className="px-6 pt-5 pb-3 border-b border-zinc-800 flex flex-wrap items-center justify-between gap-3 bg-zinc-950/60">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-cyan-300 pr-8">
                          {activeProject.title}
                        </h3>
                        <p className="text-xs text-gray-400 mt-0.5">{activeProject.description}</p>
                      </div>

                      {/* Tab controller */}
                      <div className="flex items-center bg-zinc-800/80 p-1 rounded-xl border border-zinc-700/50 mr-8">
                        <button
                          onClick={() => setActiveTab("preview")}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${activeTab === "preview"
                              ? "bg-cyan-500 text-black shadow-md"
                              : "text-gray-300 hover:text-white"
                            }`}
                        >
                          <FaGlobe size={13} />
                          <span>Live Website</span>
                        </button>
                        <button
                          onClick={() => setActiveTab("gallery")}
                          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${activeTab === "gallery"
                              ? "bg-cyan-500 text-black shadow-md"
                              : "text-gray-300 hover:text-white"
                            }`}
                        >
                          <FaImages size={13} />
                          <span>Details</span>
                        </button>
                      </div>
                    </div>

                    {/* Content View */}
                    {activeTab === "preview" ? (
                      <div className="flex-1 flex flex-col bg-zinc-950 relative overflow-hidden">
                        {/* Simulated Browser Navbar */}
                        <div className="bg-zinc-900 border-b border-zinc-800 px-4 py-2 flex items-center justify-between text-xs text-gray-400 gap-2">
                          <div className="flex items-center space-x-1.5">
                            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                            <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
                            <span className="h-3 w-3 rounded-full bg-green-500/80 inline-block" />
                          </div>

                          <div className="flex-1 max-w-xl mx-2 bg-zinc-950 px-3 py-1 rounded-md text-gray-300 text-center font-mono truncate text-[11px] border border-zinc-800 flex items-center justify-center gap-2">
                            <span className="text-cyan-400">🔒</span>
                            <span className="truncate">{activeProject.liveUrl}</span>
                          </div>

                          <div className="flex items-center space-x-2">
                            <button
                              onClick={reloadIframe}
                              className="p-1.5 hover:text-white transition cursor-pointer rounded hover:bg-zinc-800"
                              title="Reload Preview"
                            >
                              <FaRedo size={12} />
                            </button>
                            <a
                              href={activeProject.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="p-1.5 text-cyan-400 hover:text-cyan-300 transition rounded hover:bg-zinc-800"
                              title="Open in New Tab"
                            >
                              <FaExternalLinkAlt size={12} />
                            </a>
                          </div>
                        </div>

                        {/* Interactive Embedded Iframe */}
                        <div className="flex-1 w-full h-full relative bg-white">
                          <iframe
                            key={iframeKey}
                            src={activeProject.liveUrl}
                            title={`${activeProject.title} Live Preview`}
                            className="w-full h-full border-0"
                            loading="lazy"
                          />
                        </div>

                        {/* Footer bar */}
                        <div className="bg-zinc-900 border-t border-zinc-800 px-6 py-3 flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {activeProject.techStack?.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-0.5 bg-cyan-950/60 text-cyan-300 text-[11px] font-medium rounded-full border border-cyan-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <a
                            href={activeProject.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs text-cyan-400 hover:underline flex items-center gap-1 font-medium"
                          >
                            <span>Open Fullsite</span>
                            <FaExternalLinkAlt size={10} />
                          </a>
                        </div>
                      </div>
                    ) : (
                      /* Gallery & Details tab for website preview projects */
                      <div className="flex-1 overflow-y-auto p-6 sm:p-8">
                        <ImageSlider
                          images={activeProject.images}
                          video={activeProject.video}
                        />
                        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line mt-6">
                          {activeProject.details}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {activeProject.techStack?.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-cyan-950/60 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Standard Modal for Non-Preview Projects (Car Control, Monitoring Dashboard) */
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyan-300 pr-8">
                      {activeProject.title}
                    </h3>

                    <ImageSlider
                      images={activeProject.images}
                      video={activeProject.video}
                    />

                    <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line mt-4">
                      {activeProject.details}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {activeProject.techStack?.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-cyan-950/60 text-cyan-300 text-xs font-medium rounded-full border border-cyan-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action URLs in Modal */}
                    <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-end gap-3">
                      {activeProject.githubUrl && (
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold rounded-lg transition flex items-center gap-2"
                        >
                          <FaGithub size={14} />
                          <span>Repository</span>
                        </a>
                      )}
                      {activeProject.liveUrl && (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold rounded-lg transition flex items-center gap-2"
                        >
                          <FaExternalLinkAlt size={12} />
                          <span>Visit Live Project</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

