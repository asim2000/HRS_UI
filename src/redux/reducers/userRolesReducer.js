import initialState from "./initialState";
import * as actionTypes from '../actions/actionTypes'

export default function userRolesReducer(state = initialState.userRoles,action) {
    switch (action.type) {
        case actionTypes.SET_USER_ROLES:
            return action.payload
        default:
            return state
    }
}