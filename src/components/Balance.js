import './Balance.css'


const Balance = (props) =>{
    return(
        <div>
            <h1 className='title'>Expense Tracker</h1>
            <p className= 'balance-title'>YOUR BALANCE</p>
            <p className = 'balance'>${props.balance}</p>
        </div>
    )
}

export default Balance