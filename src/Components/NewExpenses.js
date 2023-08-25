import React ,{ useState} from 'react';
import './NewExpenses.css';

export const NewExpenses = () => {
  const [enteredTitle,setEnteredTitle]= useState('');

  const titleChangeHandler = (event) => {
   setEnteredTitle (event.target.value);
}
const [enteredDate,setEnteredDate]= useState('');

  const dateChangeHandler = (event) => {
   setEnteredDate (event.target.value);
}
const [enteredPrice,setEnteredPrice]= useState('');

  const priceChangeHandler = (event) => {
   setEnteredPrice (event.target.value);
  }
  const submitHandler = () => {
    
    
  }


  return (
  
      <div >
         
          <div className='heading'>     NewExpenses</div>    
     
          <div>
              
        <form onSubmit={submitHandler}>
        <div className="container">
                 <div className="item">  <label for="expenseName">Expenses name:</label>
                 <input type="text" id="expenseName" name="expenseName" onChange={titleChangeHandler}/>
        </div>
          <div className="item">
                 <label for="expenseDate">Date:</label>
                 <input type="date" id="expenseDate" name="expenseDate" onChange={dateChangeHandler}/>
        </div>
                   <div className="item"><label for="expensePrice">Price:</label>
                 <input type="number" step="0.01" id="expensePrice" name="expensePrice"onChange={priceChangeHandler}/></div>
            </div>
               
                <br/>
<div className='submit'>
            <input type="submit" value="Submit" ></input>
            </div>
                 </form>



    </div>






    </div>
  );
}
