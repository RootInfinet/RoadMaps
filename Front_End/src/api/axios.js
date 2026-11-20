import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cabinets-authentication-nikon-responsible.trycloudflare.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});
export default api;
