import React, { PureComponent } from 'react';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import { loginAPI, signUpAPI } from './actions/loginAndSignUp';
import AppRoutes from './routers/appRoutes';
import './App.css';

// Redux store
const store = createStore(rootReducer);

class App extends PureComponent {
    constructor(props){
        super(props);
    }

    handleLogin = (props) => {
        loginAPI(props);
    }

    handleSignup = (props) => {
        signUpAPI(props);
    }
   
    render() {
            return (
                <Provider store={store}>
                <Router>
                    <div>
                       <AppRoutes />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
