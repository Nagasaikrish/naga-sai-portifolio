

import React from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";

export default function Projects() {
  const projects = [
    {
      title: "Blockchain Voting System",
      description: "Developed a secure blockchain-based online voting system ensuring transparency, immutability, and tamper-proof vote records.",
      tech: "Blockchain, Java, Web Technologies"
    },
    {
      title: "Hackathon Management System",
      description: "Built a full-stack web platform for hackathon registration, team creation, project submission and evaluation workflows.",
      tech: "Java, MySQL, Web Development"
    },
    {
      title: "Gesture Based Home Automation",
      description: "Developed an IoT-based smart home automation system controlled via hand gestures using camera sensors, improving accessibility.",
      tech: "IoT, Embedded Systems, Computer Vision"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="container py-5 min-vh-100 d-flex align-items-center justify-content-center projects-page position-relative p-0">
      <ParticleBackground />
      <motion.section
        className="w-100 bg-glass p-5 rounded-4 shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ maxWidth: 950, zIndex: 2 }}
      >
        <motion.h1
          className="display-5 fw-bold mb-4 text-gradient"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h1>
        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-12 col-md-6 col-lg-4"
              variants={itemVariants}
            >
              <div className="card bg-glass border-0 shadow-sm h-100 p-4 project-card">
                <h2 className="fs-4 fw-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{project.title}</h2>
                <p className="mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{project.description}</p>
                <p className="mb-0 text-danger fw-semibold" style={{ marginTop: "15px" }}>
                  Tech: {project.tech}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}