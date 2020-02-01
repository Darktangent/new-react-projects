import React, { Component } from 'react'
import Option from "./Option"
const Options=(props) =>{
  // constructor(props){
  // super(props)
  // this.handleRemoveAll=this.handleRemoveAll.bind(this)
  // }
  // handleRemoveAll(){
  //   console.log(this.props.options);
    
  //   alert("Remove all options")
  // }
 
 
    const {options,handleDeleteOption}=props
    return (
      <div>
      <button onClick={props.handleDeleteOptions} >Remove All</button>
      {props.options.length===0 && <p>Please add an option to get started</p>}
      {options.map((option,idx)=>{
        return <Option key={idx} optionText={option} handleDeleteOption={handleDeleteOption}/>
      })}
      <Option />
      </div>
    )
  }
  export default Options