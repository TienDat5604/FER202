import React from 'react';
import './App.css';
import Counter from './components/Counter';
import InputField from './components/InputField';
import ToggleVisibility from './components/ToggleVisibility';
import TodoList from './components/TodoList';
import ColorSwitcher from './components/ColorSwitcher';
import SearchFilter from './components/SearchFilter';
import DragDropList from './components/DragDropList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <InputField />
        <ToggleVisibility />
        <TodoList />
        <ColorSwitcher />
        <SearchFilter />
        <DragDropList />
      </header>
    </div>
  );
}

export default App;
