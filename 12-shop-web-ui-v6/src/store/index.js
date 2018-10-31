

import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers';
import ReduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

import { composeWithDevTools } from 'redux-devtools-extension';

const preloadedState = {
    'shop-products': [
        { id: 0, name: 'sample-item', price: 100.00 }
    ],
    reviews: {},
    cart: []
}

const sagaMiddleware = createSagaMiddleware()

let middleware = [
    ReduxThunk,
    sagaMiddleware
];

// in dev, to connect store with dev-tools

const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
const store = createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(...middleware),
));


sagaMiddleware.run(rootSaga)

export default store;