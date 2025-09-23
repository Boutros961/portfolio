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
              Design and development of the Guitar Hero game as part of a school project in computer science.
              </p>
              <ul>
                <li>Smooth 60 fps gameplay</li>
                <li>Combo and high score system</li>
                <li>Simple level editor</li>
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
              Design and development of Colab Agenda as part of a school project in computer science.
              </p>
              <ul>
                <li>Collaborative calendar sharing</li>
                <li>Real-time notifications</li>
                <li>Multi-user synchronization</li>
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
              Collaborative application for managing household and grocery stocks.
              </p>
              <ul>
                <li>Real-time shared shopping list</li>
                <li>Expiration date tracking with alerts</li>
                <li>User profiles and multi-household management</li>
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
