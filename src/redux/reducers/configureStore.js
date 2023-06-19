import rootReducer from ".";
import {createStore} from 'redux'

export default function configureStore() {
    return createStore(rootReducer)
}