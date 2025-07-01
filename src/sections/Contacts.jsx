import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-screen bg-black text-white overflow-hidden"
        >

            <div className="">

            </div>
            
        </motion.section>
    );
}