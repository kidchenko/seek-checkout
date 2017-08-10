import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PrivateRoute from './PrivateRoute';
import AdsList from './components/AdsList';
import CustomerList from './components/CustomerList';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />

          <Route exact path="/" component={CustomerList}/>
          <PrivateRoute path="/ads" component={AdsList}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
