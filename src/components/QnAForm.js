// src/components/QnAForm.js
import React, { useState } from 'react';

const QnAForm = ({ addQuestion }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      addQuestion(question);
      setQuestion(''); // Clear the input
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your question here..."
        rows="3"
        style={{ width: '100%', padding: '10px' }}
      />
      <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
    </form>
  );
};

export default QnAForm;
