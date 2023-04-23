import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import IceReducer from "./icdcream/IceCreamReducer";
import { combineReducers } from "redux";
import logger from "redux-logger";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer=combineReducers({
    cake:cakeReducer,
    ice:IceReducer
})


const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))///exort this store to rea t app
export default store
