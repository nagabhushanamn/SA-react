import React, { Component } from 'react';
import Product from './Product';

import { loadProducts } from '../actions/products';
import { connect } from 'react-redux'

class ProductList extends Component {


    componentDidMount() {
        this.props.loadProducts('ele', 2);
    }
    renderProducts() {
        let { products } = this.props;
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


function mapStateToProps(state) {
    return {
        products: state['shop-products']
    }
}
function mapDispathToProps(dispatch) {
    return {
        loadProducts: () => { dispatch(loadProducts()) }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(ProductList);
