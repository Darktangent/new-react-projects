import React, { Component } from 'react'
import {fetchPosts} from "../actions"
import {connect} from "react-redux"
class PostList extends Component {

  componentDidMount(){
    this.props.fetchPosts()
  }
  render() {
    return (
      <div>s
        
      </div>
    )
  }
}
export default connect(null,{fetchPosts})(PostList)