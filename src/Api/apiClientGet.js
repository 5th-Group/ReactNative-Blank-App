import axios from 'axios';
import apiConfig from './apiConfig';

const apiGet = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiGet;
