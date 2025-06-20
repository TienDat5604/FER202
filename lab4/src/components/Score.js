import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';

const Score = () => {
  const { score, questions, resetQuiz } = useContext(QuizContext);

  return (
    <div className="score-container">
      <h1>Quiz Completed!</h1>
      <p className="score-text">Your score: {score}</p>
      <p>Out of {questions.length} questions</p>
      <button className="reset-btn" onClick={resetQuiz}>Try Again</button>
    </div>
  );
};

export default Score; 