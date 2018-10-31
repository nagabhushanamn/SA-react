import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ViewCart from './components/ViewCart';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isCartOpen: false,
      cart: [],
      products:
        [
          {
            id: 111,
            name: 'Laptop',
            price: 198000,
            description: 'New mac pro',
            canBuy: true,
            image: 'images/Laptop.png'
          },
          {
            id: 222,
            name: 'Mobile',
            price: 18000,
            description: 'New F pro',
            canBuy: true,
            image: 'images/Mobile.png'
          }
        ]
    }
  }
  toggleCart() {
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen })
  }
  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item);
    this.setState({ cart })
  }
  renderProducts() {
    let { products, cart, isCartOpen } = this.state;
    if (isCartOpen) {
      return <ViewCart cart={cart} />
    } else {
      return products.map((product, idx) => {
        return (
          <Product onBuy={(item, qty) => this.addToCart(item, qty)} product={product} key={idx} />
        )
      })
    }
  }

  render() {
    let { cart, isCartOpen } = this.state
    return (
      <div className="container">
        <Navbar title="online shopping" />
        <hr />
        <i className="fa fa-shopping-cart"></i>&nbsp;
        <span className="badge badge-primary">{cart.length}</span> item(s) in cart
        <hr />
        <a onClick={e => this.toggleCart()} href="/#">{isCartOpen ? 'View Products' : 'View Cart'}</a>
        <hr />
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
