

import { LOAD_REVIEWS, SUBMIT_NEW_REVIEW } from '../constants'


export function loadReviews(productId) {
    //..
    return function (dispatch) {
        let api = `http://0.0.0.0:8080/api/products/${productId}/reviews`
        fetch(api)
            .then(response => response.json())
            .then(reviews => {
                dispatch({ type: LOAD_REVIEWS, reviews, productId })
            })
    }
}
export function submitNewReview(productId, review) {
    return function (dispatch) {
        let api = `http://0.0.0.0:8080/api/products/${productId}/reviews`
        fetch(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(savedReview => {
                dispatch({ type: SUBMIT_NEW_REVIEW, review: savedReview, productId })
            })
    }

}