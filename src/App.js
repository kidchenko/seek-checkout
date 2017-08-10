import './App.css';

import React, { Component } from 'react';
import _ from 'lodash';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CustomerSelector from './components/Customer/CustomerSelector';
import ProductList from './components/Product/ProductList';
import CheckoutForm from './components/Checkout/CheckoutForm';

import { products } from './models/product';
import { customers } from './models/customer';
import Checkout from './models/checkout';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customer : customers[0],
      cart: new Checkout()
    }
  }

  selectCustomer(customer) {
    console.log('app customerChanged', customer);
    this.setState({
      customer : _.find(customers, { name : customer }),
      cart : new Checkout()
    })
  }

  addToCart(product) {
    this.setState({
      cart : this.state.cart.add(product)
    });
  }

  checkout() {
    alert(`You paid ${this.state.cart.total()}`)
    this.setState({
      cart: new Checkout()
    });
  }

  render() {
    return (
        <div>
          <Header />
          <CustomerSelector
              customers={customers}
              onSelectCustomer={this.selectCustomer.bind(this)} />
          <ProductList
              products={products}
              onAddToCart={this.addToCart.bind(this)} />
          <CheckoutForm
              itens={this.state.cart.getItens()}
              total={this.state.cart.total()}
              onCheckout={this.checkout.bind(this)}
               />
          <Footer />
        </div>
    );
  }
}
