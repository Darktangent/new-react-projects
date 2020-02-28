import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import StreamCreate from "./streams/StreamCreate"
import StreamDelete from "./streams/StreamDelete"
import StreamEdit from "./streams/StreamEdit"
import StreamList from "./streams/StreamList"
import StreamShow from "./streams/StreamShow"
import Header from "./Header"


// const PageOne=()=>{
//   return (<div>
//     Page one
//     <Link to="/pagetwo"> Page two</Link>
//     </div>)
// }
// const PageTwo=()=>{
//   return (
//     <div>Page two
//     <button>Click Me</button>
//     <Link to="/"> Page One</Link>
//     </div>)
// }
// const CLIENT_ID='966713002100-8rc7c3gogb7h3sq6a4e2a8r9427qtkvs.apps.googleusercontent.com'

const App=()=>{
  return (
    <div className="ui container">
    
    <BrowserRouter>
    
    <div>
    <Header/>
      <Route path="/" exact component={StreamList}/>
      <Route path="/streams/delete"  component={StreamDelete}/>
      <Route path="/streams/edit"  component={StreamEdit}/>
      <Route path="/streams/new"  component={StreamCreate}/>
      <Route path="/streams/show"  component={StreamShow}/>
    </div>
    </BrowserRouter>

    </div>
  )
}
export default App