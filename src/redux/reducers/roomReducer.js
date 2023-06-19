import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function roomReducer(state=initialState.roomCount,action) {
    switch (action.type) {
        case actionTypes.INCREASE_ROOM_COUNT:
            return state + action.payload
        case actionTypes.DECREASE_ROOM_COUNT:
            return state>=2 ? state - action.payload : state
        default:
            return state;
    }
}