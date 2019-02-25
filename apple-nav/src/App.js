import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import Nav from './components/Nav';
import SubNav from './components/SubNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Am I here?</h1>
        <Route className="navWrapper" component={NavWrapper}></Route>
        <Route className="nav" component={Nav}></Route>
        <Route className="subNav" component={SubNav}></Route>
      </div>
    );
  }
}

export default App;
