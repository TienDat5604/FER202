import React from 'react';
import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import store from './redux/store';
import Quiz from './components/Quiz';
import QuizReview from './components/QuizReview';
import './App.css';

// Component to conditionally render Quiz or QuizReview
const QuizContainer = () => {
  const { showResults } = useSelector((state) => state.quiz);
  return showResults ? <QuizReview /> : <Quiz />;
};

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <QuizContainer />
      </div>
    </Provider>
  );
}

export default App;
