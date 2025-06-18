import React from 'react';

function Question({ question, options, onSubmitAnswer, index }) {
  return (
    <div className="question-container">
      <div className="question-number">Question {index + 1}</div>
      <div className="question-text">{question}</div>
      <form onSubmit={e => e.preventDefault()}>
        <div className="options-list">
          {options.map((opt, idx) => (
            <button
              type="button"
              key={idx}
              className="option-btn"
              onClick={() => onSubmitAnswer(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </form>
    </div>
  );
}

export default Question; 