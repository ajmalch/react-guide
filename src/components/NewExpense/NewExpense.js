import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {

    const addExpenseHandler = (enteredExpenseData) =>{

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

       props.onExpenseSubmit(expenseData);

    }


    return (<div className='new-expense'>
                <ExpenseForm onAddExpense={addExpenseHandler} />
            </div>);
}

export default NewExpense;