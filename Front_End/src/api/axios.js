import axios from 'axios';

const API = axios.create({
  baseURL: 'https://fantastic-space-engine-wv7v45g7rxq5hgxww-4000.app.github.dev',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});
export default API;
