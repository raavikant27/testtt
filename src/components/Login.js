import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaWhatsapp, FaYoutube, FaTelegram } from 'react-icons/fa';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #cce5ff, #b3e0ff);
  font-family: Arial, sans-serif;
`;

const LoginBox = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  width: 400px;
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.02);
  }

  h2 {
    color: #3b5998;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 28px; /* Increased font size */
  }

  p {
    margin-bottom: 20px;
    color: #555;
    font-size: 14px; /* Increased font size */
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 2px solid #3b5998; /* Darker border color */
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #6c757d; /* Grey border on focus */
    outline: none;
    box-shadow: 0 0 5px rgba(108, 117, 125, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #3b5998; /* Darker blue color */
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #4a76b8; /* Lighter blue on hover */
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const FooterLinks = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #3b5998; /* Darker blue for icons */
  border-radius: 50%;
  color: white;
  font-size: 24px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4a76b8; /* Lighter blue on hover */
  }
`;

const ToggleText = styled.p`
  margin-top: 20px;
  color: #3b5998;
  cursor: pointer;
  font-weight: bold;
  text-decoration: underline;
  transition: color 0.3s;

  &:hover {
    color: #2c3e50; /* Darker shade on hover */
  }
`;

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
  const [name, setName] = useState(''); // For signup
  const [confirmPassword, setConfirmPassword] = useState(''); // For signup
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    onLogin();
    navigate('/about');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    // Add your sign-up logic here (e.g., API call)
    if (password === confirmPassword) {
      onLogin();
      navigate('/about');
    } else {
      alert("Passwords do not match!");
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <LoginContainer>
      <LoginBox>
        <h2>{isLogin ? 'Login to RadiantNeuron' : 'Sign Up for RadiantNeuron'}</h2>
        <p>{isLogin ? 'Join us to stay updated with job opportunities!' : 'Create an account to stay updated!'}</p>
        <form onSubmit={isLogin ? handleLogin : handleSignup}>
          {!isLogin && (
            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
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
          {!isLogin && (
            <Input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          <Button type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>
        </form>
        <ToggleText onClick={toggleForm}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </ToggleText>
        <FooterLinks>
          <IconLink href="https://chat.whatsapp.com/Lu2cpuqmUMgFoykwi85Scb" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </IconLink>
          <IconLink href="https://www.youtube.com/@RadiantNeuron-YouTube" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </IconLink>
          <IconLink href="https://telegram.me" target="_blank" rel="noopener noreferrer">
            <FaTelegram />
          </IconLink>
        </FooterLinks>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
