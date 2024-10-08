import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.API_URL || 'https://pixterest-api.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;