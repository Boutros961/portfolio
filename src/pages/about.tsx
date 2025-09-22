import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function About() {
  const navigate = useNavigate();
  const sections = ["home", "about", "projects", "contact"] as const;

  const timeline = [
      {
        date: "2025",
        title: "Spexal (Liban)",
        desc: " Worker internship – Specialized in robotic automation for the automotive industry.",
      },
      {
        date: "2025",
        title: "Spie Building & Solutions (Paris)",
        desc: " Worker internship –  Cost estimation and project monitoring in electrical engineering",
      },
      {
        date: "2024",
        title: "University of Technology Sydney",
        desc: " First year of engineering school – IA, IoT, Innovation & Engineering Projects",
      },
      {
        date: "2024",
        title: "Thales (Élancourt)",
        desc: " Worker internship – Image annotation for artificial intelligence (Machine Learning)",
      },
      {
        date: "2024",
        title: "Banque SBA (Paris)",
        desc: " Observation internship –  Investment and international trade banking",
      },
      {
        date: "2022 – Present",
        title: "ECE Paris",
        desc: "Foundation Year in Engineering – Mathematics, Physics, Electronics, Computer Science, and English",
      },
    ];
    
  

  return (
    <main className="page home">
      <section id="about" className="hero section section--about">
        <Header active="about" />

        <div className="about__container">
          {/* <div className="cloud-bubble">
  <p>What I enjoy in cybersecurity is not just protecting systems, but understanding how they break and how to make them stronger.</p>
</div> */}
<h1 className="cyber-stats">A cyberattack occurs every 39 seconds ⏱️</h1>


          {/* Timeline serpentine */}
          <div className="timelineSnake">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`timelineSnake__item ${
                  index % 2 === 0 ? "right" : "left"
                }`}
              >
                <div className="timelineSnake__content">
                  <span className="timelineSnake__date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dots navigation */}
      <aside className="dotsNav" aria-label="Sections">
        {sections.map((id) => (
          <button
            key={id}
            className={`dot ${id === "about" ? "is-active" : ""}`}
            aria-label={id}
            aria-current={id === "about" ? "true" : undefined}
            onClick={() => navigate(id === "home" ? "/" : `/${id}`)}
          />
        ))}
      </aside>

      <Footer />
    </main>
  );
}
