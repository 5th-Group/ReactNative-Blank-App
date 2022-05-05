import axios from 'axios';
import apiConfig from './apiConfig';

let store;
export const injectStore = _store => {
  store = _store;
};

const apiPost = axios.create({
  baseURL: apiConfig.baseURL,
  headers: {
    get: {
      'Content-Type': 'application/json',
    },
  },
});

apiPost.interceptors.request.use(async config => {
  const token = store.getState().user.userInfo.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiPost;
