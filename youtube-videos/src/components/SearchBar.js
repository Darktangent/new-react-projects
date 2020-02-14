import React from 'react'
import './SearchBar.css'
class SearchBar extends React.Component{
  state = {term:""}
  onInputChange=(e)=>{
    this.setState({term:e.target.value})
  }
  onFormSubmit=(e)=>{
    e.preventDefault()
    this.props.onFormSubmit(this.state.term)
    //make sure to call callback from parent component
  }
  render() {
    return(
      <div className="ui segment search-bar">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
          <label htmlFor="">Video Search</label>
          <input type="text" value={this.state.term} onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    )
  }
}
export default SearchBar