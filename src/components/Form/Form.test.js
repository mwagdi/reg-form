import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Form from './Form';

describe('Form', () => {
    const fields = [
        {
            label: "Email",
            type: "email"
        },
        {
            label: "Password",
            type: "password"
        }
    ]
    
    test('renders without crashing', () => {
        shallow(<Form fields={fields} />);
    });
    
    test('renders correctly', () => {
        const wrapper = shallow(<Form fields={fields} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    
    test('renders form with class regForm', () => {
        const wrapper = shallow(<Form fields={fields} />);
        expect(wrapper.exists('.regForm')).toEqual(true);
    })

    test('renders FormInputs', () => {
        const wrapper = shallow(<Form fields={fields} />)
        expect(wrapper.find('FormInput').length).toEqual(fields.length);
    })

});
