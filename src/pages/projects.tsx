// import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function Projects() {
  const navigate = useNavigate();

  const sections = ["home", "about", "projects", "contact"] as const;

  const skills = [
    "Python",
    "Javascript",
    "HTML",
    "CSS",
    "Langage C",
    "C++",
    "Node.js",
    "Firebase",
    "React Native",
    "Git",
    "MySQL",
    "Linux",
    "Cisco",
    "Windows Server",
    "OS",
    "Cryptography",
  ];

  return (
    <main className="page projects">
      <section id="projects" className="hero section">
        <Header active="projects" />

        <div className="projects__content">
          <div className="projects__list">

            {/* Guitar Hero */}
            <div className="projectCard">
              <h3>Guitar Hero</h3>
              <div className="tags">
                <span className="tag">Langage C</span>
                <span className="tag">Allegro</span>
              </div>
              <p>
                Conception et réalisation du jeu Guitar Hero dans le cadre d’un
                projet scolaire en informatique.
              </p>
              <ul>
                <li>Gameplay fluide 60 fps</li>
                <li>Système de combo et high scores</li>
                <li>Éditeur de niveaux simples</li>
              </ul>
              <hr />
              <div className="projectFooter">
                <a href="#" className="projectLink">
                  Voir le site →
                </a>
                <div className="projectImage">
                  <img src="/guitar_hero.png" alt="Guitar Hero" />
                </div>
              </div>
            </div>

            {/* Colab Agenda */}
            <div className="projectCard">
              <h3>Colab Agenda</h3>
              <div className="tags">
                <span className="tag">Langage C</span>
                <span className="tag">Firebase</span>
              </div>
              <p>
                Conception et réalisation de Colab Agenda dans le cadre d’un
                projet scolaire en informatique.
              </p>
              <ul>
                <li>Partage d’agenda collaboratif</li>
                <li>Notifications en temps réel</li>
                <li>Synchronisation multi-utilisateurs</li>
              </ul>
              <hr />
              <div className="projectFooter">
                <a
                  href="https://colabagenda.vercel.app/"
                  className="projectLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le site →
                </a>
                <div className="projectImage">
                  <img src="/colab_agenda.png" alt="Colab Agenda" />
                </div>
              </div>
            </div>

            {/* Akly App */}
            <div className="projectCard">
              <h3>Akly App</h3>
              <div className="tags">
                <span className="tag">React Native</span>
                <span className="tag">Firebase</span>
              </div>
              <p>
                Application collaborative de gestion des stocks alimentaires et
                ménagers.
              </p>
              <ul>
                <li>Liste de courses partagée en temps réel</li>
                <li>Suivi des dates de péremption avec alertes</li>
                <li>Profils utilisateurs et gestion multi-foyers</li>
              </ul>
              <hr />
              <div className="projectFooter">
                <a href="#" className="projectLink">
                  Voir le site →
                </a>
                <div className="projectImage">
                  <img src="/akly.png" alt="Akly App" />
                </div>
              </div>
            </div>
          </div>

          {/* SKILLS */}
          <div className="skillsPart">
            <h2 className="skills__title">Skills</h2>
            <div className="skills__list">
              {skills.map((skill) => (
                <span key={skill} className="skilltag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dots navigation */}
      <aside className="dotsNav" aria-label="Sections">
        {sections.map((id) => (
          <button
            key={id}
            className={`dot ${id === "projects" ? "is-active" : ""}`}
            aria-label={id}
            aria-current={id === "projects" ? "true" : undefined}
            onClick={() => navigate(id === "home" ? "/" : `/${id}`)}
          />
        ))}
      </aside>

      <Footer />
    </main>
  );
}
