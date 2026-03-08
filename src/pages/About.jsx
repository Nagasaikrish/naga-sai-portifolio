

import React from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";

export default function About() {
  return (
    <div className="container py-5 min-vh-100 d-flex align-items-center justify-content-center about-page position-relative p-0">
      <ParticleBackground />
      <motion.section
        className="bg-glass p-5 rounded-4 shadow-lg w-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ maxWidth: 800, zIndex: 2 }}
      >
        <h1 className="display-5 fw-bold mb-4 text-gradient" style={{ fontFamily: 'Playfair Display, serif' }}>About Me</h1>
        <motion.p
          className="fs-5 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          I am a Computer Science graduate with a CGPA of 8.5 from KKR & KSR Institute of Technology and Sciences. I am passionate about building scalable and secure web applications using modern technologies.
        </motion.p>
        <motion.p
          className="fs-5 mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          My expertise includes <span className="fw-semibold">Java, React.js, Spring Boot, REST APIs, and MySQL</span>. I enjoy solving complex problems and transforming ideas into impactful software solutions that make a real difference.
        </motion.p>
        <motion.p
          className="fs-5 mb-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          I have worked on multiple projects including blockchain-based voting systems, IoT home automation, and full-stack event management platforms. I'm always excited to learn new technologies and collaborate with talented teams to create innovative solutions.
        </motion.p>
      </motion.section>
    </div>
  );
}