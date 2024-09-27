// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import About from './pages/About';
import Contact from './pages/Contact';
import QnA from './pages/QnA';
import UploadVideo from './pages/UploadVideo';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div>
        <Navbar onLogout={handleLogout} isAuthenticated={isLoggedIn} />
        <Routes>
          {!isLoggedIn ? (
            <Route path="/" element={<Login onLogin={handleLogin} />} /> // Pass handleLogin to Login component
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/qna" element={<QnA />} />
              <Route path="/upload" element={<UploadVideo />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
