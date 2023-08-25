import React, { useState } from 'react';

import { NewExpenses } from './NewExpenses'
import './Expenses.css';
import { SingleExpense } from './SingleExpense';


export const Expenses = ( {expenses} ) => {

  return (
      <div>
      <div className='expenses'>Expenses</div>
          <div>
 

        {expenses.map(expense =>
          (
            <SingleExpense key={expense.id} expense={expense} />      ))};
              </div>
      </div>

  )
}
