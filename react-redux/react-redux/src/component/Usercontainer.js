import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchUsers } from '../redux/user/userAction'
import { connect } from 'react-redux'

function Usercontainer(props) {
    useEffect(()=>{
        props.fetchUsers()
    },[])
      
    const [users,setusers]=useState()
  return (
   props.userData.loading? ( 
    <h2>Loading</h2>
    ):props.userData.error ? (
        <h2> {props.userData.error} </h2>
    ):(
        <>
        <h2>lisy of user</h2>
        {props.userData.users.map((e)=>{
            return(
                <div>
                    {e.name}
                </div>
            )

        })}
        </>
        
    )


  )
}

const mapStateToProps = state=>{
    return {
        userData:state.user
    }
}

const mapDispatchToProps = dispatch=>{
    return {
      fetchUsers : ()=>{dispatch(fetchUsers())}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Usercontainer)