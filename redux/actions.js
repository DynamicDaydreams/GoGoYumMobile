import { createAction } from 'redux-actions'

import * as Types from './types';
import { fulfilled } from './types'

export const login = (userName, password) => ({
    type: Types.LOGIN,
    userName,
    password
});
export const loginFulfilled = createAction(fulfilled(Types.LOGIN), (payload) => payload);