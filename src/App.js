import { useState } from 'react'
import Balance from './components/Balance';
import Totals from './components/Totals';
import History from './components/History';
import Transactions from './components/Transactions'
import './App.css';

const App = () =>{

  const [value, setValue] = useState({
    text: '',
    quantity: 0,
    balance: 0.00,
    income: '',
    expense: 0.00,
    transactions: [],
  })

  const handleChange = (e) =>{
    setValue((state) =>({
      ...state,
      [e.target.name]: e.target.value
      
    }))
  }

  const addExpense = () =>{

  }
  
  //todo: Sum income balance correctly
  const addIncome = () =>{
    setValue({
      ...value,
      balance: (parseFloat(value.balance) + parseFloat(value.quantity)),
      income: value.income += value.quantity,
    })
    console.log(value.balance)
    console.log(value.quantity)
  }
  
  const addTransactionInfo = (e) =>{
    e.preventDefault()
    
    let transaction = value.transactions

    let transactionObject = {
      transactionText: value.text,
      transactionQuantity: value.quantity,
    }

    if(transactionObject.transactionQuantity > 0){
      addIncome()
    }

    if(transactionObject.transactionQuantity < 0){
      addExpense()
    }

    setValue({
      ...value,
      transactions: [...transaction, transactionObject]
    })
  }
  return(
    <div className ='expense-tracker'>
      <Balance balance ={value.balance}/>
      <Totals income={value.income} expense ={value.expense}/>
      <History transactions = {value.transactions}/>
      <Transactions addTransactionInfo ={addTransactionInfo} handleChange ={handleChange}/>
    </div>
  )
}

export default App;
