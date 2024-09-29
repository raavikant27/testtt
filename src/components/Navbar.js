import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #3b5998; 
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s;

  h1 {
    margin: 0;
    font-size: 30px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
      color: #f5f5f5;
    }
  }

  .NavLinks {
    display: flex;
    gap: 30px;
    align-items: center;

    @media (max-width: 768px) {
      display: none; /* Hide links initially on mobile */
    }
  }

  .NavLinks a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #f5f5f5;
      color: #3b5998;
    }
    
    &.active {
      background-color: #f5f5f5; /* Active link highlight */
      color: #3b5998;
    }
  }

  .logout-button {
    background: none;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #c62828;
      color: #fff;
    }
  }

  .hamburger {
    display: none;
    font-size: 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #f5f5f5;
    }
  }

  @media (max-width: 768px) {
    .NavLinks {
      display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
      flex-direction: column;
      position: absolute;
      top: 60px;
      right: 0;
      background-color: #3b5998;
      width: 100%;
      padding: 20px;
      gap: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      transition: max-height 0.3s ease-in-out;
    }

    .hamburger {
      display: block;
    }
  }
`;

const Navbar = ({ isAuthenticated, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/'); // Redirect to login page after logout
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer isOpen={isOpen}>
      <h1 onClick={() => navigate('/')}>RadiantNeuron</h1>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className="NavLinks">
        {isAuthenticated ? (
          <>
            <Link to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Contact</Link>
            <Link to="/qna" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Q&A</Link>
            <Link to="/upload" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>Upload</Link>
            <button onClick={handleLogoutClick} className="logout-button">Logout</button>
          </>
        ) : (
          <Link to="/" style={{ color: 'white', fontSize: '16px' }}>Login</Link>
        )}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
