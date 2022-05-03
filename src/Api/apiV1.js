import apiInstance from './apiClient';

const bookApi = {
  login: user => {
    const url = '/api/login';
    return apiInstance.post(url, user);
  },
  register: user => {
    const url = '/api/register';
    return apiInstance.post(url, user);
  },
  getAllBook: () => {
    const url = '/api';
    return apiInstance.get(url);
  },
};

export default bookApi;
