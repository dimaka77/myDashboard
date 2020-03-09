import React from 'react';
import { InputForm, InputFormWrapper } from './Singup.css';

import { Field, reduxForm } from 'redux-form';

const SignUp = props => {
    const { handleSubmit } = props;
    return (
        <InputFormWrapper>
            <InputForm onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field name="email" component="input" type="email" />
                </div>
                <button type="submit">Submit</button>
            </InputForm>
        </InputFormWrapper>
    );
};

export default reduxForm({ form: 'singup' })(SignUp);
