import React, { useState } from 'react';
import { Container, Button, Alert, Card, ProgressBar } from 'react-bootstrap';
import Question from '../components/Question';
import quizData from '../components/QuizData';
import './Quiz.css';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizData.length).fill(''));
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let newScore = 0;
    quizData.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(Array(quizData.length).fill(''));
    setShowResults(false);
    setScore(0);
  };

  const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;

  if (showResults) {
    return (
      <Container className="mt-4 quiz-container">
        <Card className="quiz-card results-card">
          <Card.Header as="h2">Quiz Results</Card.Header>
          <Card.Body>
            <Alert variant={score > quizData.length / 2 ? 'success' : 'warning'}>
              <Alert.Heading>
                {score > quizData.length / 2 ? 'Great job!' : 'Good effort!'}
              </Alert.Heading>
              <p>You scored {score} out of {quizData.length} questions correctly ({Math.round((score/quizData.length)*100)}%).</p>
            </Alert>
            
            <h3 className="mt-4">Review Your Answers</h3>
            {quizData.map((question, index) => (
              <div key={index} className="mb-4 question-review">
                <p className="question-text"><strong>Question {index + 1}:</strong> {question.question}</p>
                <p>Your answer: 
                  <span className={userAnswers[index] === question.correctAnswer ? 'text-success' : 'text-danger'}>
                    <strong> {userAnswers[index] || 'Not answered'}</strong>
                  </span>
                </p>
                <p>Correct answer: <strong className="text-success">{question.correctAnswer}</strong></p>
              </div>
            ))}
            
            <div className="text-center mt-4">
              <Button variant="primary" size="lg" onClick={resetQuiz}>Try Again</Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <Container className="mt-4 quiz-container">
      <h1>Food Quiz</h1>
      <Card className="quiz-card">
        <Card.Header>
          <ProgressBar 
            now={progress} 
            label={`${Math.round(progress)}%`} 
            variant="success" 
            className="quiz-progress" 
          />
        </Card.Header>
        
        <Card.Body>
          <div className="question-header">
            <h4>Question {currentQuestionIndex + 1} of {quizData.length}</h4>
            <div className="question-number-badge">{currentQuestionIndex + 1}/{quizData.length}</div>
          </div>
          
          <Question
            question={currentQuestion.question}
            options={currentQuestion.options}
            selectedAnswer={userAnswers[currentQuestionIndex]}
            onSelectAnswer={handleAnswerSelect}
          />
        </Card.Body>
        
        <Card.Footer>
          <div className="d-flex justify-content-between">
            <Button 
              variant="outline-secondary" 
              onClick={handlePrevious} 
              disabled={currentQuestionIndex === 0}
            >
              &laquo; Previous
            </Button>

            <Button 
              variant="primary" 
              onClick={handleNext} 
              disabled={!userAnswers[currentQuestionIndex]}
            >
              {currentQuestionIndex === quizData.length - 1 ? 'Submit' : 'Next question'}
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default Quiz; 