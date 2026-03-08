
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import ParticleBackground from "../components/ParticleBackground";

export default function Contact() {
  const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: "nagasaikrishnajinkala@gmail.com", link: "mailto:nagasaikrishnajinkala@gmail.com" },
    { icon: FaPhone, label: "Phone", value: "9502814720", link: "tel:9502814720" },
    { icon: FaMapMarkerAlt, label: "Location", value: "India", link: "#" }
  ];

  return (
    <div className="container py-5 min-vh-100 d-flex align-items-center justify-content-center contact-page position-relative p-0">
      <ParticleBackground />
      <motion.section
        className="w-100 bg-glass p-5 rounded-4 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: 700, zIndex: 2 }}
      >
        <h1 className="display-5 fw-bold mb-4 text-gradient" style={{ fontFamily: 'Playfair Display, serif' }}>Get In Touch</h1>
        <div className="mb-4">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="d-flex align-items-center gap-3 mb-3"
              >
                <Icon style={{ fontSize: "24px", color: "#ff3c3c", minWidth: "30px" }} />
                <div>
                  <p className="mb-1 text-secondary small fw-semibold">{info.label}</p>
                  <a
                    href={info.link}
                    className="fw-semibold fs-6 text-decoration-none"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      color: 'var(--contact-value-color, #f1f1f1)'
                    }}
                  >
                    {info.value}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4"
        >
          <p className="text-secondary fs-6 mb-3">
            Feel free to reach out. I'm always happy to discuss new projects and opportunities.
          </p>
          <div className="d-flex gap-3">
            <a
              href="https://www.linkedin.com/in/naga-sai-krishna-jinkala-1baaa1253"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-danger d-flex align-items-center gap-2 px-4"
              style={{ fontWeight: 600 }}
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/Nagasaikrish"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark d-flex align-items-center gap-2 px-4"
              style={{ fontWeight: 600 }}
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}