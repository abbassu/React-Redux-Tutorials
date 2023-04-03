const redux= require('redux')
const createStore=redux.createStore

const BUY_CAKE="BUY_CAKE"
const BUY_Ice_Cream="BUY_Ice_Cream"
function buyCake(){
    return{
        type: BUY_CAKE,
        info:"First redux actoin",
    }
}
function buyIceCream(){
    return{
        type: BUY_Ice_Cream,
        info:"First redux actoin",
    }
}
/// (previousState,action)=>{newState}

const initialState={
    numOfCakes:10,
    numOfIceCream:20
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes:state.numOfCakes -1
        }
        case BUY_Ice_Cream:return{
            ...state,
            numOfIceCream:state.numOfIceCream -1
        }
        default : return state
    }////  switch
}

const store=createStore(reducer)
console.log("initial state",store.getState())
const unsubscribe=store.subscribe(()=>{
console.log("UpdateState",store.getState())   
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
