// src/components/QnAList.js
import React from 'react';

const QnAList = ({ questions }) => {
  return (
    <div>
      <h2>Questions & Answers</h2>
      {questions.length === 0 ? (
        <p>No questions asked yet.</p>
      ) : (
        questions.map((q, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <p><strong>Q:</strong> {q}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default QnAList;
