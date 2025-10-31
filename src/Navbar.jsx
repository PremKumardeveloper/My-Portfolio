import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css'

function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '36px 52px',
      background: '#232a39',
      borderRadius: '24px 24px 0 0',
      margin: '20px',
    },
    logo: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: '1.5rem',
    },
    navLinks: {
      listStyle: 'none',
      display: 'flex',
      gap: '32px',
      margin: 0,
      padding: 0,
    },
    link: (isHovered) => ({
      textDecoration: 'none',
      color: isHovered ? '#12f7ff' : '#eee',
      fontWeight: 500,
      transition: 'color .2s',
    }),
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Project', path: '/Projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>PremKumar</div>
      <ul style={styles.navLinks}>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              style={styles.link(hoveredLink === index)}
              onMouseEnter={() => setHoveredLink(index)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
