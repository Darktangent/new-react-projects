import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
class App extends React.Component {
  
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     lat:null,
  //     errorMesage:""
  //   }
 
  // }
  state = {
    lat:null,
    errorMesage:""
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position)=>{
        this.setState(()=>({
          lat:position.coords.latitude
        }))
        
      },
      (err)=>{
        this.setState(()=>({errorMesage:err.message}))
      }
      
    )
  }
  renderContent (){
    
    if(this.state.errorMsg && !this.state.lat) { 
      return <div>Error:{this.state.errorMsg}</div>
    }
    if(!this.state.errorMsg && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} ></SeasonDisplay>
      }
    return <Spinner message="Please accept location request" />
  }

  render() {
   
//  if(this.state.errorMesage && !this.state.lat){
//    return <SeasonDisplay error={this.state.errorMesage} />
//  }
//  if (this.state.lat && !this.state.errorMesage){
//    return <SeasonDisplay lat={this.state.lat} />
//  }
//  return <Spinner message="Please accept location request "/>
return (
<div className="border red">
{this.renderContent()}
</div>
)}
}

ReactDOM.render(<App/>,document.querySelector("#root"))
