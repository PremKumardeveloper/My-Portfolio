import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  const [active, setActive] = useState("web");

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
      marginBottom: "",
    },
    subtitle: {
      fontSize: "1rem",
      color: "#ccc",
      marginBottom: "3rem",
    },
    cardsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
      flexWrap: "wrap",
      marginBottom: "4rem",
    },
    card: (isActive) => ({
      backgroundColor: isActive ? "#00f5d4" : "#64dfdf",
      color: "#000",
      padding: "1.5rem 2rem",
      borderRadius: "12px",
      width: "250px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      transition: "transform 0.3s ease, background-color 0.3s ease",
      cursor: "pointer",
      transform: isActive ? "translateY(-10px)" : "translateY(0)",
      fontWeight: isActive ? "600" : "normal",
    }),
    iconContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "3rem",
      flexWrap: "wrap",
    },
    skill: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
    },
    iconCircle: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "3rem",
      color: "white",
      boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
    },
    html: { backgroundColor: "#E44D26" },
    css: { backgroundColor: "#1572B6" },
    js: { backgroundColor: "#F7DF1E", color: "#000" },
    react: { backgroundColor: "#61DBFB", color: "#000" },
    node: { backgroundColor: "#68A063" },
    express: { backgroundColor: "#333" },
    mongo: { backgroundColor: "#4DB33D" },
    label: {
      fontSize: "1.2rem",
      fontWeight: "600",
      letterSpacing: "1px",
    },
  };

  const webSkills = [
    { icon: <FaHtml5 />, label: "HTML", style: styles.html },
    { icon: <FaCss3Alt />, label: "CSS", style: styles.css },
    { icon: <IoLogoJavascript />, label: "JS", style: styles.js },
    { icon: <FaReact />, label: "REACT", style: styles.react },
  ];

  const appSkills = [
    { icon: <FaNodeJs />, label: "Node JS", style: styles.node },
    { icon: <SiExpress />, label: "Express JS", style: styles.express },
    { icon: <FaDatabase />, label: "MongoDB", style: styles.mongo },
  ];

  const skillsToShow = active === "web" ? webSkills : appSkills;

  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Skills</h1>
      <p style={styles.subtitle}>
        I am striving to never stop learning and improving
      </p>

      {/* Clickable Cards */}
      <div style={styles.cardsContainer}>
        <div style={styles.card(active === "web")} onClick={() => setActive("web")}>
          <h3>front-end Development</h3>
          <p>HTML · CSS · JS · REACT</p>
        </div>
        <div style={styles.card(active === "app")} onClick={() => setActive("app")}>
          <h3>Back-end Development</h3>
          <p>NodeJS · ExpressJS · MongoDB</p>
        </div>
      </div>

      {/* Icons Section */}
      <div style={styles.iconContainer}>
        {skillsToShow.map((skill, index) => (
          <div key={index} style={styles.skill}>
            <div style={{ ...styles.iconCircle, ...skill.style }}>{skill.icon}</div>
            <span style={styles.label}>{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
