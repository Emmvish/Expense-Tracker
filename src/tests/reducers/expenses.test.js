import expensesReducer from '../../reducers/expenses'
import moment from 'moment';
import {expenses} from '../fixtures/expenses'

test('Set Default State', ()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
})

test('Remove Expense By ID',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('Must NOT Remove an Expense By not found by ID',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('Add an Expense',()=>{
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            text: 'Sex',
            amount: 255,
            createdAt: 1000,
            note: '',
            id: '4'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
})

test('Find an Expense by ID and Edit It',()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[2].id,
        updates: {
            amount: 24
        }
    }
    const state = expensesReducer(expenses, action)
    // expect(state).toEqual([expenses[0], expenses[1], {
    //     id:'3',
    //     description: 'Credit Card',
    //     note: '',
    //     amount: 24,
    //     createdAt: moment(0).add(4, 'days').valueOf()
    // } ])
    expect(state[2].amount).toBe(24)
})

test('Must NOT Edit an expense if not found by ID',()=>{
    const action = {
        type: 'EDIT_EXPENSE',
        id: '7',
        updates: {
            amount: 24
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})






