import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Form from './Form';

describe('Form', () => {
    
    test('renders without crashing', () => {
        shallow(<Form />);
    });
    
    test('renders correctly', () => {
        const wrapper = shallow(<Form />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    
    test('renders form with class regForm', () => {
        const wrapper = shallow(<Form />);
        expect(wrapper.exists('.regForm')).toEqual(true);
    })

});
