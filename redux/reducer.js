import { combineReducers } from 'redux';

import * as Types from './types';
import { fulfilled } from './types'

const userReducer = (state = {}, action) => {
    let data;

    switch (action.type) {
        default:
            break;
        case fulfilled(Types.LOGIN):
            data = action.payload.data;

            state = {
                ...state,
                loginSuccess: 'true'
            }
            break;
    }
}

const contentReducer = (state = {}, action) => {

}

export default combineReducers({
    users: userReducer,
    content: contentReducer
});