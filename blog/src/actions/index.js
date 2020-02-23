import jsonPlaceHolders from '../apis/jsonPlaceHolder'
import _ from 'lodash'

export const fetchPostsAndUsers=()=>{
  return async (dispatch,getState)=>{
 await dispatch(fetchPosts())
    // dispatch(fetchUser)
  const userIds=_.uniq(_.map(getState().posts,'userId'))
  userIds.forEach(id=>dispatch(fetchUser(id)))
  }
}
export const fetchPosts=()=>{
  return async (dispatch)=> {
  const response=await jsonPlaceHolders.get('/posts')
    dispatch({
    type:"FETCH_POSTS",
    payload:response.data
})
  }
}
export const fetchUser=(id)=>{
  return async(dispatch)=>{
    const response=await jsonPlaceHolders.get(`/users/${id}`)
    dispatch({
      type:"FETCH_USER",
      payload:response.data
    })
  }
}

// export const fetchUser=function (id){
//   return async function(dispatch){
//     const response=await jsonPlaceHolders.get(`/users/${id}`)
//     dispatch({
//       type:"FETCH_USER",
//       payload:response.data
//     })
//   }
// }
// export const fetchUser=(id)=>dispatch=>{
//   _fetchUser(id,dispatch)
// }
// const _fetchUser=_.memoize(async (id,dispatch)=>{
//   return async(dispatch)=>{
//     const response=await jsonPlaceHolders.get(`/users/${id}`)
//     dispatch({
//       type:"FETCH_USER",
//       payload:response.data
//     })
//   }
// })