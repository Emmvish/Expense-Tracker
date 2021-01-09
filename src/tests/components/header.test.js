import React from 'react';
import Header from '../../components/Header'
// import ReactShadowRenderer from 'react-test-renderer/shallow'
import {shallow} from 'enzyme';

test('Render Header Component', ()=>{
    // const renderer = new ReactShadowRenderer();
    // renderer.render(<Header/>)
    // Test will always pass the first time as no snapshot of header component exists.
    // Mismatched snapshot of component can be upgraded by pressing 'u' key.
    // expect(renderer.getRenderOutput()).toMatchSnapshot(); 
    const wrapper = shallow(<Header />)
    // expect(weapper.find('h1').text()).toBe('Expensify')
    expect(wrapper).toMatchSnapshot();
})