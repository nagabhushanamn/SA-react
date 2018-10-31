import React, { Component } from 'react';
import classNames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm_v2';

import { loadReviews, submitNewReview } from '../actions/reviews'
import { buy } from '../actions/cart'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
        }
    }

    changeTab(index) {
        this.setState({ tab: index }, () => {
            let { actions, product } = this.props;
            if (index === 3) {
                actions.loadReviews(product.id)
            }
        });
    }
    addNewReview(newReview) {
        let { actions, product } = this.props;
        actions.submitNewReview(product.id, newReview)
    }
    handleBuy() {
        let { actions, product } = this.props;
        actions.buy(product,1);
    }
    renderBuyBtn(product) {
        if (product.canBuy) return <button onClick={e => this.handleBuy()} className="btn btn-primary btn-sm">buy</button>
        else return null;
    }
    renderReviews() {
        let { reviews } = this.props;
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


function mapStateToProps(state, props) {
    return {
        reviews: state.reviews[props.product.id] || []
    }
}
function mapDispathToProps(dispatch) {
    let actions = { loadReviews, submitNewReview, buy }
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Product);