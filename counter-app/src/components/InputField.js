import React, { useState } from 'react';

function InputField() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="input-container">
      <input 
        type="text" 
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>Input text: {inputText}</p>
    </div>
  );
}

export default InputField; 