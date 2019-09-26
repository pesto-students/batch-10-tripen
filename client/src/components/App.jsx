/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './organisms/Header/Header';
import HomePage from '../containers/Home';
import TimeLinePage from './pages/TimeLinePage/TimeLinePage';
import PrivateRoute from './molecules/PrivateRoute';
import Profile from '../containers/Profile';
import NotFound from './pages/NotFound/NotFound';
import AuthState from '../context/auth/AuthState';
import setAuthToken from '../utils/setAuthToken';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => (
  <AuthState>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/sign-in" exact render={(props) => <HomePage {...props} modalState />} />
        <Route path="/sign-up" exact render={(props) => <HomePage {...props} modalState signUp />} />
        <Route path="/timeline/:timeline_id" exact component={TimeLinePage} />
        <Route path="/profile/:userId" exact component={Profile} />
        <PrivateRoute path="/profile" exact component={Profile} />
        <Route path="/profile/id" exact component={Profile} />
        <Route path="/profile/:id" exact component={Profile} />
        <PrivateRoute path="/edit-timeline/:timeline_id" edit component={TimeLinePage} />
        <PrivateRoute path="/create-timeline" edit component={TimeLinePage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </AuthState>
);

export default App;
