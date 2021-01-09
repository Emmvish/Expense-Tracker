import React from 'react';
import {EditExpensePage} from '../../components/EditExpensePage'
import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper, expense;

beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn() };
    expense = expense[1];
    wrapper = shallow(<EditExpensePage editExpense={editExpense} removeExpense={removeExpense} history={history} expense={expense}/>);
})

test('Render EditExpensePage Correctly', ()=>{
    expect(wrapper).toMatchSnapshot();
})

test('Handling onSubmit form', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenCalledWith("/")
    expect(editExpense).toHaveBeenCalledWith(expense.id,expenses[1])
})

test('Handling Expense Removal by onClick', ()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith("/")
    expect(removeExpense).toHaveBeenCalledWith({id: expense.id})
})