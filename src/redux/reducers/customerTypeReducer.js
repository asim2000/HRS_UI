import * as actionTypes from '../actions/actionTypes'
import initialState from './initialState';

export default function customerTypeReducer(state = initialState.customerType,action){
    switch (action.type) {
        case actionTypes.CHANGE_CUSTOMER_TYPE:
            return action.payload
        default:
            return state;
    }
}