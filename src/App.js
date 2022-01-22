import ExpenseItem from './components/ExpenseItem';

function App(){

    let expenses = [
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

    return(
        <div className='app-container'>
            <div>
                <h2>Let's get Started !</h2>
                <ExpenseItem
                    date={expenses[0].date}
                    title={expenses[0].title}
                    amount={expenses[0].amount}

                 />
                 <ExpenseItem
                    date={expenses[1].date}
                    title={expenses[1].title}
                    amount={expenses[1].amount}

                 />
                 <ExpenseItem
                    date={expenses[2].date}
                    title={expenses[2].title}
                    amount={expenses[2].amount}

                 />
                 <ExpenseItem
                    date={expenses[3].date}
                    title={expenses[3].title}
                    amount={expenses[3].amount}

                 />
            </div>
        </div>
    );
}
export default App;