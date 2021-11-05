import React from 'react';
import Home from '../Pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Account from '../Pages/Account';
import Register from '../Pages/Register/Register';
import { Login } from '../Pages/Login/Login';
import { AccountInfo } from '../Pages/Register/AccountInfo';

const PagesRouting = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/login" exact={true} component={Login} />
                    <Route path="/register" exact={true} component={Register} />
                    <Route path="/register/account" exact={true} component={AccountInfo} />
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/account" exact={true} component={Account} />
                    <Route path="/notifications" exact={true} component={About} />
                </Switch>
            </Router>
        </div>
    );
};


function About() {
    return <h2>About</h2>
}
export default PagesRouting;