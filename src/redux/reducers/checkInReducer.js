import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function checkInReducer(state=initialState.checkIn,action) {
    switch (action.type) {
        case actionTypes.CHANGE_CHECK_IN:
            return action.payload
        default:
            return state;
    }
}