

import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers';
import ReduxThunk from 'redux-thunk'


import { composeWithDevTools } from 'redux-devtools-extension';

const preloadedState = {
    'shop-products': [
        { id: 0, name: 'sample-item', price: 100.00 }
    ],
    reviews: {},
    cart: []
}

let middleware = [
    ReduxThunk
];

// in dev, to connect store with dev-tools

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(...middleware),
));

export default store;