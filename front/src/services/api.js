import axios from 'axios';


const api = axios.create({
    baseURL: 'http://179.189.95.208:45217'
})

export default api;