import { Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 32px',
      background: '#232a39',
      borderRadius: '24px 24px 0 0',
      margin: '20px',
      position: 'relative',
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
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '24px',
      height: '18px',
      cursor: 'pointer',
    },
    bar: {
      height: '3px',
      width: '100%',
      background: '#fff',
      borderRadius: '2px',
    },
    mobileMenu: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: '#181e29',
      borderRadius: '0 0 16px 16px',
      boxShadow: '0 4px 16px #12f7ff22',
      listStyle: 'none',
      padding: '12px 0',
      margin: 0,
      display: isMenuOpen ? 'flex' : 'none',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      zIndex: 10,
    },
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

      {/* Desktop Menu */}
      <ul className="nav-links" style={styles.navLinks}>
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

      {/* Hamburger Icon */}
      <div
        className="hamburger"
        style={styles.hamburger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span style={styles.bar}></span>
        <span style={styles.bar}></span>
        <span style={styles.bar}></span>
      </div>

      {/* Mobile Dropdown */}
      <ul style={styles.mobileMenu}>
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              style={styles.link(false)}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Responsive Styling */}
      <style>
        {`
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }
      `}
      </style>
    </nav>
  );
}

export default Navbar;
