import axios from 'axios';

export const loginAPI = (props) => {
    axios.post('/api/login', {
        email: props.email,
        password: props.password
    }).then(resp => console.log(resp));
}

export const signUpAPI = (props) => {
    axios.get('https://google.com').then(resp => console.log(resp));
}