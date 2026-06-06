import axios from 'axios';

const api = axios.create({
 // baseURL: 'http://localhost:8000'
 baseURL: 'https://project-blueprint-ai-production.up.railway.app/'
});

export default api;