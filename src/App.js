import { useState } from "react";
import React from "react";
import "./App.css";
import { Expenses } from "./Components/Expenses";
import { NewExpenses } from "./Components/NewExpenses";

function App() {
  const DUMMY_EXPENSES = [
    { id: 1, title: "Car", price: 10000, date: new Date(2023, 2, 2) },
    { id: 2, title: "Kitchen", price: 1000, date: new Date(2023, 2, 3) },
    { id: 3, title: "Bathroom", price: 5000, date: new Date(2023, 2, 5) },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const saveExpenseDataHandler = (saveExpenseDataHandler) => {
    setExpenses([...expenses, saveExpenseDataHandler]);
  };

  return (
    <div className="App">
      <div>
        <NewExpenses onSaveExpenseData={saveExpenseDataHandler} />
        <br />

        <Expenses expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
