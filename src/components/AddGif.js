import React, { useState } from 'react';

export const AddGif = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => setInputValue(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories(e => [inputValue, ...e])
    setInputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder='Search...'
        autoFocus
        value={inputValue}
        onChange={handleChange} />
    </form>
  );
};
