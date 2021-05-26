import React from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Project from "../Project/index.jsx";
import history from "../browserHistory.js";


const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route
                    path="/"
                    render={() => <Project/>}
                />
            </Switch>
        </Router>
    );
};

export default Routes;
