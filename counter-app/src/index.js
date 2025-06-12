import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TodoApp from './TodoApp';
import reportWebVitals from './reportWebVitals';

// Choose which app to render
// Set to true to show only the TodoApp, false to show all components
const showOnlyTodoApp = false;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {showOnlyTodoApp ? <TodoApp /> : <App />}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
