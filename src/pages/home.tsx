// import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";

import { useNavigate } from "react-router-dom";
import "../styles/home.css";


export default function Home() {
  const cvHref = encodeURI("/PIERRE CHAHINE - CV (FRANÇAIS).8.pdf");
  const navigate = useNavigate();

  // sections pour les dots
  const sections = ["home", "about", "projects", "contact"] as const;

  return (
    <>
      <main className="page home">
        {/* SECTION HOME */}
        <section id="home" className="hero section">
          <Header active="home" />
  
          <div className="hero__container">
            <div className="hero__image">
              <img src="/faucon.png" alt="White falcon taking flight" />
            </div>
  
            <div className="hero__copy">
              <p className="eyebrow">Hi I’m Pierre</p>
              <h1 className="title">
                Student in Cybersecurity and<br />DATA &amp; AI
              </h1>
              <p className="tagline">
                “Transforming data into insights, and security into strength.”
              </p>
  
              <div className="ctaRow">
                <a href={cvHref} download className="btn">
                  <span>Download CV</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.42L11 12.6V4a1 1 0 0 1 1-1Zm-7 14a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
  
        {/* Dots navigation */}
        <aside className="dotsNav" aria-label="Sections">
          {sections.map((id) => (
            <button
              key={id}
              className={`dot ${id === "home" ? "is-active" : ""}`}
              aria-label={id}
              aria-current={id === "home" ? "true" : undefined}
              onClick={() => navigate(id === "home" ? "/" : `/${id}`)}
            />
          ))}
        </aside>
      </main>
  <Footer />


    </>
  );
  
}
