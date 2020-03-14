import React from 'react';
import { Field } from 'redux-form';
import { InputComponent } from '.';

import { Label, TextInputWrapper } from './InputField.css';

const InputField = ({
    labelTxt,
    fieldName,
    placeholder,
    type = 'text',
    validation
}) => 
    <TextInputWrapper>
        <Label>{labelTxt}</Label>
        <Field
            component={InputComponent}
            className="input-form"
            name={fieldName}
            placeholder={placeholder}
            type={type}
            validate={validation}
        />
    </TextInputWrapper>

export default InputField;