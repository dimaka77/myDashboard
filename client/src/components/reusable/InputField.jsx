import React from 'react';
import { Field } from 'redux-form';

import { Label, TextInputWrapper, TextInput } from './InputField.css';

const InputField = { labelTxt, fieldName, placeholder, type } => {
    <TextInputWrapper>
        <Label>{labelTxt}</Label>
        <Field
            component={TextInput}
            name="firstName"
            placeholder="First name"
            type="text"
        />
    </TextInputWrapper>
}

export default InputField;