import axios from 'axios';
import apiConfig from './apiConfig';
import {
  updateUserInfoSuccess,
  setUserStatusError,
  setUserStatusLoading,
  loginSuccess,
} from '../features/User/UserSlice';

import {
  setPostReivewUpdateLoading,
  setPostReivewUpdateSuccess,
  setPostReivewUpdateError,
} from '../features/SingleBook/SingleBookSlice';

// User
// Put User Data
export const putUserData = async (userData, token, dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch(setUserStatusLoading());
  try {
    const response = await axios.put(
      `${apiConfig.baseURL}/api/user/update`,
      userData,
      config,
    );
    dispatch(updateUserInfoSuccess(response.data.newData));
  } catch (error) {
    console.log(error);
    dispatch(setUserStatusError());
  }
};

// Login
export const login = async (user, token, dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch(setUserStatusLoading());
  try {
    const response = await axios.post(
      `${apiConfig.baseURL}/api/login`,
      user,
      config,
    );
    dispatch(loginSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(setUserStatusError());
  }
};

// Register
export const register = async user => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    await axios.post(`${apiConfig.baseURL}/api/register`, user, config);
  } catch (error) {
    console.log(error);
  }
};

// Address
// Put address
export const putAddress = async (address, token, dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  dispatch(setUserStatusLoading());
  try {
    const response = await axios.put(
      `${apiConfig.baseURL}/api/user/update-address`,
      address,
      config,
    );

    dispatch(updateUserInfoSuccess(response.data.newData));
  } catch (error) {
    console.log(error);
    dispatch(setUserStatusError());
  }
};

// Post Address
export const postAddress = async (address, token, dispatch) => {
  // Config
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch(setUserStatusLoading());
  try {
    const response = await axios.put(
      `${apiConfig.baseURL}/api/user/update`,
      address,
      config,
    );
    dispatch(updateUserInfoSuccess(response.data.newData));
  } catch (error) {
    console.log(error);
    dispatch(setUserStatusError());
  }
};

// Order
// Post order
export const postOrder = async (order, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  try {
    await axios.post(`${apiConfig.baseURL}/api/order/create`, order, config);
  } catch (error) {
    console.log(error);
  }
};

// Get order
export const getOrder = async token => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await axios.get(
      `${apiConfig.baseURL}/api/user/orders`,
      config,
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Book
// Post review
export const postReview = async (review, bookId, token, dispatch) => {
  // Config
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  dispatch(setPostReivewUpdateLoading());
  try {
    await axios.post(
      `${apiConfig.baseURL}/api/review/${bookId}/new`,
      review,
      config,
    );
    dispatch(setPostReivewUpdateSuccess());
  } catch (error) {
    console.log(error);
    dispatch(setPostReivewUpdateError());
  }
};
