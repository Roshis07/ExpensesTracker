import React, { useState } from "react";
import { SingleExpense } from "./SingleExpense";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

export const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  console.log(expenses);
  return (
    <div>
      <div className="expenses">Expenses</div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <div>
        {filteredExpenses.map((expense) => (
          <SingleExpense key={expense.id} expense={expense} />
        ))}
      </div>
    </div>
  );
};
