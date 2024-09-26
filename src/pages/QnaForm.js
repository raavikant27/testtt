// src/pages/QnaForm.js
import React, { useState } from 'react';

const QnaForm = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      onAddQuestion(question);
      setQuestion(''); // Clear input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ask a Question</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here..."
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default QnaForm; // Ensure this is a default export
