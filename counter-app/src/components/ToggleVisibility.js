import React, { useState } from 'react';

function ToggleVisibility() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="toggle-container">
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      
      {isVisible && <p>Toggle me!</p>}
    </div>
  );
}

export default ToggleVisibility; 