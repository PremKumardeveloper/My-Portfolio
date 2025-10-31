import myphoto from './assets/myphoto.jpg';
import './App.css'

const styles = {
  heroSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '56px 72px',
    background: '#232a39',
    borderRadius: '0 0 28px 28px',
    margin: '0 24px 24px 24px',
    boxShadow: '0 0 64px #12f7ff22',
  },
  heroLeft: {
    flex: 1,
  },
  h2: {
    color: '#fff',
    marginBottom: '8px',
    fontSize: '1.3rem',
  },
  h1: {
    color: '#fff',
    fontSize: '2.7rem',
    fontWeight: 'bold',
    margin: '6px 0',
  },
  h3: {
    color: '#fff',
    fontWeight: 500,
    marginBottom: '16px',
  },
  highlight: {
    color: '#12f7ff',
    fontWeight: 700,
  },
  paragraph: {
    color: '#ccc',
    marginBottom: '18px',
    maxWidth: '415px',
    lineHeight: '1.6',
  },
  heroRight: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  hexagonBg: {
    padding: '18px',
    background: 'linear-gradient(135deg, #12f7ff 60%, #181e29 100%)',
    clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '310px',
    minHeight: '354px',
    boxShadow: '0 0 32px #12f7ff99',
  },
  profileImg: {
    clipPath: 'polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)',
    width: '280px',
    objectFit: 'cover',
    objectPosition: 'center',
  },
};

function Home() {
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
