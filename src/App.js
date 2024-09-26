// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import UploadVideo from './pages/UploadVideo';
import About from './pages/About';
import Contact from './pages/Contact';
import QnA from './pages/QnA'; // Import the QnA page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadVideo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/qna" element={<QnA />} /> {/* Add route for QnA */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
