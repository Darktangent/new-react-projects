import React, { Component } from 'react'
const Action =(props)=>(
  //   handlePick(){
  // alert('handlepick')
  //   }
  
  <div>
  <button disabled={!props.hasOptions} onClick={props.handlePick}>What Should I do?</button>
  </div>
  )
  
  export default Action