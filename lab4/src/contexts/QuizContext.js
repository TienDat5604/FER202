import React, { createContext, useState } from 'react';
import { quizData } from '../data/quizData';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState(quizData);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [newQuestionForm, setNewQuestionForm] = useState({
    question: '',
    answers: ['', '', ''],
    correctAnswer: ''
  });

  // Add a new question to the quiz
  const addQuestion = () => {
    if (
      newQuestionForm.question &&
      newQuestionForm.answers.every(answer => answer) &&
      newQuestionForm.correctAnswer
    ) {
      setQuestions([...questions, newQuestionForm]);
      setNewQuestionForm({
        question: '',
        answers: ['', '', ''],
        correctAnswer: ''
      });
    }
  };

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  // Handle going to the next question
  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer('');
    } else {
      setShowScore(true);
    }
  };

  // Handle form input changes
  const handleFormChange = (e, index) => {
    const { name, value } = e.target;
    
    if (name === 'answer') {
      const updatedAnswers = [...newQuestionForm.answers];
      updatedAnswers[index] = value;
      
      setNewQuestionForm({
        ...newQuestionForm,
        answers: updatedAnswers
      });
    } else {
      setNewQuestionForm({
        ...newQuestionForm,
        [name]: value
      });
    }
  };

  // Handle setting correct answer
  const handleCorrectAnswerChange = (answer) => {
    setNewQuestionForm({
      ...newQuestionForm,
      correctAnswer: answer
    });
  };

  // Reset the quiz
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer('');
    setShowScore(false);
  };
  
  return (
    <QuizContext.Provider
      value={{
        questions,
        currentQuestion,
        selectedAnswer,
        score,
        showScore,
        newQuestionForm,
        addQuestion,
        handleAnswerSelect,
        handleNextQuestion,
        handleFormChange,
        handleCorrectAnswerChange,
        resetQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}; 