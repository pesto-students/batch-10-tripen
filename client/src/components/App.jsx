import React from 'react';
import Header from './organisms/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import TimeLinePage from './pages/TimeLinePage/TimeLinePage';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './organisms/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/sign-in"
          exact
          render={(props) => <HomePage {...props} modalState={true} />}
        />
        <Route
          path="/sign-up"
          exact
          render={(props) => (
            <HomePage {...props} modalState={true} signUp={true} />
          )}
        />
        <Route path="/timeline" component={TimeLinePage} />
        <Route path="/trip" exact component={TimeLinePage} />
        <PrivateRoute path="/profile" exact component={TimeLinePage} />
        <PrivateRoute path="/edit-timeline" component={TimeLinePage} />
        <PrivateRoute path="/create-timeline" component={TimeLinePage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}
