

import React from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";

export default function Skills() {
  const skills = [
    "Java",
    "JavaScript",
    "React.js",
    "Spring Boot",
    "REST APIs",
    "HTML5",
    "CSS3",
    "MySQL",
    "Python",
    "Git",
    "Blockchain",
    "IoT"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="container py-5 min-vh-100 d-flex align-items-center justify-content-center skills-page position-relative p-0">
      <ParticleBackground />
      <section className="w-100" style={{ maxWidth: 900, zIndex: 2 }}>
        <motion.h1
          className="display-5 fw-bold mb-4 text-gradient"
          style={{ fontFamily: 'Playfair Display, serif' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Technical Skills
        </motion.h1>
        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-6 col-md-4 col-lg-3"
              variants={itemVariants}
            >
              <div className="card bg-glass border-0 shadow-sm text-center py-4 px-2 h-100 skill-card">
                <span className="fw-semibold fs-5" style={{ fontFamily: 'Poppins, sans-serif' }}>{skill}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}