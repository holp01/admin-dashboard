// services/apiService.js

import axiosInstance from './axiosConfig';

export const login = async (username, password) => {
    try {
        const response = await axiosInstance.post(`/user/login`, {
            Email: username,
            Password: password
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}
