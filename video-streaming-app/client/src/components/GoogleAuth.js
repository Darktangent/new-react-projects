import React from 'react'
import {connect} from 'react-redux'
import {signIn,signOut} from '../actions'


class GoogleAuth extends React.Component{
  // state={
  //   isSignedIn:null
  // }
  componentDidMount(){
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        clientId:'966713002100-8rc7c3gogb7h3sq6a4e2a8r9427qtkvs.apps.googleusercontent.com',
        scope:'email'
      }).then(()=>{
        this.auth=window.gapi.auth2.getAuthInstance()
        // this.setState({isSignedIn:this.auth.isSignedIn.get()})
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    })
  }
  // this.setState({isSignedIn:this.auth.isSignedIn.get()})
  onAuthChange=(isSignedIn)=>{
    if(isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId())
    }else{
      this.props.signOut()
    }
  }
  onSignInClick=()=>{
    this.auth.signIn()
  }
  onSignOutClick=()=>{
    this.auth.signOut()
  }
  renderAuthButton=()=>{
    if(this.props.isSignedIn){
      return <button onClick={this.onSignOutClick} className="ui red google button">
      <i className="google icon" />Sign OUT</button>
    }else if(this.props.isSignedIn===null){
      // return <button onClick={this.onSignIn()} className="ui blue google button">
      // <i className="google icon" />Sign IN</button>
      return null
    }else{
      return <button onClick={this.onSignInClick} className="ui blue google button">
      <i className="google icon" />Sign IN</button>
    }
  }
  
  render(){
    return (
      <div>
      {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {isSignedIn:state.auth.isSignedIn}
}


export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth)