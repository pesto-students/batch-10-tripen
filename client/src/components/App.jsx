import React from "react";
import Header from "./organisms/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import TimeLinePage from "./pages/TimeLinePage/TimeLinePage";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./organisms/PrivateRoute/PrivateRoute";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/sign-in' exact render={props => <HomePage {...props} modalState={true} />} />
        <Route
          path='/sign-up'
          exact
          render={props => <HomePage {...props} modalState={true} signUp={true} />}
        />
        <Route path='/timeline/:timeline_id' component={TimeLinePage} />
        <Route path='/trip/:timeline_id' exact component={TimeLinePage} />
        <PrivateRoute path='/profile' exact component={TimeLinePage} />
        <PrivateRoute path='/edit-timeline/:timeline_id' edit={true} component={TimeLinePage} />
        <PrivateRoute path='/create-timeline' edit={true} component={TimeLinePage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}
