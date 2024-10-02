import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaWhatsapp, FaYoutube, FaTelegram } from 'react-icons/fa';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #cce5ff, #b3e0ff);
  font-family: Arial, sans-serif;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const LoginBox = styled.div`
  background-color: white;
  padding: 50px;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 100%;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }

  h2 {
    color: #3b5998;
    margin-bottom: 25px;
    font-size: clamp(22px, 5vw, 28px);
  }

  p {
    margin-bottom: 20px;
    color: #555;
    font-size: clamp(14px, 4vw, 16px);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  margin: 12px 0;
  border: 2px solid #3b5998;
  border-radius: 6px;
  font-size: clamp(14px, 3.5vw, 16px);
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #6c757d;
    outline: none;
    box-shadow: 0 0 8px rgba(108, 117, 125, 0.5);
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #3b5998;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: clamp(14px, 4vw, 16px);
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #4a76b8;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const FooterLinks = styled.div`
  margin-top: 25px;
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
  background-color: #3b5998;
  border-radius: 50%;
  color: white;
  font-size: 24px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #4a76b8;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

const ToggleButton = styled.button`
  margin-top: 20px;
  background: none;
  border: none;
  color: #3b5998;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
  transition: color 0.3s;

  &:hover {
    color: #4a76b8;
  }
`;

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState(''); // For sign-up
  const [confirmPassword, setConfirmPassword] = useState(''); // For sign-up
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Handle login
      onLogin();
      navigate('/about');
    } else {
      // Handle sign-up
      if (password === confirmPassword) {
        console.log('User signed up:', { name, email, password });
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setName('');
        onLogin();
        navigate('/about');
      } else {
        alert("Passwords don't match!");
      }
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
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <Input
              type="text"
              placeholder="Name"
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
        <FooterLinks>
          <IconLink href="https://chat.whatsapp.com/Lu2cpuqmUMgFoykwi85Scb" target="_blank">
            <FaWhatsapp />
          </IconLink>
          <IconLink href="https://www.youtube.com/@RadiantNeuron-YouTube" target="_blank">
            <FaYoutube />
          </IconLink>
          <IconLink href="https://telegram.me" target="_blank">
            <FaTelegram />
          </IconLink>
        </FooterLinks>
        <ToggleButton onClick={toggleForm}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </ToggleButton>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
