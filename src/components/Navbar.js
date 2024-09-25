import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  background-color: #00796b;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const Logo = styled.div`
  font-size: 2em;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 70px; /* Adjust logo size */
    height: auto;
    margin-right: 10px;
  }
`;

const SubscribeButton = styled.button`
  background-color: #ff4081;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f50057;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #00796b;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease;
  padding: 20px;
  z-index: 1000;
`;

const SidebarLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  display: block;
  margin: 10px 0;
  font-size: 1.2em;

  &:hover {
    color: #e0f7fa;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1.5em;
  color: white;
  margin-top: 20px; /* Add margin for spacing */
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2em;
  cursor: pointer;
  display: block; /* Always show the toggle button */
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2em;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubscribe = () => {
    const subscribeLink = 'https://www.youtube.com/@RadiantNeuron-YouTube';
    alert('You are about to be redirected to subscribe to the channel.'); // Alert message
    window.open(subscribeLink, '_blank');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <Logo onClick={toggleSidebar}>
        <img src="/assets/logo.jpg" alt="Logo" />
      </Logo>

      {/* Always Show These Links on Full Screen */}
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em' }}>Home</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em' }}>About</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '1.1em' }}>Contact</Link>
        <SubscribeButton onClick={handleSubscribe}>Subscribe</SubscribeButton>
      </div>

      <ToggleButton onClick={toggleSidebar}>
        <FaBars />
      </ToggleButton>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>
          <FaTimes />
        </CloseButton>
        <h2>Menu</h2>
        <SidebarLink to="/" onClick={toggleSidebar}>Home</SidebarLink>
        <SidebarLink to="/upload" onClick={toggleSidebar}>Upload Video</SidebarLink>
        <SidebarLink to="/about" onClick={toggleSidebar}>About</SidebarLink>
        <SidebarLink to="/contact" onClick={toggleSidebar}>Contact</SidebarLink>

        {/* Social Icons in Sidebar */}
        <SocialIcons>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </SocialIcons>

        <SubscribeButton onClick={handleSubscribe}>
          Subscribe
        </SubscribeButton>
      </Sidebar>
    </NavbarContainer>
  );
};

export default Navbar;
