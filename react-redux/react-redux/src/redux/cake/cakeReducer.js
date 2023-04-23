
import { BUY_CAKE } from "./cakeType"

const initialState={
    numOfCake:11
}


const cakeReducer =(state=initialState,action)=>{
    console.log("fffbbb")

    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCake:state.numOfCake-action.payload
        }
        default: return state 
     }

}

export default cakeReducer