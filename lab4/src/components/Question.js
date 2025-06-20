import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';

const Question = () => {
  const { 
    questions, 
    currentQuestion, 
    selectedAnswer, 
    handleAnswerSelect, 
    handleNextQuestion 
  } = useContext(QuizContext);
  
  const question = questions[currentQuestion];

  return (
    <div className="question-container">
      <div className="question-header">
        <h2>Question {currentQuestion + 1}</h2>
        <p className="question-text">{question.question}</p>
      </div>
      
      <div className="answers-container">
        {question.answers.map((answer, index) => (
          <div className="answer-option" key={index}>
            <input
              type="radio"
              id={`answer-${index}`}
              name="answer"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={() => handleAnswerSelect(answer)}
            />
            <label htmlFor={`answer-${index}`}>{answer}</label>
          </div>
        ))}
      </div>
      
      <button 
        className="next-btn"
        onClick={handleNextQuestion}
        disabled={!selectedAnswer}
      >
        Next
      </button>
    </div>
  );
};

export default Question; 