import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Get In Touch</h1>
      <p style={styles.description}>
        We're always excited to hear from our viewers at RadiantNeuron! Reach out to us with any questions, suggestions, or collaborations.
      </p>

      <div style={styles.wrapper}>
        <div style={styles.infoSection}>
          <h2 style={styles.subHeading}>Contact Information</h2>
          <p><FaEnvelope style={styles.icon} /> contact@radiantneuron.com</p>
          <p><FaPhoneAlt style={styles.icon} /> +91 9876543210</p>
          <p><FaMapMarkerAlt style={styles.icon} /> Noida, Uttar Pradesh, India</p>

          <h2 style={styles.subHeading}>Follow Us</h2>
          <div style={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}><FaInstagram /></a>
          </div>
        </div>

        <div style={styles.formSection}>
          <h2 style={styles.subHeading}>Send Us a Message</h2>
          {submitted ? (
            <p style={styles.successMessage}>Thank you! We will get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                style={styles.textarea}
              />
              <button type="submit" style={styles.button}>Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '60px 20px',
    backgroundColor: '#f9f9fb',
    borderRadius: '12px',
    fontFamily: "'Roboto', sans-serif",
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.8rem',
    color: '#2d3748',
    marginBottom: '30px',
    fontWeight: '600',
  },
  description: {
    textAlign: 'center',
    fontSize: '1.25rem',
    color: '#4a5568',
    marginBottom: '50px',
    lineHeight: '1.6',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '30px',
    flexWrap: 'wrap',
  },
  infoSection: {
    flex: '1',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
    minHeight: '450px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    maxWidth: '450px', // Limit the max width for mobile responsiveness
  },
  formSection: {
    flex: '1',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
    minHeight: '450px',
    maxWidth: '450px', // Limit the max width for mobile responsiveness
  },
  subHeading: {
    fontSize: '1.5rem',
    color: '#2d3748',
    marginBottom: '20px',
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: '15px',
    marginBottom: '20px',
    borderRadius: '8px',
    border: '1px solid #d1d1d1',
    fontSize: '1rem',
    color: '#333',
  },
  textarea: {
    width: '100%',
    padding: '15px',
    borderRadius: '8px',
    border: '1px solid #d1d1d1',
    fontSize: '1rem',
    height: '150px',
    marginBottom: '20px',
  },
  button: {
    padding: '12px 25px',
    fontSize: '1.2rem',
    backgroundColor: '#2b6cb0',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  icon: {
    marginRight: '10px',
    color: '#3182ce',
  },
  socialLinks: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
  },
  socialIcon: {
    fontSize: '1.5rem',
    color: '#2b6cb0',
    transition: 'color 0.3s ease',
  },
  successMessage: {
    fontSize: '1.5rem',
    color: '#38a169',
    textAlign: 'center',
  },
};

// Media queries for responsiveness
const mediaQueries = {
  '@media (max-width: 768px)': {
    heading: {
      fontSize: '2.2rem',
    },
    description: {
      fontSize: '1rem',
    },
    wrapper: {
      flexDirection: 'column',
    },
    infoSection: {
      maxWidth: '100%', // Allow full width on mobile
    },
    formSection: {
      maxWidth: '100%', // Allow full width on mobile
    },
  },
};

export default Contact;
