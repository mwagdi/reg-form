import React, { Component } from 'react';

class Form extends Component{
    handleSubmit = e => {
        e.preventDefault();
        console.log(e);
    }
    render(){
        const { title, fields } = this.props;
        return (
            <form onSubmit={this.handleSubmit} className="regForm">
                <h2 className="regForm__title">{title}</h2>
                {/* {fields.map((field, i) => )} */}
                <input className="regForm__submit" type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Form;