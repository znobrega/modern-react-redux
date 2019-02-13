import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4b751db4a6414265a75ebc7d8df2c81e0208c286524d8c6de1b0e341bab82ca9'
    }
})