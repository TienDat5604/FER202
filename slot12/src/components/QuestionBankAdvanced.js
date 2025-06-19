import React, { useReducer, useEffect, useState } from "react";
import { Button, Container, Card, ProgressBar, Alert } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  showFeedback: false,
  isCorrect: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      const isCorrect = action.payload === state.questions[state.currentQuestion].answer;
      return { 
        ...state, 
        selectedOption: action.payload,
        showFeedback: true,
        isCorrect: isCorrect
      };

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showFeedback: false,
        isCorrect: false,
        showScore: state.currentQuestion + 1 === state.questions.length,
      };

    case "UPDATE_SCORE":
      return {
        ...state,
        score: state.score + 1
      };

    case "RESTART_QUIZ":
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

function QuestionBankAdvanced() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, showFeedback, isCorrect } = state;

  // Timer state
  const [timeLeft, setTimeLeft] = useState(10);
  // High score state
  const [highScore, setHighScore] = useState(() => {
    const savedHighScore = localStorage.getItem('quizHighScore');
    return savedHighScore ? parseInt(savedHighScore) : 0;
  });

  // Timer effect
  useEffect(() => {
    if (!showFeedback && !showScore && timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else if (timeLeft === 0 && !showFeedback && !showScore) {
      // Time's up, move to next question
      handleNextQuestion();
    }
  }, [timeLeft, showFeedback, showScore]);

  // Reset timer when moving to a new question
  useEffect(() => {
    setTimeLeft(10);
  }, [currentQuestion]);

  // Update high score when quiz is finished
  useEffect(() => {
    if (showScore && score > highScore) {
      setHighScore(score);
      localStorage.setItem('quizHighScore', score.toString());
    }
  }, [showScore, score]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
    
    // If correct answer, update score
    if (option === questions[currentQuestion].answer) {
      dispatch({ type: "UPDATE_SCORE" });
    }
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
    setTimeLeft(10);
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <p>High Score: {highScore}</p>
            <Button variant="primary" onClick={handleRestartQuiz}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            {/* Progress Bar */}
            <div className="mb-3">
              <small className="d-flex justify-content-between">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span className={timeLeft < 5 ? "text-danger" : ""}>
                  Time left: {timeLeft}s
                </span>
              </small>
              <ProgressBar 
                now={(currentQuestion / questions.length) * 100} 
                variant="info"
              />
            </div>

            <h4>{questions[currentQuestion].question}</h4>

            {/* Feedback display */}
            {showFeedback && (
              <Alert variant={isCorrect ? "success" : "danger"}>
                {isCorrect ? (
                  <div>
                    <FaCheckCircle /> Correct! 🎉
                  </div>
                ) : (
                  <div>
                    <FaTimesCircle /> Incorrect! The correct answer is {questions[currentQuestion].answer}.
                  </div>
                )}
              </Alert>
            )}

            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option 
                      ? (isCorrect ? "success" : "danger")
                      : "outline-secondary"
                  }
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                  disabled={showFeedback}
                >
                  {option}
                </Button>
              ))}
            </div>

            {showFeedback && (
              <Button
                variant="primary"
                className="mt-3"
                onClick={handleNextQuestion}
              >
                {currentQuestion === questions.length - 1
                  ? "Finish Quiz"
                  : "Next Question"}
              </Button>
            )}
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBankAdvanced; 