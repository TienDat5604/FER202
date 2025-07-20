import { createSlice } from '@reduxjs/toolkit';
import { quizData } from '../../data/quizData';

const initialState = {
  questions: quizData,
  currentQuestion: 0,
  userAnswers: Array(quizData.length).fill(''),
  showResults: false,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setCurrentQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    setUserAnswer: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswers[questionIndex] = answer;
    },
    goToNextQuestion: (state) => {
      if (state.currentQuestion < state.questions.length - 1) {
        state.currentQuestion += 1;
      }
    },
    goToPrevQuestion: (state) => {
      if (state.currentQuestion > 0) {
        state.currentQuestion -= 1;
      }
    },
    goToFirstQuestion: (state) => {
      state.currentQuestion = 0;
    },
    goToLastQuestion: (state) => {
      state.currentQuestion = state.questions.length - 1;
    },
    toggleShowResults: (state) => {
      state.showResults = !state.showResults;
    },
    resetQuiz: (state) => {
      state.currentQuestion = 0;
      state.userAnswers = Array(state.questions.length).fill('');
      state.showResults = false;
    }
  },
});

export const { 
  setCurrentQuestion, 
  setUserAnswer, 
  goToNextQuestion,
  goToPrevQuestion,
  goToFirstQuestion,
  goToLastQuestion,
  toggleShowResults,
  resetQuiz
} = quizSlice.actions;

export default quizSlice.reducer; 