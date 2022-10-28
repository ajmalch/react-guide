import React,{useState} from 'react';
import './Expenses.css'
import ExpenseItem  from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

    const [selectedYear, setFileteredYear] = useState('2021');

    const changeYearHandler = (year) =>{
        setFileteredYear(year);
    }

    return (
      
      <Card className = 'expenses'>
        <ExpensesFilter selected={selectedYear} onChangeYear={changeYearHandler} />
        {props.items.map(expense =>
           <ExpenseItem 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}/>)}
      </Card>
       )}
    ;

export default Expenses;