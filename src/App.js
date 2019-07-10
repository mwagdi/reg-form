import React, { Fragment } from 'react';
import Form from './components/Form/Form';

const fields = [
    {
        label: "Email",
        name: "email",
        type: "email",
        conditions: [
            {
                title: "Valid email",
                test: str => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str)
            }
        ]
    },
    {
        label: "Password",
        name: "password",
        type: "password",
        conditions: [
            {
                title: "8+ characters",
                test: str => str.length > 7
            },
            {
                title: "lowercase letter",
                test: str => str.replace(/[^a-z]/g,"").length > 0
            },
            {
                title: "uppercase letter",
                test: str => str.replace(/[^A-Z]/g,"").length > 0
            },
            {
                title: "number",
                test: str => str.replace(/[^0-9]/g,"").length > 0
            },
            {
                title: "special character",
                test: str => /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str)
            }
        ]
    }
]

export default () => (
    <Fragment>
        <Form title="Registration Form" fields={fields} />
    </Fragment>
)