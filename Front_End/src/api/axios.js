import axios from "axios";

const api = axios.create({
    baseURL: "https://fluffy-zebra-qvqvx4pq76p4h4q77-5000.app.github.dev",
    withCredentials: true,
});

export default api;
