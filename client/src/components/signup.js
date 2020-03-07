import React from 'react';
import { Field, reduxForm } from 'redux-form';

const SignUp = props => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit}>TEST{/* form body*/}</form>;
};

export default reduxForm({ form: 'singup' })(SignUp);
