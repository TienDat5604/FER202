import React, { Component } from 'react';
import Question from './Question';
import Score from './Score';

class QuizApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          question: 'What is the capital of France?',
          options: ['Paris', 'London', 'Berlin', 'Madrid'],
          answer: 'Paris',
        },
        {
          id: 2,
          question: 'What is the largest planet in our solar system?',
          options: ['Jupiter', 'Saturn', 'Mars', 'Earth'],
          answer: 'Jupiter',
        },
        // Add more questions here
      ],
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    };
  }

  handleSubmitAnswer = (selectedOption) => {
    const { questions, currentQuestion, score } = this.state;
    const isCorrect = selectedOption === questions[currentQuestion].answer;
    const nextQuestion = currentQuestion + 1;
    const quizEnd = nextQuestion >= questions.length;
    this.setState({
      score: isCorrect ? score + 1 : score,
      currentQuestion: nextQuestion,
      quizEnd: quizEnd,
    });
  };

  handleRestartQuiz = () => {
    this.setState({
      currentQuestion: 0,
      score: 0,
      quizEnd: false,
    });
  };

  render() {
    const { questions, currentQuestion, quizEnd, score } = this.state;
    return (
      <div>
        {!quizEnd ? (
          <Question
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onSubmitAnswer={this.handleSubmitAnswer}
            index={currentQuestion}
          />
        ) : (
          <Score
            score={score}
            total={questions.length}
            onRestart={this.handleRestartQuiz}
          />
        )}
      </div>
    );
  }
}

export default QuizApp; 