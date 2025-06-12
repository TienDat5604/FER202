import React from 'react';
import './App.css';
import ColorSwitcher from './components/ColorSwitcher';

function ColorApp() {
  return (
    <div className="App">
      <header className="App-header">
        <ColorSwitcher />
      </header>
    </div>
  );
}

export default ColorApp; 