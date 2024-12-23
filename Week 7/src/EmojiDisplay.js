import React, { useState, useEffect } from 'react';
import Love from './Love.png';
import Sad from './sad.png';
import Like from './like.png';
import Happy from './happy.png';

const EmojiDisplay = () => {
  const [inputText, setInputText] = useState('');
  const [pic, setPic] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInputText(value);
  };

  // Update emoji based on input text
  useEffect(() => {
    if (inputText === 'love') setPic(Love);
    else if (inputText === 'like') setPic(Like);
    else if (inputText === 'sad') setPic(Sad);
    else if (inputText === 'happy') setPic(Happy);
    else setPic('');
  }, [inputText]);

  return (
    <div>
      <input
        type="text"
        placeholder="Love, Happy, Like, or Sad"
        value={inputText}
        onChange={handleInputChange}
      />
      <div>
        {pic && <img src={pic} alt={inputText} />}
      </div>
    </div>
  );
};

export default EmojiDisplay;