import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ViewCart from './components/ViewCart';
import Home from './components/Home'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NotFound from './components/NotFound';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
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
  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item);
    this.setState({ cart })
  }
  renderProducts() {
    let { products } = this.state;
    return products.map((product, idx) => {
      return (
        <Product onBuy={(item, qty) => this.addToCart(item, qty)} product={product} key={idx} />
      )
    })

  }

  render() {
    let { cart } = this.state
    return (
      <div className="container">

        <Router>
          <div>
            <Navbar title="online shopping" />
            <hr />
            <i className="fa fa-shopping-cart"></i>
            <span className="badge badge-primary">{cart.length}</span> item(s) in cart
            <hr />
            <ul className="nav justify-content">
              <li className="nav-item">
                <Link className="nav-link active" to="products">View Products</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="/cart">View Cart</Link>
              </li>
            </ul>
            <hr />

            <Switch>
              <Route exact={true} path={"/"} component={Home} />
              <Route path={"/products"} render={() => this.renderProducts()} />
              <Route path={"/cart"} render={() => <ViewCart cart={cart} />} />
              <Route component={NotFound} />
            </Switch>

          </div>
        </Router>

      </div>
    );
  }
}

export default App;
