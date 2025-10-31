function Projects() {
  
  const projects = [
    {
      name: "Portfolio Website",
      link: "https://my-portfolio2112.netlify.app/",
      image: "/Portfolio.jpg",
    },
    {
      name: "BMI Calculator",
      link: "https://github.com/username/ecommerce",
      image: "/Diet-bro.svg",
    },
    {
      name: "Data Filter",
      link: "https://comfy-kheer-b3c6b2.netlify.app/",
      image: "https://via.placeholder.com/300x180.png?text=E-Commerce",
    },
    {
      name: "E-Commerce App",
      link: "https://github.com/username/ecommerce",
      image: "https://via.placeholder.com/300x180.png?text=E-Commerce",
    },
    {
      name: "E-Commerce App",
      link: "https://github.com/username/ecommerce",
      image: "https://via.placeholder.com/300x180.png?text=E-Commerce",
    },
    {
      name: "E-Commerce App",
      link: "https://github.com/username/ecommerce",
      image: "https://via.placeholder.com/300x180.png?text=E-Commerce",
    },

  ];

  const styles = {
    container: {
      padding: "56px 72px",
      background: "#232a39",
      borderRadius: "28px",
      margin: "24px",
      color: "#fff",
      display: "flex",
      flexWrap: "wrap",
      gap: "32px",
      justifyContent: "center",
    },
    card: {
      background: "#181e29",
      borderRadius: "16px",
      width: "300px",
      overflow: "hidden",
      boxShadow: "0 0 20px #12f7ff44",
      transition: "transform 0.3s, box-shadow 0.3s",
      cursor: "pointer",
    },
    cardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 0 32px #12f7ff88",
    },
    image: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
    },
    cardContent: {
      padding: "16px",
      textAlign: "center",
    },
    projectName: {
      fontSize: "1.2rem",
      fontWeight: 600,
      marginBottom: "12px",
      color: "#12f7ff",
    },
    linkButton: {
      background: "#12f7ff",
      color: "#181e29",
      padding: "8px 20px",
      borderRadius: "24px",
      textDecoration: "none",
      fontWeight: 600,
      transition: "box-shadow 0.3s",
      display: "inline-block",
    },
  };


  return (
    <section style={styles.container} id="projects">
      {projects.map((project, index) => (
        <div
          key={index}
        >
          <img src={project.image} alt={project.name} style={styles.image} />
          <div style={styles.cardContent}>
            <div style={styles.projectName}>{project.name}</div>
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              style={styles.linkButton}
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
