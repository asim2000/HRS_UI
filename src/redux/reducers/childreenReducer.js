import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function childreenReducer(state=initialState.childreenCount,action) {
    switch (action.type) {
        case actionTypes.INCREASE_CHILDREEN_COUNT:
            return state + action.payload
        case actionTypes.DECREASE_CHILDREEN_COUNT:
            return state>=1 ? state - action.payload : state
        default:
            return state;
    }
}