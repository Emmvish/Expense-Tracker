import React from "react";
import {SingleDatePicker} from 'react-dates';
import moment from 'moment';
// import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props)

        this.state ={
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }
    onDescriptionChange = (e)=>{
        const description = e.target.value;
        this.setState(()=>({description}));
    } 
    onNoteChange = (e)=>{
        // Note that if you require to reuse an event parameter in another callback, you must first use e.persist().
        e.persist();
        this.setState(()=>({note: e.target.value}));
    }
    onAmountChange = (e)=>{
        const amount = e.target.value;
        // {} to specify range: {a,} means a to infinity. 123.50
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount: amount}))
        }
    }
    onDateChange = (createdAt)=>{
        if(createdAt){
            this.setState(()=>({createdAt}))
        }
    }
    onFocusChange = ({focused})=>{
        this.setState(()=>({calendarFocused: focused}));
    }
    onSubmit = (e)=>{
        // Prevent page from refreshing upon form submission
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({error: 'Please provide amount of expense incurred and its description.'}))
        } else {
            this.setState(()=>({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount,10)*100,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.description} placeholder="Description" autoFocus onChange={this.onDescriptionChange}></input> 
                    <input type="text" placeholder="Amount" onChange={this.onAmountChange} value={this.state.amount} />
                    <textarea placeholder="Add a note for this expense (optional)" onChange={this.onNoteChange} value={this.state.note}></textarea>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}