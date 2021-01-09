import React from 'react';
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseList = (props)=>{
    return (
        <div>
            <ExpenseListFilters/>
            <h1>Expense List</h1>
            {console.log(props.expenses)}
            {props.expenses.map((expense)=>{
                return <ExpenseListItem key={expense.id} {...expense}/>
            })}
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)

export default ConnectedExpenseList