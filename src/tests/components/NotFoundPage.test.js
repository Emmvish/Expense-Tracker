import React from 'react';
import NotFoundPage from '../../components/NotFoundPage'
import {shallow} from 'enzyme';

test('Render NotFoundPage Component', ()=>{
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot();
})