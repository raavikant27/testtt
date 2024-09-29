import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #003c71;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
  border-top: 3px solid #3498db;
  border-radius: 5px;

  @media (max-width: 600px) {
    font-size: 12px;
    padding: 15px;
  }
`;

const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 10px;
  color: white;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 0 0 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    padding: 8px;
    border-radius: 5px;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Title>RadiantNeuron</Title>
        <Description>Stay connected and get the latest updates on tech and career opportunities!</Description>
        <SocialLinks>
          <a href="https://www.youtube.com/c/YourChannel" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://twitter.com/YourTwitter" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.linkedin.com/in/YourLinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/YourGitHub" target="_blank" rel="noopener noreferrer">GitHub</a>
        </SocialLinks>
      </FooterContent>
      <FooterBottom>
        <p>&copy; {new Date().getFullYear()} RadiantNeuron. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
