import axios from 'axios';

const apiBackend = axios.create({
  baseURL: 'http://localhost:3001/api',
});

export default apiBackend;
