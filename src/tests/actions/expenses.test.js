import {removeExpense, addExpense, editExpense} from '../../actions/expenses'

test('Remove Expense Action',()=>{
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Edit Expense Action',()=>{
    const action = editExpense('abc123',{amount:500})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            amount: 500
        }
    })
})

test ('Add Expense Action',()=>{
    const expenseData = {
        description: 'whatever',
        note: 'whatever',
        amount: 500,
        createdAt: 1000
    }
    const expense = addExpense(expenseData);

    expect(expense).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
                    ...expenseData,
                    id: expect.any(String)
                 }
    })
})

test('Default Add Expense Action',()=>{
    const expense = addExpense();
    expect(expense).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            description:'',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
            }
    })
})