
import { BUY_CAKE } from "./cakeType"

const initialState={
    numOfCake:11
}


const cakeReducer =(state=initialState,action)=>{
    console.log("fffbbb")

    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCake:state.numOfCake-1
        }
        default: return state 
     }

}

export default cakeReducer