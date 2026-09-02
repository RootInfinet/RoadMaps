import axios from "axios";

const api = axios.create({
  baseURL: "https://road-maps-pi.vercel.app",
  withCredentials: true,
});

export default api;
