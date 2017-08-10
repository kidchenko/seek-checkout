import './App.css';

import React, { Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AdsList from './components/AdsList';
import SelectCustomerForm from './components/Customer/SelectCustomerForm';

class App extends Component {

  handlerSelectCustomer() {
    console.log('select customer')
  }

  render() {
    return (
        <div>
          <Header />
          <SelectCustomerForm />
          <AdsList />
          <Footer />
        </div>
    );
  }
}

export default App;
