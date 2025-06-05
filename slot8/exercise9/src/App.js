import React from 'react';
import './App.css';
import SimpleCard from './components/SimpleCard';
import SimpleWebsite from './components/SimpleWebsite';

function App() {
  // Sample data for the SimpleCard
  const cardItem = {
    title: "Trương Tiến Đạt",
    description: "99999999",
    imageUrl: "/fptulogo.jpg"
  };

  return (
    <div className="App">
      
      <SimpleCard item={cardItem} />
      
      
      <SimpleWebsite />
    </div>
  );
}

export default App;