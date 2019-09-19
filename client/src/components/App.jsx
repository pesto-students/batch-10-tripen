import React from 'react';
import Header from './organisms/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import TimeLine from './pages/TimeLine/TimeLine';
import { BrowserRouter, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/timeline" exact component={TimeLine}></Route>
      </BrowserRouter>
    </div>
  );
}
