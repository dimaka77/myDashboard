import React from 'react';
import {
    Input,
    MessageSpan,
    MessageWrapper
} from './InputComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';


const styles = {
    margin: '10px 0 10px 10px',
    minHeight: '20px',
    width: '200px',
    borderRadius: '5px',
    padding: '0 20px 0 5px'
}

const InputComponent = ({
    input,
    label,
    meta: { touched, error, warning },
    type
}) =>
    <div>
        <label>{label}</label>
        <div>
        <Input {...input} placeholder={label} type={type} style={styles} />
        </div>
        <MessageWrapper>
            {touched &&
                ((error && <MessageSpan>{error}<FontAwesomeIcon color="red" icon={faExclamationCircle} /></MessageSpan>) ||
                (warning && <MessageSpan>{warning}<FontAwesomeIcon color="yellow" icon={faExclamationCircle} /></MessageSpan>))}
        </MessageWrapper>
    </div> 

export default InputComponent;