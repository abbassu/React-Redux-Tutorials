import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIce } from '../redux/indexx'
function ItemContainer(props) {
  return (
    
    <div>
        <h2>
            number fo item {props.item}
        </h2>
        <button onClick={props.buyItem}> buy items</button>
    </div>
  )
}

const mapStateToProps =(state,ownProps)=>{/////it is referd to how owner for this props demand on props which is passed from parent
  const item = ownProps.cake? state.cake.numOfCake : state.ice.numOfIce
    return{
        item:item
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
  const dispatchFunction = ownProps.cake ? ()=>{dispatch(buyCake())}:()=>{dispatch(buyIce())}
  return {
    buyItem : dispatchFunction
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)