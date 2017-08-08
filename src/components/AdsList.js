import React, { Component } from 'react';

const ads = [
  {
    id : 'classic',
    name : 'Classic Ad',
    description: 'Offers the most basic level of advertisement',
    price: 269.99
  },
  {
    id : 'standout',
    name : 'Standout Ad',
    description: 'Allows advertisers to use a company logo and use a longer presentation text',
    price: 322.99
  },
  {
    id : 'premium',
    name : 'Premium Ad',
    description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
    price: 394.99
  },

]

class AdsList extends Component {

  render() {
    return (
      <div>
        <h1>Ads List</h1>
        <table>
          <thead>
            <tr>
              <th>
                ID
              </th>
              <th>
                Name
              </th>
              <th>
                Description
              </th>
              <th>
                Price USD
              </th>
              <th>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
          {
            ads.map((ad, i) => {
              return (<tr key={i}>
                <td>{ad.id}</td>
                <td>{ad.name}</td>
                <td>{ad.description}</td>
                <td>{ad.price}</td>
                <td>
                  <button onClick={this.addToCart.bind(this)}>Add to cart</button>
                </td>
              </tr>)
            })
          }
          </tbody>
        </table>
      </div>
    );
  }

  addToCart(e) {
    e.preventDefault();
    console.log('add to cart');
  }
}

export default AdsList;
