import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function loggedInUserReducer(state=initialState.loggedInUser,action) {
    switch (action.type) {
        case actionTypes.SET_LOGGED_IN_USER:
            return action.payload
        default:
            return state
    }
}