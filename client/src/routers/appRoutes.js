import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import { SignIn, SignUp } from '../components/home';
// APIs
import { loginAPI, signUpAPI } from '../actions/loginAndSignUp';


const handleLogin = (props) => {
    loginAPI(props);
}

const handleSignup = (props) => {
    signUpAPI(props);
}


const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/signup">
                <SignUp onSubmit={(values) => handleSignup(values)}/>
            </Route>
            <Route path="/signin">
                <SignIn onSubmit={(values) => handleLogin(values)}/>
            </Route>
            <Route path="/">
                <SignIn />
            </Route>
        </Switch>
    );
}

export default AppRoutes;