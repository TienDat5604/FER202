import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleShowResults, resetQuiz } from '../redux/slices/quizSlice';
import '../App.css';

const QuizReview = () => {
  const dispatch = useDispatch();
  const { questions, userAnswers } = useSelector((state) => state.quiz);
  
  const handleBackToQuiz = () => {
    dispatch(toggleShowResults());
  };
  
  const handleRetakeQuiz = () => {
    dispatch(resetQuiz());
  };

  // Calculate score
  const score = questions.reduce((total, question, index) => {
    if (userAnswers[index] === question.correctAnswer) {
      return total + 1;
    }
    return total;
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);
  
  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Quiz Review</h1>
      </div>
      <div className="quiz-content">
        <div className="score-summary">
          <h2>Your Score: {score}/{questions.length} ({percentage}%)</h2>
        </div>
        {questions.map((question, index) => (
          <div key={index} className="review-question">
            <h3>Q{index + 1}. {question.question}</h3>
            <div className="review-options">
              {question.options.map((option, optionIndex) => (
                <div 
                  key={optionIndex} 
                  className={`review-option ${
                    userAnswers[index] === option 
                      ? option === question.correctAnswer 
                        ? 'correct' 
                        : 'incorrect' 
                      : option === question.correctAnswer 
                        ? 'correct' 
                        : ''
                  }`}
                >
                  <input 
                    type="radio" 
                    checked={userAnswers[index] === option} 
                    readOnly
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
            <div className="answer-feedback">
              {userAnswers[index] === question.correctAnswer 
                ? <p className="correct-message">Correct!</p> 
                : <p className="incorrect-message">
                    Right answer is: {question.correctAnswer}
                  </p>
              }
            </div>
          </div>
        ))}
        <div className="review-actions">
          <button onClick={handleBackToQuiz}>Back to Quiz</button>
          <button onClick={handleRetakeQuiz}>Retake Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default QuizReview; 