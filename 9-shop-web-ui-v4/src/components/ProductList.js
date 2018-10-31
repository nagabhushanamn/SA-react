import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        let api = "http://0.0.0.0:8080/api/products";
        fetch(api)
            .then(response => response.json())
            .then(products => {
                this.setState({ products })
            })
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
        return (
            <div>
                {this.renderProducts()}
            </div>
        );
    }
}

export default ProductList;