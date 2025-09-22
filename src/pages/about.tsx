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
        desc: "Stage ouvrier – Automatisation de robots pour l’industrie automobile",
      },
      {
        date: "2025",
        title: "Spie Building & Solutions (Paris)",
        desc: "Stage ouvrier – Chiffrage et suivi de projets en électricité",
      },
      {
        date: "2024",
        title: "University of Technology Sydney",
        desc: "Semestre à l’étranger – IA, IoT, Innovation & Ingénierie",
      },
      {
        date: "2024",
        title: "Thales (Élancourt)",
        desc: "Stage ouvrier – Annotation d’images pour un projet d’IA",
      },
      {
        date: "2024",
        title: "Banque SBA (Paris)",
        desc: "Stage d’observation – Salle des marchés, conformité, juridique",
      },
      {
        date: "2022 – présent",
        title: "ECE Paris",
        desc: "Prépa intégrée ingénieur – Maths, Physique, Informatique, Anglais",
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
