import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";

import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function About() {
  const navigate = useNavigate();
  const sections = ["home", "about", "projects", "contact"] as const;

  return (
    <main className="page home">
      {/* SECTION ABOUT */}
      <section id="about" className="hero section">
        <Header active="about" />

        <div className="hero__container">
          <div className="hero__copy" style={{ gridColumn: "1 / -1" }}>
            <h1 className="title">About</h1>
            <p className="tagline">Ta bio + skills + objectifs…</p>
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
