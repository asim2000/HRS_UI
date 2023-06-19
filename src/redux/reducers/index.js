import { combineReducers } from "redux";
import visibilityReducer from './visibilityReducer'
import adultReducer from './adultReducer'
import childreenReducer from './childreenReducer'
import roomReducer from './roomReducer'

const rootReducer = combineReducers({
    visibilityReducer,
    adultReducer,
    childreenReducer,
    roomReducer
})

export default rootReducer;