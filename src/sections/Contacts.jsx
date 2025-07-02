import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const SERVICE_ID = "service_340u80f";
const TEMPLATE_ID = "template_eriyspc";
const PUBLIC_KEY = "j9YvifEf4ir1i6Xot";

export default function ContactSection() {
  const formRef = useRef(null);
  const [toast, setToast] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          formRef.current.reset();
          setToast("success");
          setTimeout(() => setToast(null), 4000);
        },
        (error) => {
          console.error(error);
          setToast("error");
          setTimeout(() => setToast(null), 4000);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-black text-white px-4 py-24 overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl font-extrabold mb-12"
      >
        Contact
      </motion.h2>

      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-2xl bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-14 flex flex-col gap-6"
      >
        <h3 className="text-2xl md:text-3xl font-semibold">Let's become partners!</h3>

        <div className="relative">
          <input id="name" name="name" placeholder=" " required className="input peer" />
          <label htmlFor="name" className="floating-label">Name</label>
        </div>

        <div className="relative">
          <input id="email" name="email" type="email" placeholder=" " required className="input peer" />
          <label htmlFor="email" className="floating-label">Email</label>
        </div>

        <div className="relative">
          <input id="subject" name="subject" placeholder=" " required className="input peer" />
          <label htmlFor="subject" className="floating-label">Subject</label>
        </div>

        <div className="relative">
          <textarea id="message" name="message" rows={4} placeholder=" " required className="input resize-none peer" />
          <label htmlFor="message" className="floating-label top-4">Message</label>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="rounded-xl bg-white text-black font-semibold px-8 py-3 transition hover:bg-gray-200 active:scale-95">
            Send
          </button>
        </div>
      </motion.form>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex gap-8 mt-12 text-3xl"
      >
        <a href="https://github.com/Adhannnn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
          <FaGithub />
        </a>
        <a href="https://instagram.com/whyramdhn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/wahyuramadhann/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
          <FaLinkedin />
        </a>
      </motion.div>

      <p className="text-gray-500 text-sm mt-16">© 2025 Wahyu Ramadhan</p>

      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 px-6 py-4 rounded-lg shadow-lg text-white animate-slide-in-out ${toast === "success" ? "bg-green-600" : "bg-red-600"}`}>
          {toast === "success" ? "Message sent successfully!" : "Failed to send message."}
        </div>
      )}
    </motion.section>
  );
}
