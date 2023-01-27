import logo from './logo.svg';
import './App.css';
import Expense from './Expense';
import expenses from './data';

function App() {
  console.log(expenses);
  return (
    <div>
      {expenses.map((expense) => {
        return(
          <Expense key={expense.id} name={expense.name} price={expense.price}/>
        )
        })}
    </div>
  );
}

export default App;