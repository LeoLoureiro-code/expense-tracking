import './Totals.css'


const Totals = (props) =>{
    return(
        <div className='income-expense-div'>
            <div>
                <p className='total-title'>INCOME</p>
                <p className='income'>+${props.income}</p>
            </div>
            <div>
                <p className='total-title'>EXPENSE</p>
                <p className='expense'>-${props.expense * -1}</p>
            </div>
        </div>
    )
}

export default Totals