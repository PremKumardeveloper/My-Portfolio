import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  

  const handleSubmit = () => {
   
    alert("Message Sent Successfully!");
    
  };

  const styles = {
    container: {
      backgroundColor: "#232a39",
      color: "white",
      textAlign: "center",
      padding: "10px 8px",
      borderRadius: '0 0 28px 28px',
      margin: '0 24px 24px 24px',
      fontFamily: "Poppins, sans-serif",
      boxShadow: '0 0 64px #12f7ff22',
    },
    title: {
      fontSize: "2.5rem",
      color: "#00f5d4",
      marginBottom: "0.5rem",
    },
    subtitle: {
      fontSize: "1rem",
      color: "#aaa",
      marginBottom: "3rem",
    },
    bigButton: {
      display: "inline-block",
      border: "2px solid #00f5d4",
      padding: "1rem 2rem",
      borderRadius: "12px",
      fontSize: "1.2rem",
      color: "#00f5d4",
      backgroundColor: "transparent",
      cursor: "pointer",
      marginBottom: "3rem",
      transition: "0.3s",
    },
    bigButtonHover: {
      backgroundColor: "#00f5d4",
      color: "#000",
    },
    form: {
      maxWidth: "700px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "2rem",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
    },
    label: {
      color: "#00f5d4",
      fontSize: "0.9rem",
      marginBottom: "0.3rem",
    },
    input: {
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "1px solid #00f5d4",
      padding: "0.6rem",
      color: "#fff",
      outline: "none",
      fontSize: "1rem",
    },
    textarea: {
      gridColumn: "span 2",
      backgroundColor: "transparent",
      border: "none",
      borderBottom: "1px solid #00f5d4",
      padding: "0.6rem",
      color: "#fff",
      outline: "none",
      fontSize: "1rem",
      resize: "none",
      height: "100px",
    },
    sendBtn: {
      gridColumn: "span 2",
      marginTop: "2rem",
      backgroundColor: "#00f5d4",
      color: "#000",
      padding: "0.9rem 1.5rem",
      borderRadius: "50px",
      fontSize: "1rem",
      border: "none",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      transition: "0.3s",
    },
    sendBtnHover: {
      backgroundColor: "#05c2a9",
    },
  };

  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Contact</h1>
      <p style={styles.subtitle}>I’m currently available for freelance work</p>

      <button
        style={styles.bigButton}
      >
        Send Me A Message
      </button>

      <form style={styles.form} action="https://formspree.io/f/myzbnobr" method="POST" onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Your name*</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            style={styles.input}
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Your email*</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            style={styles.input}
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Your message*</label>
          <textarea
            name="message"
            placeholder="Enter your needs"
            style={styles.textarea}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          style={styles.sendBtn}
        >
          Send Message <FaPaperPlane />
        </button>
      </form>
    </section>
  );
};

export default Contact;
