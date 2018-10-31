
import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest, all } from 'redux-saga/effects'



function* buyAsync() {
    yield delay(3000)// like api call
    yield put({ type: 'BUY_ASYNC' })
}


function* watchIncrementAsync() {
    yield takeLatest('BUY', buyAsync)
}


// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        watchIncrementAsync()
    ])
}