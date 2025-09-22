// import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/home.css";

type HeaderProps = {
  active: "home" | "about" | "projects" | "contact";
};

const Arrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round"  />
  </svg>
);

export default function Header({ active }: HeaderProps) {
  const items: HeaderProps["active"][] = ["home", "about", "projects", "contact"];

  const label = (id: HeaderProps["active"]) =>
    id.charAt(0).toUpperCase() + id.slice(1);

  return (
    <header className="hero__header">
      <div className="hero__headerGrid">
        <div aria-hidden="true" />
        <nav className="hero__nav">
          {items.map((id) => (
            <NavLink
              key={id}
              to={id === "home" ? "/" : `/${id}`}
              className={({ isActive }) =>
                `navbtn ${isActive || active === id ? "is-current" : ""}`
              }
            >
              <p data-text={label(id)}>{label(id)}</p>
              <Arrow />
            </NavLink>
          ))}
        </nav>

        {/* Réseaux */}
        <div className="hero__socials">
          <a
            href="https://github.com/Boutros961"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="iconBtn"
            title="GitHub"
          >
            <img src="/logo_github.png" alt="" className="iconImg" />
          </a>
          <a
            href="https://www.linkedin.com/in/pierre-chahine-73287828b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="iconBtn"
            title="LinkedIn"
          >
            <img src="/logo_linkedin.png" alt="" className="iconImg" />
          </a>
        </div>
      </div>
    </header>
  );
}
