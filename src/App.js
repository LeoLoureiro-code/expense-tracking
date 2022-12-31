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
  
  const addIncomeExpense = (e) =>{
    e.preventDefault()
    if(value.quantity > 0){
      addTransactionInfo()
      setValue({
        ...value,
        balance: (parseInt(value.balance) + parseInt(value.quantity)),
        income: (parseInt(value.income) + parseInt(value.quantity)),
        quantity: '',
        text: '',
      })
    }
    if(value.quantity < 0){
      addTransactionInfo()
      setValue({
        ...value,
        balance: (parseInt(value.balance) + parseInt(value.quantity)),
        expense: (parseInt(value.expense) + parseInt(value.quantity)),
        quantity: '',
        text: '',
      })
    }
  }
  
  const addTransactionInfo = () =>{
    
    let transactionObject = {
      transactionText: value.text,
      transactionQuantity: value.quantity,
    }

    let transaction = value.transactions

    transaction.push(transactionObject)

    console.log(transactionObject)
    setValue({
      ...value,
      transactions: [...value.transactions, transaction]
    })
  }

  return(
    <div className ='expense-tracker'>
      <Balance balance ={value.balance}/>
      <Totals income={value.income} expense ={value.expense}/>
      <History transactions ={value.transactions}/>
      <Transactions text ={value.text} quantity={value.quantity} addIncomeExpense ={addIncomeExpense} handleChange ={handleChange}/>
    </div>
  )
}

export default App;
