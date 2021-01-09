import { createStore, combineReducers } from 'redux';
import {v4 as uuid} from 'uuid';

const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}
)=>({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        amount,
        description,
        createdAt,
        note
    }
})

const removeExpense = ({
    id = ''
} = {})=>(
    {
        type: 'REMOVE_EXPENSE',
        id
    }
)

const editExpense = (id,updates)=>({
    type: 'EDIT_EXPENSE',
    updates,
    id
})

const setTextFilter = (text = '')=>({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByDate = ()=>({
    type: 'SORT_BY_DATE',
    sortBy: 'date'
})

const sortByAmount = ()=>({
    type: 'SORT_BY_AMOUNT',
    sortBy: 'amount'
})

const setStartDate = (startDate = undefined)=>({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate = undefined)=>({
    type: 'SET_END_DATE',
    endDate
})

const getVisibleExpenses = (expenses, {text, startDate, endDate, sortBy})=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            // 1 for putting b first, -1 for putting a first
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if(sortBy==='amount'){
            return a.amount > b.amount ? -1 : 1;
        }
    })
}

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=> id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default: return state;
    }
}

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sortBy
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sortBy
            }
        default: return state;
    }
}

const store = createStore(combineReducers(
    {
        expenses: expensesReducer,
        filters: filtersReducer
    }
))

store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

// store.dispatch(sortByDate());

// Most recent expense must be displayed first.

store.dispatch(sortByAmount());

// Higher amount transaction / expense first.

const expenseOne = store.dispatch(addExpense({description: 'January Rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 1006, createdAt: -2000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 550}));

// store.dispatch(setTextFilter('coffee'))

// store.dispatch(setTextFilter());

// store.dispatch(setStartDate(0));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate(133));

// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'wuibfwflwewfw',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}
