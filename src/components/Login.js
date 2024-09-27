import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #a5d6a7, #81c784); 
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    height: auto; /* Allow height to adjust on smaller screens */
    padding: 20px; /* Add padding for smaller screens */
  }
`;

const LoginBox = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 400px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  h2 {
    color: #2e7d32; 
    margin-bottom: 20px;
    text-transform: uppercase; 
    font-weight: bold; 
  }

  p {
    margin-bottom: 20px;
    color: #555; 
  }

  @media (max-width: 768px) {
    width: 90%; /* Make the box width responsive */
    padding: 20px; /* Adjust padding for smaller screens */
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #81c784; 
  border-radius: 6px;
  font-size: 16px;

  &:focus {
    border-color: #388e3c; 
    outline: none;
    box-shadow: 0 0 5px rgba(56, 142, 60, 0.5);
  }

  @media (max-width: 768px) {
    padding: 10px; /* Adjust padding for smaller screens */
    font-size: 14px; /* Smaller font size for smaller screens */
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #2e7d32; 
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #388e3c; 
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 10px; /* Adjust padding for smaller screens */
    font-size: 14px; /* Smaller font size for smaller screens */
  }
`;

const FooterLinks = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;

  a {
    color: #2e7d32; 
    text-decoration: none;
    margin: 0 10px;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #1b5e20; 
    }

    @media (max-width: 768px) {
      margin: 5px; /* Adjust margins for smaller screens */
    }
  }
`;

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)

    // Assuming login is successful, call onLogin and navigate to About page
    onLogin(); // Update authentication state
    navigate('/about'); // Redirect to About page after login
  };

  return (
    <LoginContainer>
      <LoginBox>
        <h2>Welcome to RadiantNeuron</h2>
        <p>Join us to stay updated with job opportunities!</p>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
        </form>
        <FooterLinks>
          <a href="https://chat.whatsapp.com/Lu2cpuqmUMgFoykwi85Scb" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://www.youtube.com/@RadiantNeuron-YouTube" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://t.me/YourTelegramLink" target="_blank" rel="noopener noreferrer">Telegram</a>
        </FooterLinks>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
