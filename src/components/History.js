

const History = (props) =>{
    const transactions = props.transactions
    console.log(transactions)
    const listTransactions = transactions.map((transaction) =>
        <li key={transactions.indexOf(transaction)}>
            <span>{transaction.transactionText}</span> <span>${transaction.transactionQuantity}</span>
        </li>
    )
    return(
        <div>
            <h2>History</h2>
            <hr></hr>
            <ul className='transaction-list'>
                {listTransactions}
            </ul>
        </div>
    )
}

export default History