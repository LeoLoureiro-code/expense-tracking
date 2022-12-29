import './Balance.css'


const Balance = (props) =>{
    return(
        <div>
            <h1 className='title'>Expense Tracker</h1>
            <p className= 'balance-title'>YOUR BALANCE</p>
            <p className = 'balance'>$0.00</p>
        </div>
    )
}

export default Balance