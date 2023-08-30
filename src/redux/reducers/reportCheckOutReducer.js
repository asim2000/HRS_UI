import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function reportCheckOutReducer(state=initialState.reportCheckOut,action) {
    switch (action.type) {
        case actionTypes.CHANGE_REPORT_CHECK_OUT:
            return action.payload
        default:
            return state;
    }
}