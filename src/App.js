import { useState } from 'react'
import Balance from './components/Balance';
import Totals from './components/Totals';
import History from './components/History';
import Transactions from './components/Transactions'
import './App.css';

const App = () =>{

  const [value, setValue] = useState({
    text: '',
    quantity: '',
    balance: 0.00,
    income: 0.00,
    expense: 0.00,
    transactions: [],
  })

  const handleChange = (e) =>{
    setValue((state) =>({
      ...state,
      [e.target.name]: e.target.value
      
    }))
  }
  
  return(
    <div className ='expense-tracker'>
      <Balance balance ={value.balance}/>
      <Totals income={value.income} expense ={value.expense} onChange ={handleChange}/>
      <History/>
      <Transactions text ={value.text} quantity={value.quantity} handleChange ={handleChange}/>
    </div>
  )
}

export default App;
