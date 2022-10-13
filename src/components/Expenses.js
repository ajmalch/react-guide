import './Expenses.css'
import ExpenseItem  from './ExpenseItem';

const expenses = (props) =>
  props.expenses.map((expense) => 
     (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));

export default expenses;