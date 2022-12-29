import './Transactions.css'

const Transactions = (props) =>{
    let text = props.text
    let quantity = props.quantity
    return(
        <div>
            <h2>Add new transaction</h2>
            <hr></hr>
            <form>
            <label htmlFor ='name'>Text</label>
            <input type='text' id='name' value={text} onChange={props.handleChange} placeholder='Transaction' autoComplete='off'/>
            <label htmlFor='amount'>Amount (negative-expense, positive-income)</label>
            <input type='number' id='amount' value={quantity} onChange={props.handleChange}  placeholder='How much?' autoComplete='off'/>
            <input type='submit' value='Submit'/>
        </form>
        </div>
    )
}

export default Transactions