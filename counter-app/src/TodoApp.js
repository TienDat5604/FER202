import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function TodoApp() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default TodoApp; 