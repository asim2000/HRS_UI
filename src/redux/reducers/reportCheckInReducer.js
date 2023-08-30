import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function reportCheckInReducer(state=initialState.reportCheckIn,action) {
    switch (action.type) {
        case actionTypes.CHANGE_REPORT_CHECK_IN:
            return action.payload
        default:
            return state;
    }
}