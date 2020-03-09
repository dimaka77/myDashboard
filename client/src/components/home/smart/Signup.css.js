import styled from 'styled-components';

export const InputForm = styled.form`
`;

export const InputFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`;

export const Title = styled.h1`
    color: #2556DA;
    text-align: center;
`

export const TextInput = styled.input`
    min-height: 20px;
    width: 200px;
    margin: 10px 0 10px 10px;
    :focus {
        outline: none;
    }
`

export const TextInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Label = styled.label`
    color: #2556DA;
`

export const Button = styled.button`
    color: #2556DA;
    align-self: flex-end;
    height: 30px;
    width: 80px;
    border-radius: 10px;
    border: 2px solid #2556DA;
    :focus {
        outline: none;
    }
    :active {
        border-style: initial;
        border: 2px solid #DA2559;
        color: #DA2559;
    }
`

export const ButtonWrapper = styled(TextInputWrapper)`
    justify-content: flex-end;
`