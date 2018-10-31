


import { LOAD_REVIEWS, SUBMIT_NEW_REVIEW } from '../constants'

/*

{
    "111":[
        {},
        {}
    ]
    "222":[
        {}
    ]
}

*/

export function reviewsReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_REVIEWS: {
            let { reviews: newReviews, productId } = action;
            let existingReviews = state[productId] || [];
            let reviews = existingReviews.concat(newReviews)
            return Object.assign({}, state, { [productId]: reviews })
        }
        case SUBMIT_NEW_REVIEW: {
            let { review: newReview, productId } = action;
            let existingReviews = state[productId] || [];
            let reviews = existingReviews.concat(newReview)
            return Object.assign({}, state, { [productId]: reviews })
        }
        default:
            return state;
    }
}