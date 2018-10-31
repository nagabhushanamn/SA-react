


import { BUY } from '../constants'


export function cartReducer(state = [], action) {
    switch (action.type) {
        case 'BUY_ASYNC':
            return [...state, action.item]
        default:
            return state;
    }
}