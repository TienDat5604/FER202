import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import './Question.css';

function Question({ question, options, selectedAnswer, onSelectAnswer }) {
  return (
    <div className="question-container">
      <h5 className="question-text mb-4">{question}</h5>
      <div className="options-container">
        {options.map((option, index) => (
          <Form.Check
            key={index}
            type="radio"
            id={`question-option-${index}`}
            label={option}
            checked={selectedAnswer === option}
            onChange={() => onSelectAnswer(option)}
            className={`option-item ${selectedAnswer === option ? 'selected' : ''}`}
            name="question-options"
          />
        ))}
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedAnswer: PropTypes.string,
  onSelectAnswer: PropTypes.func.isRequired
};

export default Question; 