import apiInstance from './api';

const api = {
  login: user => {
    const url = '/api/users/signin';
    return apiInstance.post(url, user);
  },
  getAll: () => {
    const url = '/db';
    return apiInstance.get(url);
  },
};

export default api;
