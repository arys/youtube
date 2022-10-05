import axios from 'axios'

const client = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: '',
    part: "snippet",
    type: "video",
    maxResults: 10,
  }
})

export default client