import axios from 'axios'

const HTTPClient = axios.create({
  baseURL: process.env.API
})

export { HTTPClient }
