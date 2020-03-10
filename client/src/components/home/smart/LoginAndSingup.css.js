import styled from 'styled-components';


export const InputForm = styled.form`
`;

export const InputFormWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
`;

export const Title = styled.h1`
    color: #2556DA;
    text-align: center;
`

export const TextInput = styled.input`
    margin: 10px 0 10px 10px;
    min-height: 20px;
    width: 200px;
    border-radius: 10px;
    :focus {
        outline: none;
    }
`

export const TextInputWrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`

export const Label = styled.label`
    color: #2556DA;
`

export const Button = styled.button`
    align-self: flex-end;
    border-radius: 10px;
    border: 2px solid #2556DA;
    color: #2556DA;
    height: 30px;
    width: 80px;
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

export const LinkWrapper = styled(TextInputWrapper)`
    justify-content: center;
`

export const SwitchPage = styled.a`
    cursor: pointer;
    color: #2556DA;
    font-size: 12px;
    margin: 10px;
    text-decoration: underline;
`