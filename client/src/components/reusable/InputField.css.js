import styled from 'styled-components';


export const TextInputWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`

export const Label = styled.label`
    color: #2556DA;
`

export const TextInput = styled.input`
    margin: 10px 0 10px 10px;
    min-height: 20px;
    width: 200px;
    :focus {
        outline: none;
    }
`