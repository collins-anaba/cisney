import {createStore, combineReducers, applymiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from ',/reducer';

const mainReducer = combineReducers ({
    user: reducer
})

export default createStore(mainReducer, applymiddleware(promiseMiddleware))