

class Counter extends React.Component{
  constructor(props){
    super(props)
    this.handleAddOne=this.handleAddOne.bind(this)
    this.handleMinusOne=this.handleMinusOne.bind(this)
    this.handleReset=this.handleReset.bind(this)
    this.state = {
      count:props.count
    }
  }
  componentDidMount() {
    try{
      const json=localStorage.getItem("count")
    const data=parseInt(JSON.parse(json),10)
    if(!isNaN(data)){
      this.setState(()=>({count:data}))
    }
    }catch(e){

    }
  }

  componentDidUpdate(prevProps,prevState) {
    if(prevState.count!==this.state.count){
      const json=JSON>stringify(this.state.count)
      localstorage.setItem("count",json)
    }
  }
 
  handleAddOne(){
    this.setState((prevState)=>{
      return {
        count:prevState.count+1
      }
    })
    // this.setState({
    //   count:this.state.count+1
    // })
  }
  handleMinusOne(){
    this.setState((prevState)=>{
     return{ count:prevState.count-1}
    })
  }
  handleReset(){
    this.setState((prevState)=>{
      return {count:0}
    })
  }


  render(){
    return(
      <div>
      <h1>Count: {this.state.count} </h1>
      <button onClick={this.handleAddOne}>+1</button>
      <button onClick={this.handleMinusOne}>-1</button>
      <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}
Counter.defaultProps = {
  count:0
}
ReactDOM.render(<Counter />, document.getElementById("app"))



















// let count=0
// const addOne=()=>{
//   count ++
//   // console.log("Add one", count)
//   renderCounterApp()
// }
// const minusOne=()=>{
//   // console.log("Minus One")
//   count--
//   renderCounterApp()
// }
// const onReset=()=>{
//   // console.log("Reset")
//   count=0
//   renderCounterApp()
// }

// const appRoot=document.querySelector("#app")


// const renderCounterApp=()=>{
//   const templateTwo=(
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={onReset}>Reset</button>
//     </div>
//   )
//   ReactDOM.render(templateTwo,appRoot);
// }
// renderCounterApp()