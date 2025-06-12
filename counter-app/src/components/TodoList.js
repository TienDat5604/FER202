import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTodo();
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <div className="todo-input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Please input a Task"
          className="todo-input-field"
        />
        <button 
          onClick={addTodo}
          className="add-todo-btn"
        >
          Add Todo
        </button>
      </div>
      
      <div className="todo-list-container">
        <h2>Todo List</h2>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              <span>{todo}</span>
              <button 
                className="delete-btn"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList; 