import { put, takeLatest, all } from 'redux-saga/effects';

import * as Types from './types';
import { fulfilled } from './types'

import * as Actions from './actions';

function* workLogin() {
    console.log('IT HIT!')
    yield put(Actions.loginFulfilled, { data: { token: 'test' } });
}

function* watchLogin() {
    yield takeLatest(Types.LOGIN, workLogin)
}

export default function* root() {
    yield all([
        watchLogin()
    ])
}