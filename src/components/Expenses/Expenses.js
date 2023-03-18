import React,{useState} from 'react';
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from '../Chart/ExpenseChart'

const Expenses = (props) => {

    const [selectedYear, setFileteredYear] = useState('2021');

    const changeYearHandler = (year) =>{
        setFileteredYear(year);
    }

    const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === selectedYear);  

    return (
          <li>
            <Card className = 'expenses'>
              <ExpensesFilter selected={selectedYear} onChangeYear={changeYearHandler} />
              <ExpenseChart expenses = {filteredExpenses} />
              <ExpensesList items={filteredExpenses}/>
            </Card>
          </li>
       )}
    ;

export default Expenses;