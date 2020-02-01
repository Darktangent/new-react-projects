import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const JSX=()=>{
  const buttonText={text:'Click Me'}
  const style={backgroundColor:'blue', color:'white'}
  return (
    <div>
    <label className="label" htmlFor="name">Enter Name</label>
    <input type="text" id="name"/>
    <button style={style}>{buttonText.text}</button>  
    </div>
  )
}

ReactDOM.render(<JSX />,document.getElementById("root"))