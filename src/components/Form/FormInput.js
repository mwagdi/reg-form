import React, { Component } from 'react';

class FormInput extends Component{
    state = {
        input: "",
        conditions: this.props.field.conditions.map(condition => {
            return {
                title: condition.title,
                done: false
            }
        })
    }
    handleChange = e => {
        const { conditions, label } = this.props.field;
        this.setState({ input: e.target.value });
        let cArray = JSON.parse(JSON.stringify(this.state.conditions));
        cArray.forEach((c, i) => {
            c.done = conditions[i].test(e.target.value);
        });
        this.setState({ conditions: [...cArray] }, () => {
            const done = this.state.conditions.reduce((acc, c) => {
                return acc && c.done;
            }, true);
            this.props.onChange(this.state.input, done, label);
        });
    }
    render(){
        const { label, type, name } = this.props.field;
        const id = Math.random().toString(36).substr(2, 16);
        return (
            <div className="regForm__field">
                <label htmlFor={name}>{label}</label>
                <input value={this.state.input} onChange={this.handleChange} name={name} type={type} />
                {this.state.conditions.map((c, i) => <span key={i}>{c.title} - {c.done.toString()}</span>)}
            </div>
        )
    }
}

export default FormInput;