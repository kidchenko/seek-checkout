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
      cart: new Checkout(customers[0].rules)
    }
  }

  selectCustomer(customerName) {
    console.log('app customerChanged', customerName);
    const customer = _.find(customers, { name : customerName });
    this.setState({
      customer,
      cart : new Checkout(customer.rules)
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
      cart: new Checkout(this.state.customer.rules)
    });
  }

  renderCheckoutForm() {
    if (this.state.cart.getItens().length === 0) return;
    return <CheckoutForm
                itens={this.state.cart.getItens()}
                total={this.state.cart.total()}
                onCheckout={this.checkout.bind(this)}
                />
  }



  render() {
    return (
        <article className="wrap">
          <Header />
          <main role="main" className="container">
            <CustomerSelector
                customers={customers}
                onSelectCustomer={this.selectCustomer.bind(this)} />
            <ProductList
              products={products}
              onAddToCart={this.addToCart.bind(this)} />
            {
              this.renderCheckoutForm()
            }
          </main>
          <Footer />
        </article>
    );
  }
}
