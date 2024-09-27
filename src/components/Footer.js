import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #003c71; /* Darker Blue color */
  color: white;
  padding: 10px 20px; /* Reduced padding for a compact look */
  text-align: center;
  font-size: 12px; /* Consistent font size */
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3); /* Lighter shadow for depth */
  border-top: 3px solid #3498db; /* Distinct border */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s; /* Smooth transition for background color */
  
  &:hover {
    background-color: #00508e; /* Lighter blue on hover */
  }

  @media (max-width: 600px) {
    padding: 8px 15px; /* Further reduced padding for smaller screens */
    font-size: 10px; /* Smaller font size */
  }
`;

const FooterContent = styled.div`
  max-width: 600px; /* Reduced max width for a tighter layout */
  margin: 0 auto;
  padding: 0 10px; /* Adjusted horizontal padding */
`;

const Title = styled.h2`
  margin: 0 0 5px; /* Reduced margin for the title */
  font-size: 18px; /* Reduced title font size */
  font-weight: 600; /* Semi-bold title */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4); /* Enhanced shadow */
  transition: color 0.3s; /* Transition for hover effect */
  
  &:hover {
    color: #3498db; /* Color change on hover */
  }
`;

const Description = styled.p`
  margin: 0 0 10px; /* Reduced spacing for the description */
  font-size: 12px; /* Smaller description font size */
  line-height: 1.5; /* Improved line spacing */
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px; /* Adjusted gap for better spacing */
  margin-bottom: 10px; /* Reduced margin below social links */
  flex-wrap: wrap; /* Allow links to wrap to the next line on smaller screens */

  a {
    color: white;
    text-decoration: none;
    font-weight: 500; /* Font weight */
    padding: 5px; /* Added padding for clickable area */
    border-radius: 4px; /* Rounded corners for links */
    transition: background-color 0.3s, transform 0.3s; /* Transition effects */

    &:hover {
      background-color: rgba(255, 255, 255, 0.2); /* Background color on hover */
      transform: scale(1.05); /* Slightly enlarge on hover */
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 10px; /* Reduced margin for copyright notice */
  font-size: 10px; /* Smaller font size for copyright notice */
  color: rgba(255, 255, 255, 0.7); /* Lighter color for copyright notice */
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
