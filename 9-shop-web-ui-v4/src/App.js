import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ViewCart from './components/ViewCart';
import Home from './components/Home'

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NotFound from './components/NotFound';
import ProductList from './components/ProductList';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
  }
  addToCart(item, qty) {
    let { cart } = this.state;
    cart = cart.concat(item);
    this.setState({ cart })
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
              <li className="nav-item">
                <Link className="nav-link" to="/cart">View Cart</Link>
              </li>
            </ul>
            <hr />

            <Switch>
              <Route exact={true} path={"/"} component={Home} />
              <Route path={"/products"} component={ProductList} />
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
