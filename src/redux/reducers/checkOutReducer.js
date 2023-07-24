import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function checkInReducer(state=initialState.checkOut,action) {
    switch (action.type) {
        case actionTypes.CHANGE_CHECK_OUT:
            return action.payload
        default:
            return state;
    }
}