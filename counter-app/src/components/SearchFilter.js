import React, { useState } from 'react';

function SearchFilter() {
  // Sample data - list of programming languages
  const initialItems = [
    'JavaScript',
    'Python',
    'Java',
    'C#',
    'TypeScript',
    'PHP',
    'Ruby',
    'Swift',
    'Kotlin',
    'Go',
    'Rust',
    'C++',
    'C',
    'Dart',
    'R'
  ];

  const [searchTerm, setSearchTerm] = useState('');
  
  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  // Filter items based on search term
  const filteredItems = initialItems.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Highlight the matched text
  const highlightMatch = (text, highlight) => {
    if (!highlight.trim()) {
      return <span>{text}</span>;
    }
    
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    
    return (
      <span>
        {parts.map((part, index) => 
          regex.test(part) ? 
            <span key={index} className="highlight">{part}</span> : 
            <span key={index}>{part}</span>
        )}
      </span>
    );
  };
  
  return (
    <div className="search-filter-container">
      <h2>Programming Languages</h2>
      <input
        type="text"
        placeholder="Search languages..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      
      <div className="items-list">
        {filteredItems.length > 0 ? (
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>
                {highlightMatch(item, searchTerm)}
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-results">No results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchFilter; 