import React from "react";
import Header from "./organisms/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import TimeLinePage from "./pages/TimeLinePage/TimeLinePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
<<<<<<< HEAD
      <Header />
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/timeline/:id' exact component={TimeLinePage}></Route>
          <Route path='/edit-timeline/:timelineid' exact component={TimeLinePage}></Route>
          {/* <Route path='/profile/:userid' exact component={ProfilePage}></Route> */}
          <Route component={HomePage} />
        </Switch>
      </Router>
=======
      <Header></Header>
      <BrowserRouter>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/timeline/:id" exact component={TimeLinePage}></Route>
      </BrowserRouter>
>>>>>>> hackathon-timeline
    </div>
  );
}
