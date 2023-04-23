import { BUY_ICE } from "./IceCreamTypes";
const initialState={
    numOfIce:15
}

const IceReducer = (state=initialState,action)=>{
    console.log("fff",state.numOfIce)

    switch (action.type){
        case BUY_ICE:return{
            ...state,
            numOfIce:state.numOfIce-1
        }
        default :return  state
    }

}

export default IceReducer