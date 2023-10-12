import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_API
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            
            const refreshToken = localStorage.getItem('refreshToken');
            try {
                const response = await instance.post(`/user/refreshToken`, { refreshToken });
                localStorage.setItem('token', response.data.token);
                axios.defaults.headers['Authorization'] = 'Bearer ' + response.data.token;
                return instance(originalRequest);
            } catch (refreshError) {
                // Handle token refresh failure, maybe force logout
                console.error("Unable to refresh token", refreshError);
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
);

export default instance;
