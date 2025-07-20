import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  setUserAnswer,
  goToNextQuestion, 
  goToPrevQuestion,
  goToFirstQuestion,
  goToLastQuestion,
  toggleShowResults
} from '../redux/slices/quizSlice';
import '../App.css';

const Quiz = () => {
  const dispatch = useDispatch();
  const { questions, currentQuestion, userAnswers } = useSelector((state) => state.quiz);
  
  const handleAnswerSelect = (answer) => {
    dispatch(setUserAnswer({ 
      questionIndex: currentQuestion, 
      answer 
    }));
  };

  const handleNext = () => {
    dispatch(goToNextQuestion());
  };

  const handlePrev = () => {
    dispatch(goToPrevQuestion());
  };

  const handleFirst = () => {
    dispatch(goToFirstQuestion());
  };

  const handleLast = () => {
    dispatch(goToLastQuestion());
  };

  const handleSubmit = () => {
    dispatch(toggleShowResults());
  };

  const handleReviewQuiz = () => {
    dispatch(toggleShowResults());
  };

  if (!questions.length) {
    return <div>Loading...</div>;
  }

  const question = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>JavaScript Quiz</h1>
      </div>
      <div className="quiz-content">
        <h2>Q.{currentQuestion + 1} {question.question}</h2>
        <div className="options">
          {question.options.map((option, index) => (
            <div 
              key={index} 
              className={`option ${userAnswers[currentQuestion] === option ? 'selected' : ''}`}
              onClick={() => handleAnswerSelect(option)}
            >
              <input 
                type="radio" 
                id={`option-${index}`}
                name="quiz-option"
                checked={userAnswers[currentQuestion] === option}
                onChange={() => handleAnswerSelect(option)}
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
        </div>
        <div className="navigation">
          <button onClick={handleFirst}>First</button>
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
          <button onClick={handleLast}>Last</button>
        </div>
        <div className="quiz-actions">
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleReviewQuiz}>Quiz Review</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz; 