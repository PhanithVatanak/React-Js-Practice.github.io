import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id : 1, title : 'Macbook Air M1', amount : 1045.56, date: new Date(2021, 11, 14)},
  { id : 2, title : 'Macbook Air M2', amount : 1145.49, date: new Date(2022, 3, 5)},
  { id : 3, title : 'Macbook Pro M1', amount : 1025.37, date: new Date(2022, 11, 14)},
  { id : 4, title : 'Macbook Pro M2', amount : 1245.56, date: new Date(2023, 7, 1)},
  { id : 5, title : 'Toyota Camry 07 Hybrid', amount : 18600, date: new Date(2023, 4, 19)},
]

const App = () => {

  const [expenses, setExpeses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = ((expense) => {
    setExpeses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  });
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;