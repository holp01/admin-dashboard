// services/apiService.js

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const login = async (email, password) => {
    console.log(BASE_URL);
    const response = await fetch(`${BASE_URL}/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            Email: email,
            Password: password
        })
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Something went wrong');
    }

    return await response.json();
}
