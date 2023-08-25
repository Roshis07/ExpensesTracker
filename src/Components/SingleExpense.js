import React, {useState} from 'react'

export const SingleExpense = ({expense} ) => {
    const [title, setTitle] = useState(expense.title);
  
    const clickHandler = () => {
      setTitle("New Title");
    };
  
  return (
 
     <ul>
      <div className='container'>
        <div className='title'>{title}</div>
        <div className='price'>Price: ${expense.price}</div>
      <div className='date'> {expense.date.toDateString()}</div>
      <button onClick={clickHandler}>change title</button>
              </div> 
              </ul>
    )
}
