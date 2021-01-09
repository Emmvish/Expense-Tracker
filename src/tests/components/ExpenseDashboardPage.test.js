import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'
import {shallow} from 'enzyme';

test('Render ExpenseDashboardPage Component', ()=>{
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot();
})