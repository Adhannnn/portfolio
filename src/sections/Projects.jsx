import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Monitoring System */
import MonitoringSystem from "../assets/images/MonitoringSystem.png";
import LoginPage from "../assets/images/loginPage.png";
import AddRoomModal from "../assets/images/AddRoom.png";
import Logout from "../assets/images/Logout.png";
import DeleteRoom from "../assets/images/deleteRoomModal.png";
import DemoVideo from "../assets/videos/MonitoringSystem.mp4";

/* Website Portfolio */
import Portfolio from "../assets/images/portfolio.png";

/* Car Control */
import CarControl from "../assets/images/Projects-Arduino/CarControl.jpeg";
import CarDemo from "../assets/images/Projects-Arduino/VideoDemo.mp4";

const projects = [
  {
    /* Monitoring System */
    title: "Monitoring Dashboard",
    description:
      "Dashboard for monitoring sensor in room by using MQTT and Laravel.",
    details: `This dashboard was built using Laravel for backend, MQTT for real-time communication,
and Chart.js for visualizing the data from temperature, humidity, and gas sensors.
It includes features like room grouping, user management, and notification system.`,
    type: "solo",
    thumbnail: MonitoringSystem,
    images: [LoginPage, MonitoringSystem, AddRoomModal, DeleteRoom, Logout],
    video: DemoVideo,
    techStack: ["Laravel", "MQTT", "Chart.js", "PostgreSQL", "Tailwind CSS"],
  },

  {
    /* Portfolio Website */
    title: "Portfolio Website",
    description: "My Portfolio Website.",
    details:
      "My Portfolio Website is created using ReactJS + Vite to showcase my Skills, Experiences, and many others. And in hope to get an opportunity for us to work together.",
    thumbnail: Portfolio,
    images: [Portfolio],
    video: null,
    techStack: ["ReactJS", "Vite", "Tailwind CSS"],
  },
  {
    /* Car Control */
    title: "Control Car Using PS3 Controller",
    description:
      "Controling Car Using PS3 Controller with NodeMCU Micro Controller.",
    details:
      "This project showcases a robotic car controlled using a PlayStation 3 (PS3) controller, with a NodeMCU microcontroller serving as the core component. The system uses Bluetooth to receive joystick inputs from the PS3 controller, which are then interpreted by the NodeMCU to control motor directions. Additionally, MQTT is integrated as part of the tech stack to enable real-time communication and remote monitoring. This setup demonstrates an IoT approach to robotics, combining wireless control, microcontroller programming, and MQTT-based messaging for scalable control and data feedback.",
    thumbnail: CarControl,
    images: [CarControl],
    video: CarDemo,
    techStack: ["C++", "Python", "MQTT"],
  },
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
    <div className="relative w-full h-56 overflow-hidden rounded-xl mb-4">
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
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded hover:bg-black/70 text-sm z-10"
          >
            ‹
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-2 py-1 rounded hover:bg-black/70 text-sm z-10"
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

  const openModal = (project) => {
    setActiveProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveProject(null);
  };

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-gradient-to-b from-[#111] to-black text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <button
                    onClick={() => openModal(project)}
                    className="px-6 py-2 bg-gray-200 hover:cursor-pointer text-black text-sm font-semibold rounded-full hover:bg-white transition"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ---- separator + info ---- */}
        <div className="mt-14 flex items-center justify-center">
          {/* garis kiri */}
          <span className="flex-grow border-t border-dashed border-gray-600" />

          {/* teks */}
          <span className="mx-4 text-xs sm:text-sm tracking-widest uppercase text-gray-400 whitespace-nowrap">
            more private projects &amp; coming&nbsp;soon
          </span>

          {/* garis kanan */}
          <span className="flex-grow border-t border-dashed border-gray-600" />
        </div>

        <AnimatePresence>
          {isOpen && activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            >
              <motion.div
                initial={{ y: 80, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 80, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-zinc-900 rounded-xl p-6 max-w-xl w-full relative text-white shadow-2xl"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-3 text-gray-400 hover:text-white hover:cursor-pointer text-2xl font-bold"
                >
                  &times;
                </button>

                <h3 className="text-xl font-bold mb-4">
                  {activeProject.title}
                </h3>
                <ImageSlider
                  images={activeProject.images}
                  video={activeProject.video}
                />

                <p className="text-sm text-gray-300 whitespace-pre-line mt-4">
                  {activeProject.details}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {activeProject.techStack?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
