import axios from 'axios';

const instance = axios.create({
    // .. where we make our configurations
        baseURL: 'http://localhost:8080/api/v1/',
        withCredentials: true,
    });

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

export default instance;