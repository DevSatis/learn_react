import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense=(props)=>{

    const SaveEapenseDataHandler = (enteredExpenseDataRecieving)=>{
        const expenseData = {
            ...enteredExpenseDataRecieving,
            id: Math.random.toString()
        }
        props.onAddExpense(expenseData);
    };


    return(
        <div className="new-expense">
            <ExpenseForm 
            onSaveExpenseData={SaveEapenseDataHandler}

            />
        </div>
    );
}
export default NewExpense;
