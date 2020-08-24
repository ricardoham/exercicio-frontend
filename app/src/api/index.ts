import axios from 'axios';

const axiosConfig = () => ({
  url: 'https://localhost:3001',
});

export const profileAPI = axios.create(axiosConfig());
