
import { LOAD_PRODUCTS_SUCCESS } from '../constants'

export function loadProducts(cat, size) {

    return function (dispatch) {

        let api = "http://0.0.0.0:8080/api/products";
        fetch(api)
            .then(response => response.json())
            .then(products => {
                dispatch({ type: LOAD_PRODUCTS_SUCCESS, products }) // Async Action
            })

    }

}