import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function adultReducer(state=initialState.adultCount,action) {
    switch (action.type) {
        case actionTypes.INCREASE_ADULT_COUNT:
            return state + action.payload
        case actionTypes.DECREASE_ADULT_COUNT:
            return state>=2 ? state - action.payload : state
        default:
            return state;
    }
}