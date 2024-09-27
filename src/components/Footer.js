import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #4e7d36; /* Mehndi Green color */
  color: white;
  padding: 30px 0; /* Increased padding for a more spacious look */
  text-align: center;
  font-size: 14px; /* Font size */
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3); /* Enhanced shadow for depth */
  @media (max-width: 600px) {
    padding: 20px 0; /* Adjust padding for smaller screens */
    font-size: 12px; /* Adjust font size for smaller screens */
  }
`;

const FooterContent = styled.div`
  max-width: 900px; /* Increased max width */
  margin: 0 auto;
  padding: 0 15px; /* Adjusted horizontal padding */
`;

const Title = styled.h2`
  margin: 0 0 10px; /* Spacing for the title */
  font-size: 24px; /* Increased title font size */
  font-weight: bold; /* Bolder title */
  @media (max-width: 600px) {
    font-size: 20px; /* Adjust title size for smaller screens */
  }
`;

const Description = styled.p`
  margin: 0 0 15px; /* Spacing for the description */
  font-size: 16px; /* Increased description font size */
  @media (max-width: 600px) {
    font-size: 14px; /* Adjust description size for smaller screens */
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px; /* Increased gap for better spacing */
  margin-bottom: 15px; /* Margin below social links */
  flex-wrap: wrap; /* Allow links to wrap to the next line on smaller screens */

  a {
    color: white;
    text-decoration: none;
    font-weight: 500; /* Font weight */
    transition: color 0.3s, transform 0.3s; /* Added transform for hover effect */
    
    &:hover {
      color: #3498db; /* Hover color */
      transform: scale(1.1); /* Scale effect on hover */
      text-decoration: underline; /* Underline on hover */
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 20px; /* Increased margin for copyright notice */
  font-size: 12px; /* Font size for copyright notice */
  @media (max-width: 600px) {
    font-size: 10px; /* Adjust font size for smaller screens */
  }
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
