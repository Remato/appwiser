import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mockapi.io/projects/60305bb1a1e9d20017af1b01',
});

export default api;
