import React from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
return (
   <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center home-page position-relative p-0">

```
  <ParticleBackground />

  <div
    className="row w-100 align-items-center justify-content-center"
    style={{ zIndex: 2 }}
  >
    {/* Left Content */}
    <div className="col-lg-6 col-md-7 col-12 d-flex flex-column align-items-start justify-content-center p-4">
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-glass p-4 rounded-4 shadow-lg"
      >
        <h1
          className="display-4 fw-bold mb-2"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Hi, I'm{" "}
          <span className="text-gradient">Naga Sai Krishna</span>
        </h1>

        <h2
          className="fs-3 fw-semibold mb-3"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Full Stack Developer
        </h2>

        <p className="lead mb-4" style={{ maxWidth: 500 }}>
          Passionate Computer Science graduate skilled in building
          scalable web applications using Java, React, Spring Boot and
          modern development practices. Let's create something amazing
          together.
        </p>

        {/* Contact Button */}
        <div className="d-flex gap-3 mb-4">
          <a
            className="btn btn-lg px-4 shadow-sm contact-btn"
            style={{
              background: "#ff3c3c",
              color: "#fff",
              border: "none",
            }}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="d-flex gap-3 social-links">
          <a
            href="https://www.linkedin.com/in/naga-sai-krishna-jinkala-1baaa1253"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="icon-link"
            style={{
              background: "#ff3c3c",
              color: "#fff",
              borderRadius: "50%",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://github.com/Nagasaikrish"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="icon-link"
            style={{
              background: "#ff3c3c",
              color: "#fff",
              borderRadius: "50%",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaGithub size={28} />
          </a>
        </div>
      </motion.div>
    </div>

    {/* Right Image */}
    <div className="col-lg-5 col-md-5 col-12 d-flex align-items-center justify-content-center p-4">
      
      <motion.div
        className="hero-image bg-glass rounded-4 shadow-lg p-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="WhatsApp Image 2026-03-08 at 4.03.08 PM.jpeg"
          alt="Profile"
          className="img-fluid rounded-4 shadow"
          style={{ maxHeight: 400, objectFit: "cover" }}
        />
      </motion.div>
    </div>
  </div>
</div>
);
}


