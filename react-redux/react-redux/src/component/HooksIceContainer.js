import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyIce } from '../redux/indexx'


function HooksIceContainer() {
    const numOfIce=useSelector(state=>state.ice.numOfIce)
    const dispatch =useDispatch()
  return (
    <div>
        <h2> numOfIce {numOfIce}</h2>
        <button onClick={()=>{dispatch(buyIce())}} >Buy </button>
    </div>
  )
}

export default HooksIceContainer