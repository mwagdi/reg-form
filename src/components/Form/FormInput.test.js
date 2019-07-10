import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import FormInput from './FormInput';

describe('FormInput', () => {
    const field = {
        label: "Text Field",
        type: "text",
        name: "text",
        conditions: [
            {
                title: "Valid text",
                test: str => str.length > 9
            }
        ]
    }
    test('renders without crashing', () => {
        shallow(<FormInput field={field} />);
    });
    test('renders correctly', () => {
        const wrapper = shallow(<FormInput field={field} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
    test('renders div with class regForm__field', () => {
        const wrapper = shallow(<FormInput field={field} />);
        expect(wrapper.exists('.regForm__field')).toEqual(true);
    })
})