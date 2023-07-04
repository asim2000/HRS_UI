import * as actionTypes from './actionTypes'

export const changeCustomerType = customerType => {
    return {
        type:actionTypes.CHANGE_CUSTOMER_TYPE,
        payload:customerType
    }
}