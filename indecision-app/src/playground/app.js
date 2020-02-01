 
 
 
 class IndecisionApp extends React.Component{
   constructor(props){
     super(props)
     this.handleDeleteOptions=this.handleDeleteOptions.bind(this)
     this.handlePick=this.handlePick.bind(this)
     this.handleAddOption=this.handleAddOption.bind(this)
     this.handleDeleteOption=this.handleDeleteOption.bind(this)
     this.state={
       options:[]
      }
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
   handleDeleteOptions(){
     this.setState(()=>({
       
         options:[]
     }
     ))
   }
   handleDeleteOption(optionToRemove){
    //  console.log('hdo',option)
    this.setState((prevState)=>({
      options:prevState.options.filter((option)=>{
        return !optionToRemove===option
      })
    }))
   }
   handlePick(){
    const randomNum=Math.floor(Math.random()*this.state.options.length)
    const option=this.state.options[randomNum]
    alert(option)
   }
   handleAddOption(option){
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
      </div>
    )
  }
 }
//  IndecisionApp.defaultProps = {
//    options:[]
//  }
const Header=(props)=>{


    const {title,subtitle}=props
    return (
      <div>
        <h1>{title}</h1>
        {props.subtitle && <h2>{subtitle}</h2>}
      </div>
    )


}
Header.defaultProps ={
  title:"Indecision"
}
const Action =(props)=>{
//   handlePick(){
// alert('handlepick')
//   }
return(
  <div>
  <button disabled={!props.hasOptions} onClick={props.handlePick}>What Should I do?</button>
  </div>
)
}
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
        return <Option key={idx} optionText={option} handleDeleteOption={props.handleDeleteOption}/>
      })}
      <Option />
      </div>
    )
  }

class AddOption extends React.Component{
  constructor(props){
    super(props)
    this.handleAddOption=this.handleAddOption.bind(this)
    this.state={error:undefined}
  }
  handleAddOption(e){
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
const Option=(props)=>{
 
    const {optionText}=props
    return(
      <div>
      <p>{optionText}</p>
      {optionText && <button onClick={(e)=>{
        props.handleDeleteOption(optionText)
      }} >
      
      remove
      </button>}
      </div>
    )
  }

// const User=()=>{

//   return(
//     <div>
//       <p>Name: </p>
//       <p>Age: </p>
//     </div>
//   )
// }




ReactDOM.render(<IndecisionApp  /> , document.getElementById("app"))