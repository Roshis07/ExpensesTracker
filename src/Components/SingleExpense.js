import React, { useState } from 'react';

export const SingleExpense = ({ expense }) => {
  const [title, setTitle] = useState(expense.title);
  const [inputTitle, setInputTitle] = useState(expense.title); // State to track input field value

  const clickHandler = () => {
    setTitle("New Title");
  };

  const handleInputChange = (event) => {
    setInputTitle(event.target.value); // Update input field value state
  };

  const handleTitleChange = () => {
    setTitle(inputTitle); // Update title state with input field value
  };

  return (
    <ul>
      <div className='container'>
        <div className='title'>{title}</div>
        <div className='price'>Price: ${expense.price}</div>
        <div className='date'>{expense.date.toDateString()}</div>
      
        <input type='text' value={inputTitle} onChange={handleInputChange} />
        <button onClick={handleTitleChange}>Update Title</button> {/* Add this button */}
      </div>
    </ul>
  );
};
