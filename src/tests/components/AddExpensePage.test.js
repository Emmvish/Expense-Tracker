import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper;

// Create all dummy functions in one go for all test cases

beforeEach(() => {
	addExpense = jest.fn();
	history = { push: jest.fn() }
	wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>)
})

test('Render AddExpensePage correctly',()=>{
	expect(wrapper).toMatchSnapshot();
})

test('Handling onSubmit',() => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
	expect(history.push).toHaveBeenLastCalledWith('/')
	expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
});
