import React from "react";
import {connect} from "react-redux";
import {setTextFilter} from '../actions/filters'
import { sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import {DateRangePicker} from 'react-dates'

class ExpenseListFilters extends React.Component{
    state={
        calendarFocused: null
    }
    onDatesChange = ({startDate, endDate})=>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused)=>{
        this.setState(()=>({calendarFocused}));
    }
    onTextChange = (e)=>{
        this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e)=>{
        if(e.target.value === "amount"){
            this.props.sortByAmount()
        }
        else if(e.target.value === "date"){
            this.props.sortByDate()
        }
    }
    render(){
        return (
            <div>
            <input type="text" value={this.props.filters.text} onChange={this.onTextChange}></input>
            <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
            </select>
            <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
                showClearDates={true}
            />
        </div>
        )
    }
}

const mapStatetoProps = (state)=>{
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch)=>({
    setStartDate: (startDate)=> dispatch(setStartDate(startDate)),
    setEndDate: (endDate)=> dispatch(setEndDate(endDate)),
    setTextFilter: (text)=> dispatch(setTextFilter(text)),
    sortByAmount: ()=> dispatch(sortByAmount()),
    sortByDate: ()=> dispatch(sortByDate())
})

const connectedExpenseListFilters = connect(mapStatetoProps, mapDispatchToProps)(ExpenseListFilters)

export default connectedExpenseListFilters