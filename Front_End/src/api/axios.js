import axios from 'axios';

const API = axios.create({
    baseURL: 'https://fluffy-zebra-qvqvx4pq76p4h4q77-5000.app.github.dev',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default API;