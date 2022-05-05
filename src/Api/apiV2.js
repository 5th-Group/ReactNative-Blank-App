import apiGet from './apiClientGet';

const bookApiGet = {
  // Get Book
  getAllBook: () => {
    const url = '/api';
    return apiGet.get(url);
  },
  getBook: id => {
    const url = `/api/product/${id}`;
    return apiGet.get(url);
  },
};

export default bookApiGet;
