import React, { Component } from 'react'
class AddOption extends React.Component{
  state={error:undefined}
  // constructor(props){
  //   super(props)
  //   this.handleAddOption=this.handleAddOption.bind(this)
  //   // this.state={error:undefined}
  // }
  handleAddOption=(e)=>{
    e.preventDefault()
    const option=e.target.elements.option.value.trim()
  //   if(option){
  //     // app.options.push(option)
     
  //     // e.target.elements.option.value=''
  // }
  const error=this.props.handleAddOption(option)
  console.log(option,error)
    this.setState(()=>({error:error}))
    
  if(!error){
    e.target.elements.option.value=""
  }
  }
  render(){
    
    return (
      <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form action="" onSubmit={this.handleAddOption}>
      <input name="option" type="text"/>
      <button>Add option</button>
      </form>
      </div>
    )
  }
 }
 export default AddOption