import React from "react";
import "../styles/home.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">
          © {new Date().getFullYear()} Pierre Chahine. All rights reserved.
        </p>

        <div className="footer__links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
