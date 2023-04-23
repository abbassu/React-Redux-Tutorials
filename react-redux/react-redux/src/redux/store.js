import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

const store= createStore(cakeReducer)///exort this store to rea t app
export default store
