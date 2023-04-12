const redux= require('redux')
const createStore=redux.createStore
const combineReducer=redux.combineReducers
const applyMiddleware= redux.applyMiddleware
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()

const BUY_CAKE="BUY_CAKE"
const BUY_ICE_CREAM="BUY_ICE_CREAM"
function buyCake(){
    return{
        type: BUY_CAKE,
        info:"First redux actoin",
    }
}
function buyIceCream(){
    return{
        type: BUY_ICE_CREAM,
        info:"First redux actoin",
    }
}

const initialIceState={
    numOfIceCream:20
}

const initialCakeState={
    numOfCakes:10,
}

/// (previousState,action)=>{newState}
// const initialState={
//     numOfCakes:10,
//     numOfIceCream:20
// }
// const reducer=(state=initialState,action)=>{
//     switch(action.type){
//         case BUY_CAKE:return{
//             ...state,
//             numOfCakes:state.numOfCakes -1
//         }
//         case BUY_Ice_Cream:return{
//             ...state,
//             numOfIceCream:state.numOfIceCream -1
//         }
//         default : return state
//     }////  switch
// }

const CakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes -1
        }
        default : return state
    }////  switch
}

const IceReducer=(state=initialIceState,action)=>{
    switch(action.type){
        case BUY_ICE_CREAM:return{
            ...state,
            numOfIceCream:state.numOfIceCream -1
        }
        default : return state
    }////  switch
}

const rootReducer=combineReducer({
    cake:CakeReducer,
    ice:IceReducer
})
const store=createStore(rootReducer,applyMiddleware(logger))
console.log("initial state",store.getState())
const unsubscribe=store.subscribe(()=>{
// console.log("UpdateState",store.getState())   
})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
unsubscribe()
store.dispatch(buyCake())
store.dispatch(buyCake())
