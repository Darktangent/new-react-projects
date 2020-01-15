
// let clicked=false
// const handleClick=(e)=>{
// clicked=!clicked
// render()
 
// }
// const appRoot=document.querySelector("#app")
// const render=()=>{
// const template=(
//   <div>
//     <h1>Toggle visibility</h1>
//     <button onClick={handleClick}>{clicked?"Hide Details":"show details"}</button>
//     {clicked &&<p className="secret">Here are the details</p>}
//   </div>
// )
// ReactDOM.render(template,appRoot)
// }
// render()

class VisibilityToggle extends React.Component{

  constructor(props){
    super(props)
    this.state={
      clicked:false
    }
    this.handleToggleVisibility=this.handleToggleVisibility.bind(this)
  }
  handleToggleVisibility(){
    this.setState((prevState)=>{
      return {clicked:!prevState.clicked}
    })
  }

  render(){
    // let {clicked} = this.state
    return(
    <div>
    <h1>Toggle visibility</h1>
    <button onClick={this.handleToggleVisibility}>{this.state.clicked?"Hide Details":"show details"}</button>
    {this.state.clicked &&<p className="secret">Here are the details</p>}
    </div>)
      
    
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))


