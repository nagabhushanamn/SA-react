import React, { Component } from 'react';
import Navbar from './components/Navbar';
import classNames from 'classnames';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tab: 1,
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
  changeTab(index) {
    this.setState({ tab: index });
  }
  renderBuyBtn(product) {
    if (product.canBuy) return <button className="btn btn-primary btn-sm">buy</button>
    else return null;
  }
  renderTabPanel(product) {
    let { tab } = this.state;
    switch (tab) {
      case 1: return (<div>{product.description}</div>)
      case 2: return (<div>Not Yet</div>)
      case 3: return (<div>None Yet</div>)
      default: return null;
    }
  }
  renderProducts() {
    let { products, tab } = this.state;
    return products.map((product, idx) => {
      return (
        <div key={idx} className="list-group-item">
          <div className="row">
            <div className="col-3 col-sm-3 col-md-3">
              <img src={product.image} className="img-fluid" alt={product.name}/>
            </div>
            <div className="col-9 col-sm-9 col-md-9">
              <h5>{product.name}</h5>
              <h6>&#8377;{product.price}</h6>
              {this.renderBuyBtn(product)}
              <hr />
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a className={tab === 1 ? 'nav-link active' : 'nav-link'} onClick={e => this.changeTab(1)} href="/#">Description</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link',{active:tab===2})} onClick={e => this.changeTab(2)} href="/#">Specification</a>
                </li>
                <li className="nav-item">
                  <a className={classNames('nav-link',{active:tab===3})} onClick={e => this.changeTab(3)} href="/#">Reviews</a>
                </li>
              </ul>
              {this.renderTabPanel(product)}
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="container">
        <Navbar title="online shopping" />
        <hr />
        <hr />
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
