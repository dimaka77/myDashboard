import axios from 'axios';

export const loginAPI = (props) => {
    axios.post('/api/login', {
        email: props.email,
        password: props.password
    }).then(resp => console.log(resp));
}

export const signUpAPI = (props) => {
    axios.post('/api/signup', {
        email: props.email,
        firstName: props.firstName,
        lastName: props.lastName,
        password: props.password
    }).then(resp => console.log(resp));
}