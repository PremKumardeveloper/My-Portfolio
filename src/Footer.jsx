import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const styles = {
    footer: {
      background: '#232a39',
      color: '#ccc',
      textAlign: 'center',
      padding: '24px 0',
      borderRadius: '28px',
      margin: '0 24px 24px 24px',
      boxShadow: '0 0 32px #12f7ff22',
    },
    name: {
      color: '#12f7ff',
      fontWeight: 600,
    },
    social: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginTop: '12px',
      marginBottom: '8px',
    },
    icon: {
      color: '#12f7ff',
      fontSize: '1.8rem',
      transition: 'color .2s, transform .2s',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.social}>
        <a
          href="https://github.com/PremKumardeveloper"
          target="_blank"
          rel="noreferrer"
          style={styles.icon}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/prem-kumar-r-914598251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noreferrer"
          style={styles.icon}
        >
          <FaLinkedin />
        </a>
      </div>
      <p>
        © 2025 <span style={styles.name}>PremKumar</span>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
