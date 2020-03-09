import React from 'react';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
// Router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// Components
import { Home, SignIn, SignUp } from './components/home';

import './App.css';

// Redux store
const store = createStore(rootReducer);

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <nav className="navigation-bar">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/signup">Signup</Link>
                            </li>
                            <li>
                                <Link to="/signin">Signin</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/signup">
                            <SignUp />
                        </Route>
                        <Route path="/signin">
                            <SignIn />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
