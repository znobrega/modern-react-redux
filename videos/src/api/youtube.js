import axios from 'axios'

const KEY = 'AIzaSyBGkLAC42jzKoNOZvmrLAcdP3imNijdMYQ' 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 12,
        key: KEY
    }
})