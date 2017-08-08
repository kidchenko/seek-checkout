import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import AdsList from './components/AdsList';
import CustomerList from './components/CustomerList';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Customer List</Link></li>
            <li><Link to="/ads">Ads List</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={CustomerList}/>
          <Route path="/ads" component={AdsList}/>
        </div>
      </Router>
    );
  }
}

export default App;
