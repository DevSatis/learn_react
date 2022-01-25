import React,{useState} from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) =>{

   const [enteredTitle, useEnteredTitle] = useState("");
   const [enteredAmount, useEnteredAmount] = useState("");
   const [enteredDate, useEnteredDate] = useState("");
   
    const TitleHandler =(event)=>{
        useEnteredTitle(event.target.value);
    };
    const AmountHandler =(event)=>{
        useEnteredAmount(event.target.value);
    };
    const DateHandler =(event)=>{
        useEnteredDate(event.target.value);
    };
    const SubmitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        useEnteredTitle('');
        useEnteredAmount('');
        useEnteredDate('');


    };

    return(
        <form onSubmit={SubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Title </label>
                    <input type="text" value={enteredTitle} onChange={TitleHandler} /> 
                </div>
                <div className="new-expense__control">
                    <label> Amount </label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={AmountHandler} />
                </div>
                <div className="new-expense__control">
                    <label> Date </label>
                    <input type="date" value={enteredDate} onChange={DateHandler} />
                </div>
            </div>
            <div className="new-expense__actions ">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;