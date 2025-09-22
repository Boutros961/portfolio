"use client";
import React, { useState } from "react";
import Header from "../component/header";
import Footer from "../component/footer";

import { useNavigate } from "react-router-dom";
import "../styles/home.css";

export default function Contact() {
  const navigate = useNavigate();
  const sections = ["home", "about", "projects", "contact"] as const;

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const buildGmailUrl = () => {
    const params = new URLSearchParams({
      to: "pierrechahine2@gmail.com",
      su: `Message from ${form.name || "your website"}`,
      body: `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    });
    return `https://mail.google.com/mail/?view=cm&fs=1&${params.toString()}`;
  };

  const openGmail = () => {
    const url = buildGmailUrl();
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = url;
  };

  return (
    <main className="page home">
      <section id="contact" className="hero section">
        <Header active="contact" />

        <div className="hero__container">
          <div className="hero__copy" style={{ gridColumn: "1 / -1" }}>
          <div className="contact__header">
            <h1 className="contact__title">Send me a message !</h1>
            <p className="contact__subtitle">
              Got a question or proposal, or just want to say hello?
            </p>
          </div>


            <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
              <div className="contact__row">
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  placeholder="Hello, how are you?"
                  onChange={onChange}
                  required
                />
              </div>

              <div className="contact__actions">
                <button type="button" className="btn" onClick={openGmail}>
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Dots navigation */}
      <aside className="dotsNav" aria-label="Sections">
        {sections.map((id) => (
          <button
            key={id}
            className={`dot ${id === "contact" ? "is-active" : ""}`}
            aria-label={id}
            aria-current={id === "contact" ? "true" : undefined}
            onClick={() => navigate(id === "home" ? "/" : `/${id}`)}
          />
        ))}
      </aside>
      <Footer />

    </main>
  );
}
