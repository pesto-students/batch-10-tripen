import React from 'react';
import Header from './organisms/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import TimeLinePage from './pages/TimeLinePage/TimeLinePage';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <>
        <Header></Header>
        <Route path='/' exact component={HomePage}></Route>
        <Route path='/timeline' exact component={TimeLinePage}></Route>
      </>
    </Router>
  );
}
