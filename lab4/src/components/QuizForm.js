import React, { useContext } from 'react';
import { QuizContext } from '../contexts/QuizContext';

const QuizForm = () => {
  const { 
    newQuestionForm, 
    handleFormChange, 
    handleCorrectAnswerChange, 
    addQuestion 
  } = useContext(QuizContext);

  return (
    <div className="quiz-form-container">
      <h2>Add New Question</h2>
      
      <div className="form-group">
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          id="question"
          name="question"
          value={newQuestionForm.question}
          onChange={(e) => handleFormChange(e)}
          placeholder="Enter your question"
        />
      </div>
      
      <div className="form-group">
        <label>Answer options:</label>
        {newQuestionForm.answers.map((answer, index) => (
          <div key={index} className="answer-input">
            <input
              type="text"
              name="answer"
              value={answer}
              onChange={(e) => handleFormChange(e, index)}
              placeholder={`Answer option ${index + 1}`}
            />
            <label>
              <input
                type="radio"
                name="correctAnswer"
                checked={newQuestionForm.correctAnswer === answer && answer !== ''}
                onChange={() => handleCorrectAnswerChange(answer)}
                disabled={answer === ''}
              />
              Correct Answer
            </label>
          </div>
        ))}
      </div>
      
      <button 
        className="add-question-btn" 
        onClick={addQuestion}
        disabled={
          !newQuestionForm.question ||
          !newQuestionForm.answers.every(answer => answer) ||
          !newQuestionForm.correctAnswer
        }
      >
        Add Question
      </button>
    </div>
  );
};

export default QuizForm; 