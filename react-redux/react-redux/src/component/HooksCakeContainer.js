import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux/indexx'

function HooksCakeContainer() {
    const numberOfCake= useSelector(state=>state.cake.numOfCake)
    const ff=useDispatch()
  return (
    <div>
        <h2> number of cake {numberOfCake} </h2>
            <button onClick={()=>{ff(buyCake())}} > Buy </button>
    </div>
  )
}

export default HooksCakeContainer