import React, { useContext } from 'react';
import { QuizContext, QuizProvider } from '../contexts/QuizContext';
import Question from './Question';
import Score from './Score';
import QuizForm from './QuizForm';

const QuizContent = () => {
  const { showScore } = useContext(QuizContext);

  return (
    <div className="quiz-app-container">
      <h1>React Quiz App</h1>
      {showScore ? <Score /> : <Question />}
      <QuizForm />
    </div>
  );
};

const QuizApp = () => {
  return (
    <QuizProvider>
      <QuizContent />
    </QuizProvider>
  );
};

export default QuizApp; 