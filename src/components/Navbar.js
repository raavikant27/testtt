import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #3b5998; /* Facebook blue color */
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
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
      color: #f5f5f5; /* Lighter color on hover */
    }
  }

  .NavLinks {
    display: flex;
    gap: 30px;
  }

  .NavLinks a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
  }

  .NavLinks a:hover {
    background-color: #f5f5f5; /* Light grey background on hover */
    color: #3b5998; /* Darker blue text on hover */
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
      background-color: #c62828; /* Red background on hover */
      color: #fff;
    }
  }
`;

const Navbar = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/'); // Redirect to login page after logout
  };

  return (
    <NavbarContainer>
      <h1 onClick={() => navigate('/')}>RadiantNeuron</h1>
      {isAuthenticated ? (
        <div className="NavLinks">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/qna">Q&A</Link>
          <Link to="/upload">Upload</Link>
          <button
            onClick={handleLogoutClick}
            className="logout-button"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/" style={{ color: 'white', fontSize: '16px' }}>Login</Link>
        </div>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
