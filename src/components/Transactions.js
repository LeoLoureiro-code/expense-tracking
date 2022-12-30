import './Transactions.css'

const Transactions = (props) =>{
    return(
        <div>
            <h2>Add new transaction</h2>
            <hr></hr>
            <form>
            <label htmlFor ='text'>Text</label>
            <input type='text' id='text' name='text' value={props.text} onChange={props.handleChange} placeholder='Transaction' autoComplete='off'/>
            <label htmlFor='amount'>Amount (negative-expense, positive-income)</label>
            <input type='number' id='amount' name='quantity' value={props.quantity} onChange={props.handleChange}  placeholder='How much?' autoComplete='off'/>
            <input type='submit' value='Submit' onClick={props.addIncomeExpense}/>
        </form>
        </div>
    )
}

export default Transactions