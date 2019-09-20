import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';
import Calendar from "./views/Calendar";

const routing = (
        <Router>
            <div>
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to="/Calendar">
                            Calendar
                        </NavLink>
                    </li>
                </ul>
                <hr />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/calendar" component={Calendar} />
                </Switch>
            </div>
        </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
