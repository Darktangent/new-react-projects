import React, { Component } from 'react'
 const Option=(props)=>{

  const {optionText}=props
  return(
    <div>
    <p>{optionText}</p>
    {optionText && <button onClick={(e)=>{
      props.handleDeleteOption(optionText)
      console.log(e);
      
    }} >
    
    remove
    </button>}
    </div>
  )
}
export default Option