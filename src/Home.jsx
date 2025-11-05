import React, { useEffect, useState } from "react";
import myphoto from "./assets/myphoto.jpg";
import "./App.css";

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    heroSection: {
      display: "flex",
      flexDirection: isMobile ? "column-reverse" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: isMobile ? "center" : "left",
      padding: isMobile ? "32px 24px" : "56px 72px",
      background: "#232a39",
      borderRadius: "0 0 28px 28px",
      margin: "0 16px 24px 16px",
      boxShadow: "0 0 64px #12f7ff22",
      gap: isMobile ? "32px" : "0",
    },
    heroLeft: {
      flex: 1,
    },
    h2: {
      color: "#fff",
      marginBottom: "8px",
      fontSize: isMobile ? "1.1rem" : "1.3rem",
    },
    h1: {
      color: "#fff",
      fontSize: isMobile ? "1.9rem" : "2.7rem",
      fontWeight: "bold",
      margin: "6px 0",
    },
    h3: {
      color: "#fff",
      fontWeight: 500,
      marginBottom: "16px",
      fontSize: isMobile ? "1.1rem" : "1.3rem",
    },
    highlight: {
      color: "#12f7ff",
      fontWeight: 700,
    },
    paragraph: {
      color: "#ccc",
      marginBottom: "18px",
      maxWidth: isMobile ? "100%" : "415px",
      lineHeight: "1.6",
      fontSize: isMobile ? "0.95rem" : "1rem",
    },
    heroRight: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
    },
    hexagonBg: {
      padding: isMobile ? "10px" : "18px",
      background:
        "linear-gradient(135deg, #12f7ff 60%, #181e29 100%)",
      clipPath:
        "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: isMobile ? "200px" : "310px",
      minHeight: isMobile ? "220px" : "354px",
      boxShadow: "0 0 32px #12f7ff99",
    },
    profileImg: {
      clipPath:
        "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
      width: isMobile ? "180px" : "280px",
      objectFit: "cover",
      objectPosition: "center",
    },
  };

  return (
    <section style={styles.heroSection} id="home">
      <div style={styles.heroLeft}>
        <h2 style={styles.h2}>Hello, It's Me</h2>
        <h1 style={styles.h1}>Premkumar R</h1>
        <h3 style={styles.h3}>
          And I'm a <span style={styles.highlight}>MERN Stack Developer</span>
        </h3>
        <p style={styles.paragraph}>
          A MERN Stack Developer specializes in building dynamic and responsive web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in both front-end and back-end development, they focus on delivering efficient, scalable, and user-friendly digital solutions with clean and maintainable code.
        </p>
      </div>

      <div style={styles.heroRight}>
        <div style={styles.hexagonBg}>
          <img src={myphoto} alt="Profile" style={styles.profileImg} />
        </div>
      </div>
    </section>
  );
}

export default Home;
