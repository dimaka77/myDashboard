import React from 'react';
import { Field } from 'redux-form';

import { Label, TextInputWrapper, TextInput } from './InputField.css';

const InputField = ({
    labelTxt,
    fieldName,
    placeholder,
    type = 'text'
}) => 
    <TextInputWrapper>
        <Label>{labelTxt}</Label>
        <Field
            component="input"
            name={fieldName}
            placeholder={placeholder}
            type={type}
        />
    </TextInputWrapper>

export default InputField;