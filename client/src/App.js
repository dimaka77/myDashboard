import React, { PureComponent } from 'react';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Components
import { SignIn, SignUp } from './components/home';

import { loginAPI, signUpAPI } from './actions/singin_singup';

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
                        {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/signup">
                                <SignUp onSubmit={(values) => this.handleSignup(values)}/>
                            </Route>
                            <Route path="/signin">
                                <SignIn onSubmit={(values) => this.handleLogin(values)}/>
                            </Route>
                            <Route path="/">
                                <SignIn />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
