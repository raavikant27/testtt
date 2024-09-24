// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>My YouTube Channel</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/upload" style={styles.link}>Upload Video</Link>
        <Link to="/about" style={styles.link}>About</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#00796b', // Teal background
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  },
  logo: {
    fontSize: '1.8em',
    color: '#ffffff', // White text for logo
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: '#ffffff', // White text for links
    textDecoration: 'none',
    fontSize: '1.2em',
    transition: 'color 0.3s ease, transform 0.3s ease',
  },
  linkHover: {
    color: '#cceff1', // Light teal for link hover
    transform: 'scale(1.1)',
  }
};

export default Navbar;
