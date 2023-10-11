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

export const getUsers = async () => {
    try {
        const response = await axiosInstance.get(`/user/users`);
        return response.data;
    } catch (error) {
        throw error;
    }
}