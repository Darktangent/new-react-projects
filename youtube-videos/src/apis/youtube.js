import axios from 'axios'
const KEY=`AIzaSyBAfanNpzjfbUyZNIdN4VtLF8wJEdpcCJ4`

export default axios.create({
  baseURL:`https://www.googleapis.com/youtube/v3`,
  params:{
    part:'snippet',
    maxResults:5,
    key:`${KEY}`,
    type:'video'
  }
})
