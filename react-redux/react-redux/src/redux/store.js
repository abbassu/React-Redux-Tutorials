import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";
import IceReducer from "./icdcream/IceCreamReducer";
import { combineReducers } from "redux";
import logger from "redux-logger";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import UserReducer from "./user/userReducer";
import thunk from 'redux-thunk'

const rootReducer=combineReducers({
    cake:cakeReducer,
    ice:IceReducer,
    user:UserReducer
})


const store= createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))///exort this store to rea t app
export default store
