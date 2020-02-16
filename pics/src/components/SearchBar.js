import React, { Component } from 'react'

export default class SearchBar extends Component {

 state={term:'seach for images'}
 onInputChange=(e)=>{
  this.setState(()=>({term:e.target.value})) 
}
  onFormSubmit=(e)=>{
    e.preventDefault()
    // console.log(this.state.term);
    this.props.onSearch(this.state.term)
  }
  render() {
    return (
      <div className="ui segment">
          <form action="" className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
            <label htmlFor="">Image Search</label>
            <input 
            type="text" 
            onChange={e=>this.setState({term:e.target.value.toUpperCase()})}
            value={this.state.term}/> 
            </div>
            
          </form>      
      </div>
    )
  }
}
