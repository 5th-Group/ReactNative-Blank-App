import axios from 'axios';

const apiInstance = axios.create({
  baseURL: 'https://swift-lib.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiInstance;
