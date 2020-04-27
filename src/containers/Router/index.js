
import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import ArticlePage from '../ArticlePage';
import UserPage from '../UserPage';
import TaskPage from '../TaskPage';
import AccountPage from '../AccountPage';
import NotFoundPage from '../NotFoundPage';
import Testing from '../Testing';
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/article" component={ArticlePage} />
        <Route exact path="/task" component={TaskPage} />
        <Route exact path="/user" component={UserPage} />
        <Route exact path="/account" component={AccountPage} />
        <Route exact path="/testing" component={Testing} />
        <Route exact path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
