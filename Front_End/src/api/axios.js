import axios from 'axios';

const api = axios.create({
  baseURL: 'https://opulent-space-guacamole-xrwr4pvw5745h6ppv-5000.app.github.dev/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});
export default api;
