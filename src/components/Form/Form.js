import React, { Component } from 'react';
import FormInput from './FormInput';
import { convertToKey } from './helpers';

class Form extends Component{
    state = this.props.fields.reduce((acc, field) => {
        return {
            ...acc,
            [convertToKey(field.label)]: {
                value: "",
                filled: false
            }
        }
    },{ valid: false })
    
    handleSubmit = e => {
        e.preventDefault();
        console.log(e);
    }
    handleChange(value, filled, field){
        this.setState({
            ...this.state,
            [convertToKey(field)]: {
                value,
                filled
            }
        }, () => {
            this.validate(); 
        })
    }
    validate(){
        this.setState({
            valid: this.props.fields.reduce((acc, f) => {
                return acc && this.state[convertToKey(f.label)].filled
            }, true)
        })
    }
    render(){
        const { title, fields } = this.props;
        return (
            <form onSubmit={this.handleSubmit} className="regForm">
                <h2 className="regForm__title">{title}</h2>
                {fields.map((field, i) => <FormInput onChange={(value, filled) => this.handleChange(value, filled, field.label)} field={field} key={i} />)}
                <input className="regForm__submit" type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Form;