import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import {useState} from 'react';



let Dummy_Expense = [
    {
        id:'e1',
        title:'School Fee',
        amount: 400,
        date: new Date(2022, 0, 22)
    },
    {
        id:'e2',
        title:'Food',
        amount: 700,
        date: new Date(2022, 0, 12)
    },
    {
        id:'e3',
        title:'Books',
        amount: 100,
        date: new Date(2022, 0, 1)
    },
    {
        id:'e4',
        title:'Other',
        amount: 5000,
        date: new Date(2022, 0, 20)
    }


];


const App = () =>{

    const [expenses, setExpenses] = useState(Dummy_Expense);

    
    const AddExpenseHandler = (expense) => {
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    };

    return(
        <div className='app-container'>
            <div>
                <NewExpense onAddExpense={AddExpenseHandler}/>
                <Expenses item={expenses}/>
             
            </div>
        </div>
    );
}
export default App;