import apiGet from './apiClientGet';

import {
  setBookStatusLoading,
  getbookSuccess,
  setBookStatusError,
} from '../features/Books/bookSlice';

import {
  setSingleBookStatusError,
  setSingleBookStatusLoading,
  setSingleBookStatusSuccess,
  getSingleBookSuccess,
  setPostReivewUpdateLoading,
  setPostReivewUpdateError,
} from '../features/SingleBook/SingleBookSlice';

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

export const getAllBook = async dispatch => {
  dispatch(setBookStatusLoading());
  try {
    const response = await bookApiGet.getAllBook();
    dispatch(getbookSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(setBookStatusError());
  }
};

export const getSingleBook = async (dispatch, bookId) => {
  dispatch(setSingleBookStatusLoading());
  try {
    const response = await bookApiGet.getBook(bookId);
    console.log(response.data.detail);
    dispatch(getSingleBookSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(setSingleBookStatusError());
  }
};
