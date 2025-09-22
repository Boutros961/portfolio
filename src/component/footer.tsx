import React from "react";
import "../styles/home.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Texte gauche */}
        <div className="footer__info">
          <p className="footer__text">
            © {new Date().getFullYear()} Pierre Chahine
          </p>
          <p className="footer__tagline">
            “Transforming data into insights, and security into strength.”
          </p>
        </div>

        {/* Liens de navigation */}
        <nav className="footer__nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Réseaux sociaux */}
        <div className="footer__socials">
          <a
            href="https://github.com/Boutros961"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.44c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.86 2.82 1.32 3.51 1.01.11-.78.42-1.32.76-1.63-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.47 11.47 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.85 1.24 1.93 1.24 3.25 0 4.63-2.8 5.66-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/pierre-chahine-73287828b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5h-3.55V9h3.41v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.33zM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .78 0 1.76v20.47C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.76C24 .78 23.21 0 22.23 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
