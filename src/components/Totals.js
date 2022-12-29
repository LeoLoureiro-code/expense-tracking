import './Totals.css'


const Totals = () =>{
    return(
        <div className='income-expense-div'>
            <div>
                <p className='total-title'>INCOME</p>
                <p className='income'>+$0.00</p>
            </div>
            <div>
                <p className='total-title'>EXPENSE</p>
                <p className='expense'>-$0.00</p>
            </div>
        </div>
    )
}

export default Totals