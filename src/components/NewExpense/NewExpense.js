import React, {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {

    const [isEditing, setIsEditing] = useState(false);

    const addExpenseHandler = (enteredExpenseData) =>{

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

       props.onExpenseSubmit(expenseData);
       setIsEditing(false);

    }

    const toggleEditingHandler =  () => {
        setIsEditing(!isEditing);
    }

    if(!isEditing) {
        return (<div className='new-expense'>
                    <button onClick={toggleEditingHandler}>Add New Expense </button>
                </div> );     
    }   

    return (<div className='new-expense'>
                <ExpenseForm onAddExpense={addExpenseHandler} onCancel={toggleEditingHandler}/>
            </div>);
}

export default NewExpense;