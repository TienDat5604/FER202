import React from 'react';
import './App.css';
import SearchFilter from './components/SearchFilter';

function SearchApp() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchFilter />
      </header>
    </div>
  );
}

export default SearchApp; 