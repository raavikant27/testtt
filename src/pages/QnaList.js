// src/pages/QnaList.js
import React from 'react';

const QnaList = ({ questions }) => {
  return (
    <div>
      <h2>Questions</h2>
      <ul>
        {questions.length > 0 ? (
          questions.map((question, index) => (
            <li key={index}>{question}</li>
          ))
        ) : (
          <li>No questions available.</li>
        )}
      </ul>
    </div>
  );
};

export default QnaList; // Ensure this is a default export
