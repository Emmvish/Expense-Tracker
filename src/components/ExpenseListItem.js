import React from 'react';
// import {connect} from 'react-redux';
// import {removeExpense} from "../actions/expenses"
import {Link} from 'react-router-dom'
// import { sortByAmount} from '../actions/filters';
import moment from 'moment'
import numeral from 'numeral'

const ExpenseListItem = ({dispatch, description, id, amount, createdAt})=>{
    const editLink = "/edit/" + id;
    return (
        <div>
            <Link to={editLink}><h3>{description}</h3></Link>
            <p>
                {numeral(amount/100).format('$0,0.00')} 
                    - 
                {moment(createdAt).format('MMM Do, YYYY')}
            </p>
        </div>
    )
}

// props.dispatch is only available if component is connected with the store and the connected component must be exported to receive dispatch in props.
export default ExpenseListItem