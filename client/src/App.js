import React from 'react';
// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
// Router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// Components
import { Home, SingIn, SingUp } from './components';

import './App.css';

// Redux store
const store = createStore(rootReducer);

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/about">
                            <SingUp />
                        </Route>
                        <Route path="/users">
                            <SingIn />
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
