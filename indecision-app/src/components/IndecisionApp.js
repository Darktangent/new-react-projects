import React, { Component } from 'react'
// import AddOption from "./components/AddOption"
import AddOption from "./AddOption"
 import Header from "./Header"
 import Action from "./Action"
 import Options from "./Options"
 import OptionModal from "./OptionModal"
class IndecisionApp extends React.Component{
  state={
    options:[],
    selectedOption:undefined
   }
  // constructor(props){
   
  //   super(props)
  //   this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
  //   this.handlePick=this.handlePick.bind(this)
  //   this.handleAddOption=this.handleAddOption.bind(this)
  //   this.handleDeleteOption=this.handleDeleteOption.bind(this)
  //   this.state={
  //     options:[]
  //    }
  // }
  handleDeleteOptions=()=>{
    this.setState(()=>({
      
        options:[]
    }
    ))
  }
  handleDeleteOption=(optionToRemove)=> {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick=()=>{
   const randomNum=Math.floor(Math.random()*this.state.options.length)
   const option=this.state.options[randomNum]
  //  alert(option)
  this.setState(()=>({selectedOption:option}))
  }
  handleClrSelectedOption=()=>{
    this.setState(()=>({
      selectedOption:undefined
    }))
  }
  handleAddOption=(option)=>{
    if(!option){
     return "Enter valid value to add item"
    }else if(this.state.options.indexOf(option) >-1){
     return 'This option already exists'
    }
    console.log(option);
    this.setState((prevState)=>({
        options:prevState.options.concat([option])
      
    }))
    
  }
  componentDidMount(){
 //  fetch
 try{
   const json=localStorage.getItem('options')
   const options=JSON.parse(json)
   if(options){
     this.setState(()=>({options}))
   }
 }catch(e){

 }

 
  }
  componentDidUpdate(prevProps,prevState){
   //  save
   if(prevState.options.length!== this.state.options.length){
     const json=JSON.stringify(this.state.options)
     localStorage.setItem('options',json)
   }
 }
  
  componentWillUnmount(){

  }
  

 render(){
   const title="Indecison App"
   const subtitle="Put your life in the hands of a computer"
   // const options=['Thing one','Thing two','Thing four']
   return (
     <div>
       <Header title={title} subtitle={subtitle} />
       
       <Action hasOptions={this.state.options.length > 0 } handlePick={this.handlePick}/>
       <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}
       handleDeleteOption={this.handleDeleteOption}
       />
       <AddOption handleAddOption={this.handleAddOption}/>
       <OptionModal selectedOption={this.state.selectedOption} handleClrSelectedOption={this.handleClrSelectedOption}/>
     </div>
   )
 }
}
export default IndecisionApp