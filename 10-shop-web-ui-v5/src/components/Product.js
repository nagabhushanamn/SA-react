import React, { Component } from 'react';
import classNames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm_v2';

import store from '../store';
import { loadReviews, submitNewReview } from '../actions/reviews'
import { buy } from '../actions/cart'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
            reviews: []
        }
    }
    componentDidMount() {
        let { product } = this.props;
        store.subscribe(() => {
            console.log(product.id);
            let state = store.getState();
            let reviews = state.reviews[product.id] || [];
            this.setState({ reviews })
        });
    }
    changeTab(index) {
        this.setState({ tab: index }, () => {
            let id = this.props.product.id;
            if (index === 3) {
                store.dispatch(loadReviews(id))
            }
        });
    }
    addNewReview(newReview) {
        let id = this.props.product.id;
        store.dispatch(submitNewReview(id, newReview))
    }
    handleBuy() {
        let { product } = this.props;
        store.dispatch(buy(product, 1))
    }
    renderBuyBtn(product) {
        if (product.canBuy) return <button onClick={e => this.handleBuy()} className="btn btn-primary btn-sm">buy</button>
        else return null;
    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review review={review} key={idx} />
        })
    }
    renderTabPanel(product) {
        let { tab } = this.state;
        switch (tab) {
            case 1: return (<div>{product.description}</div>)
            case 2: return (<div>Not Yet</div>)
            case 3: return (
                <div>
                    {this.renderReviews()}
                    <hr />
                    <ReviewForm onNewReview={newReview => this.addNewReview(newReview)} />
                </div>)
            default: return null;
        }
    }
    render() {
        let { product } = this.props;
        let { tab } = this.state;
        return (
            <div>
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-3 col-sm-3 col-md-3">
                            <img src={product.image} className="img-fluid" alt={product.name} />
                        </div>
                        <div className="col-9 col-sm-9 col-md-9">
                            <h5>{product.name}</h5>
                            <h6>&#8377;{product.price}</h6>
                            {this.renderBuyBtn(product)}
                            <hr />
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className={tab === 1 ? 'nav-link active' : 'nav-link'} onClick={e => this.changeTab(1)} href="#/">Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className={classNames('nav-link', { active: tab === 2 })} onClick={e => this.changeTab(2)} href="#/">Specification</a>
                                </li>
                                <li className="nav-item">
                                    <a className={classNames('nav-link', { active: tab === 3 })} onClick={e => this.changeTab(3)} href="#/">Reviews</a>
                                </li>
                            </ul>
                            {this.renderTabPanel(product)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;