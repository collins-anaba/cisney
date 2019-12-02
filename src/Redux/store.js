import {createStore, combineReducers, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from './reducer'

const mainReducer = combineReducers ({
    user: reducer
})

export default createStore(mainReducer, applyMiddleware(promiseMiddleware))