import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from "react-router-dom";
import DashboardPage from "../components/DashboardPage";
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={DashboardPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>);

export default AppRouter;