import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseForm} from '../../components/ExpenseForm'
import moment from 'moment'
import expenses from '../fixtures/expenses'

test('Render ExpenseForm Correctly', ()=>{
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

test('Render ExpenseForm with Data Correctly', ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Render Error on Invalid Form Submission', ()=>{
    const wrapper = <ExpenseForm/>
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
})

test('Set Description on Input Change', ()=>{
    const value = 'New Description'
    const wrapper = <ExpenseForm/>
    expect(wrapper).toMatchSnapshot();
    // There are multiple INPUT FIELDS, we want just first one, at(0)
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
        // From e.target.value
    })
    expect(wrapper.state('description')).toBe(value)
    // expect(wrapper).toMatchSnapshot();
})

test('Set Note on Input Change', ()=>{
    const value = 'New Note'
    const wrapper = <ExpenseForm/>
    expect(wrapper).toMatchSnapshot();
    wrapper.find('textarea').simulate('change', {
        target: {value}
        // From e.target.value
    })
    expect(wrapper.state('note')).toBe(value)
    // expect(wrapper).toMatchSnapshot();
})

test('Set Amount on Valid Input Change', ()=>{
    const value = '23.50'
    const wrapper = <ExpenseForm/>
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').at(1).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('Do NOT set amount on Invalid Input Change', ()=>{
    const value = '12.122'
    const wrapper = <ExpenseForm/>
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').simulate('change', {
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('')
})

test('Call onSubmit prop for valid form submission', ()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    })
})

test('Set new date on date change', ()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm />)
    // onDateChange() function is returned by prop method; method chaining is used to call onDateChange with now.
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('Set Calendar focus on change', ()=>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toBe(focused)
})








