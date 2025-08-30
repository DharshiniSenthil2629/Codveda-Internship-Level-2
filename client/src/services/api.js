// client/src/services/api.js
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || '/api'; // dev: proxy points to localhost:5000

const api = axios.create({
  baseURL
});

export default api;
