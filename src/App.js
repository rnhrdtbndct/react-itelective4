import logo from './logo.svg';
import './App.css';
import Expense from './Expense';
import expenses from './data';

const total = expenses.reduce((total, value) => {
  return total+value.price;}, 0)
function App() {
  return (
    <div>
      {expenses.map((expense) => {
        return(
          <Expense key={expense.id} name={expense.name} price={expense.price}/>
          )
        })}
        <div className='text'>
          <h3>Total: {total}</h3>
        </div>
    </div>
  );
}

export default App;