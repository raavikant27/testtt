// src/pages/About.js
import React from 'react';
import ravikantImage from '../assets/ravikant.jpg';
import mansiImage from '../assets/mansi.jpg';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Us</h1>
      <div style={styles.profileContainer}>
        <div style={styles.profileCard}>
          <img src={ravikantImage} alt="Ravikant" style={styles.image} />
          <h2 style={styles.name}>Ravikant Singh</h2>
          <p style={styles.bio}>
            A passionate developer and tech enthusiast with a knack for solving complex problems and creating innovative solutions.
          </p>
        </div>
        <div style={styles.profileCard}>
          <img src={mansiImage} alt="Mansi" style={styles.image} />
          <h2 style={styles.name}>Mansi Tomar</h2>
          <p style={styles.bio}>
            A creative designer dedicated to crafting beautiful and user-friendly interfaces that enhance the user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#e9f7fa', // Light blue background
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '20px auto',
    maxWidth: '800px',
  },
  title: {
    fontSize: '3em',
    marginBottom: '30px',
    color: '#00796b', // Teal color for title
    fontWeight: 'bold',
  },
  profileContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  profileCard: {
    backgroundColor: '#ffffff', // White background for profile cards
    borderRadius: '10px',
    padding: '20px',
    width: '280px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.2s',
    margin: '10px',
    border: '2px solid #00796b', // Teal border around profile cards
  },
  image: {
    width: '100%',
    borderRadius: '10px',
    height: '200px',
    objectFit: 'cover',
    border: '3px solid #00796b', // Teal border around images
  },
  name: {
    fontSize: '1.8em',
    margin: '15px 0 10px 0',
    color: '#004d40', // Darker teal for name
  },
  bio: {
    color: '#555555', // Dark gray for bio text
    lineHeight: '1.5',
  },
};

export default About;
