import React, { useState } from 'react';

function ColorSwitcher() {
  const [selectedColor, setSelectedColor] = useState('blue');
  
  const colors = ['red', 'blue', 'green', 'yellow'];
  
  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };
  
  const colorBoxStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: selectedColor,
    margin: '20px auto',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: selectedColor === 'yellow' ? '#333' : 'white',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    textTransform: 'capitalize'
  };
  
  return (
    <div className="color-switcher-container">
      <select 
        value={selectedColor} 
        onChange={handleColorChange}
        className="color-select"
      >
        <option value="" disabled>Select a color</option>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </option>
        ))}
      </select>
      
      <div style={colorBoxStyle}>
        {selectedColor}
      </div>
    </div>
  );
}

export default ColorSwitcher; 