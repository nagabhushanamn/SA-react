import React, { Component } from 'react';
import Product from './Product';

import { loadProducts } from '../actions/products';
import store from '../store'

class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            let products = store.getState()['shop-products']
            this.setState({ products })
        });
        store.dispatch(loadProducts('ele', 2));
    }
    renderProducts() {
        let { products } = this.state;
        return products.map((product, idx) => {
            return (
                <Product product={product} key={idx} />
            )
        })

    }

    render() {
        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

export default ProductList;