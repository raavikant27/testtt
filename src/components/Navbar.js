import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #00796b;
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <NavbarContainer>
      <h1>My Website</h1>
      <NavLinks>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        {isAuthenticated && (
          <>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
            <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
            <Link to="/qna" style={{ color: 'white', textDecoration: 'none' }}>Q&A</Link>
            <Link to="/upload" style={{ color: 'white', textDecoration: 'none' }}>Upload</Link>
          </>
        )}
      </NavLinks>
      <div>
        {isAuthenticated ? (
          <button onClick={onLogout} style={{ background: 'none', color: 'white', border: 'none', cursor: 'pointer' }}>
            Logout
          </button>
        ) : (
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
        )}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
