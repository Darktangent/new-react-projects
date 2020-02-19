import jsonPlaceHolders from '../apis/jsonPlaceHolder'
export const fetchPosts=()=>{
  return async (dispatch)=> {
  const response=await jsonPlaceHolders.get('/posts')
    dispatch({
    type:"FETCH_POSTS",
    payload:response
})
  }
  
}