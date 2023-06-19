import initialState from "./initialState";
import * as actionTypes from '../actions/actionTypes'

export default function visibilityReducer(state=initialState.visibility,action) {
    switch (action.type) {
        case actionTypes.CHANGE_VISIBILITY:
            return state === 'visible' ? 'hidden' : 'visible'
        default:
            return state;
    }
}