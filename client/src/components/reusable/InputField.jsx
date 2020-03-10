import React from 'react';
import { Field } from 'redux-form';

import { Label, TextInputWrapper } from './InputField.css';

const styles = {
    margin: '10px 0 10px 10px',
    minHeight: '20px',
    width: '200px',
    borderRadius: '5px',
    padding: '0 20px 0 5px'
}

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
            className="input-form"
            name={fieldName}
            placeholder={placeholder}
            type={type}
            style={styles}
        />
    </TextInputWrapper>

export default InputField;