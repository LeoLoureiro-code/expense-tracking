import { useState } from 'react'
import Balance from './components/Balance';
import Totals from './components/Totals';
import History from './components/History';
import Transactions from './components/Transactions'
import './App.css';

const App = () =>{

  const initialvalues ={
    text: '',
    quantity: '',
    balance: '',
    income: '',
    expense: '',
    transactions: [],
  }
  console.log(initialvalues)
  const [value, setValue] = useState(initialvalues)

  const handleChange = (e) =>{
    setValue({...value, [e.target.name]: e.target.value})
  }

  return(
    <div className ='expense-tracker'>
      <Balance balance ={value.balance} handleChange ={handleChange}/>
      <Totals onChange ={handleChange}/>
      <History/>
      <Transactions text ={value.text} quantity={value.quantity} handleChange ={handleChange}/>
    </div>
  )
}

export default App;
