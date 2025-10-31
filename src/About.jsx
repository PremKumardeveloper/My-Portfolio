import React from "react";

const styles = {
  aboutSection: {
    padding: "10px 8px",
    background: "#0d1b2a",
    color: "#fff",
    fontFamily: "'Poppins', sans-serif",
  },

  container: {
    margin: '0 24px 24px 24px',
    background: "rgba(255,255,255,0.05)",
        padding: "10px 8px",

    borderRadius: '0 0 28px 28px',
    boxShadow: '0 0 64px #12f7ff22',
  },

  aboutGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "40px",
    alignItems: "flex-start",
  },

  aboutContent: {
    flex: 1,
  },

  aboutHeading: {
    fontSize: "2.5rem",
    color: "#00f5d4",
    textAlign: "center",
    marginBottom: "20px",
    position: "relative",
  },

  aboutText: {
    fontSize: "17px",
    color: "#e0e0e0",
    lineHeight: "1.7",
    marginBottom: "10px",
    textAlign: "justify",
  },

  interests: {
    marginTop: "25px",
    textAlign: "center",
  },

  interestTag: {
    display: "inline-block",
    margin: "8px",
    background: "rgba(0,245,212,0.15)",
    border: "1px solid #00f5d4",
    padding: "8px 16px",
    borderRadius: "25px",
    fontSize: "14px",
    color: "#00f5d4",
    transition: "0.3s ease",
    cursor: "default",
  },

  aboutDetails: {
    marginTop: "30px",
    padding: "20px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    fontSize: "15px",
    lineHeight: "1.8",
  },

  detailLabel: {
    color: "#00f5d4",
    fontWeight: "600",
    width: "140px",
    display: "inline-block",
  },

  "@media (max-width: 768px)": {
    aboutSection: {
      padding: "60px 16px",
    },
    aboutHeading: {
      fontSize: "2rem",
    },
  },
};

function About() {
  return (
    <section style={styles.aboutSection}>
      <div style={styles.container}>
        <div style={styles.aboutContent}>
          <h2 style={styles.aboutHeading}>About Me</h2>

          <p style={styles.aboutText}>
            Hi, I’m a passionate <strong>MERN Stack Developer</strong> who loves
            building modern, scalable, and user-friendly web applications.  
            I specialize in crafting dynamic frontends with <strong>React.js</strong>,  
            robust backends using <strong>Node.js & Express.js</strong>, and  
            efficient databases powered by <strong>MongoDB</strong>.
          </p>

          <p style={styles.aboutText}>
            My goal is to create clean, responsive, and high-performance
            applications that deliver a seamless user experience.  
            I love solving real-world problems through code and continuously
            learning new tools and technologies in the JavaScript ecosystem.
          </p>

          <div style={styles.interests}>
            {["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JavaScript"].map(
              (tech, index) => (
                <span key={index} style={styles.interestTag}>
                  {tech}
                </span>
              )
            )}
          </div>

          <div style={styles.aboutDetails}>
            <p>
              <span style={styles.detailLabel}>Name:</span> Premkumar R
            </p>
            <p>
              <span style={styles.detailLabel}>Date of Birth:</span> April 21, 2003
            </p>
            <p>
              <span style={styles.detailLabel}>Address:</span> Tiruppur, Tamil Nadu, India
            </p>
            <p>
              <span style={styles.detailLabel}>Zip Code:</span> 641664
            </p>
            <p>
              <span style={styles.detailLabel}>Email:</span> rpremkumar2112@gmail.com
            </p>
            <p>
              <span style={styles.detailLabel}>Phone:</span> +91-85240-73903
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
