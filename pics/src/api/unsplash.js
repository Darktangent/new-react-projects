import axios from 'axios'

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers: {
    Authorization:'Client-ID d26e0ac5f6c28030904d6d489c896d49f056419483cd5b2dc742ab222dfc686f'
  }  
})