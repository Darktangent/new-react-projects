import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import faker from 'faker'

const App=()=>{
  return (
    <div className="ui container comments">
      <ApprovalCard>
         <CommentDetail author={"Sam"} timeAgo={"Today"} content={"Nice post"} avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <ApprovalCard>
          <CommentDetail author={"Alex"} timeAgo={"Today"} content={"Nice post"} avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
          <CommentDetail author={"Jen"} timeAgo={"Yesterday"} content={"Nice post"} avatar={faker.image.avatar()} />
      </ApprovalCard>
    
      
    </div>
  )
}

ReactDOM.render(<App />,document.getElementById("root"))
