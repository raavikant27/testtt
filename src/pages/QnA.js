import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const QnAContainer = styled.div`
  padding: 40px;
  max-width: 800px; /* Increased max-width for a larger section */
  margin: 20px auto; /* Added margin for better spacing */
  text-align: center;
  background: #f9f9fb; /* Match the background color from Contact.js */
  border-radius: 12px; /* Rounded corners for consistency */
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1); /* More pronounced shadow */
  font-family: 'Roboto', sans-serif; /* Matching font for consistency */

  @media (max-width: 600px) {
    padding: 20px; /* Reduced padding on smaller screens */
    max-width: 90%; /* Allow container to take more space on small screens */
  }
`;

const Heading = styled.h2`
  font-size: 2.5em; /* Increased heading size */
  margin-bottom: 20px;
  color: #2d3748; /* Heading color from Contact.js */

  @media (max-width: 600px) {
    font-size: 2em; /* Decrease font size on smaller screens */
  }
`;

const QuestionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 15px; /* Increased padding for a more spacious feel */
  font-size: 1.2em; /* Increased font size */
  border: 1px solid #d1d1d1; /* Border color for consistency */
  border-radius: 8px; /* Match the border-radius from Contact.js */
  transition: border-color 0.3s;

  &:focus {
    border-color: #2b6cb0; /* Match the focus color */
    outline: none;
  }

  @media (max-width: 600px) {
    font-size: 1em; /* Decrease font size on smaller screens */
  }
`;

const SubmitButton = styled.button`
  padding: 15px; /* Increased padding for button */
  font-size: 1.2em; /* Increased font size for button */
  background-color: #2b6cb0; /* Button color */
  color: white;
  border: none;
  border-radius: 8px; /* Match the border-radius from Contact.js */
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005b4f; /* Change this to a matching color */
  }

  @media (max-width: 600px) {
    font-size: 1em; /* Decrease font size on smaller screens */
  }
`;

const ThankYouMessage = styled.div`
  margin-top: 30px;
  font-size: 1.5em; /* Increased font size for thank you message */
  color: #38a169; /* Green color for success message */

  @media (max-width: 600px) {
    font-size: 1.2em; /* Decrease font size on smaller screens */
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 40px; /* Increased padding for modal content */
  border-radius: 10px;
  text-align: center;

  @media (max-width: 600px) {
    padding: 20px; /* Reduce padding for mobile devices */
  }
`;

const Spinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const QnA = () => {
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Input validation
    if (!question || !validateEmail(email) || !validatePhone(phone)) {
      alert('Please enter valid details.');
      setLoading(false);
      return;
    }

    // Store the data in localStorage
    const newQuestion = { question, email, phone };
    const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
    storedQuestions.push(newQuestion);
    localStorage.setItem('questions', JSON.stringify(storedQuestions));

    // Clear the form fields
    setQuestion('');
    setEmail('');
    setPhone('');

    // Show the confirmation modal
    setShowModal(true);

    // Close the modal after a few seconds
    setTimeout(() => {
      setShowModal(false);
      setLoading(false);
      setSubmitted(true); // Update the submitted state to show thank you message
    }, 3000);
  };

  return (
    <QnAContainer>
      <Heading>Q&A Section</Heading>
      {!submitted ? (
        <QuestionForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Your Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="tel"
            placeholder="Your Phone Number (10 digits)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <SubmitButton type="submit" disabled={loading}>
            {loading ? <Spinner /> : 'Submit Question'}
          </SubmitButton>
        </QuestionForm>
      ) : (
        <ThankYouMessage>Thanks for connecting!</ThankYouMessage>
      )}

      {showModal && (
        <Modal>
          <ModalContent>
            <h3>Thank You!</h3>
            <p>Your question has been submitted successfully.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </ModalContent>
        </Modal>
      )}
    </QnAContainer>
  );
};

export default QnA;
