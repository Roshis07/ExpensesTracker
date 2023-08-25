import React from 'react';
import './App.css';
import { Expenses } from './Components/Expenses';
import { NewExpenses } from './Components/NewExpenses';


function App() {
  const expenses = [
   { id: 1, title: 'Car', price: 10000, date: new Date(2023, 2, 2) },
    { id: 2, title: 'Kitchen', price: 1000, date: new Date(2023, 2, 3) },
    { id: 2, title: 'Bathroom', price: 5000, date: new Date(2023, 2, 5)}
  ];


  return (
    <div className="App">


      <div>
        <NewExpenses />
        <br />
        
        <Expenses expenses={expenses}  />

</div>
    </div>
  );
}

export default App;
