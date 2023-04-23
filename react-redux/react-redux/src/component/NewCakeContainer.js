import React, { useState } from 'react'
import {buyCake} from '../redux/indexx'
import { Connect, connect } from 'react-redux'
function NewCakeContainer(props) {
    const [number,setNumber]=useState() 
  return (
    <div>
        <h1>Number Of Cakes {props.numOfCake} </h1>
        <input type="text" value={number} name="" onChange={(e)=>{setNumber(e.target.value)}} id="" />
        <button onClick={()=>{props.buyCake(number)}} >Buy {number} Cake</button>
    </div>
  )
}
const mapStateToProps = state=>{
  return {
    numOfCake:state.numOfCake
  }
}

const mapDispatchToProps = dispatch=>{
  return {
    buyCake : num=>{dispatch(buyCake(num))}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)