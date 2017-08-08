import React, { Component } from 'react';
import { classic, standout, premium } from './AdsModel';

const ads = [
  classic,
  standout,
  premium,
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
    console.log(e, 'add to cart');
  }
}

export default AdsList;
