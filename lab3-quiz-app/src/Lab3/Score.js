import React from 'react';

function Score({ score, total, onRestart }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '60px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Quiz Ended</h1>
      <h2 style={{ fontSize: '2rem' }}>Your Score: {score}</h2>
      
    </div>
  );
}

export default Score; 