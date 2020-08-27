import axios from 'axios';

const axiosConfig = () => ({
  baseURL: 'http://localhost:3001',
});

export const profileAPI = axios.create(axiosConfig());
