import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'

// const AddExpensePage = (props) => (
//     <div>
//       <h1>Expense Addition Page</h1>
//       <ExpenseForm
//         onSubmit={(expense)=>{
//           props.dispatch(addExpense(expense))
//           // Efficient client side routing to go back to dashboard
//           props.history.push("/")
//         }}  
//       />
//     </div>
//   )

export class AddExpensePage extends React.Component{
  onSubmit = (expense)=>{
    this.props.addExpense(expense)
    this.props.history.push('/')
  }
  render(){
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

  const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
  })

  export default connect(undefined, mapDispatchToProps)(AddExpensePage);