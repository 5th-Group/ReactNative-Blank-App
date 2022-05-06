import axios from 'axios';
import apiConfig from './apiConfig';
import {updateUserInfoSuccess} from '../features/User/UserSlice';

// User
// Put User Data
export const putUserData = async (userData, token, dispatch) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.put(
      `${apiConfig.baseURL}/api/user/update`,
      userData,
      config,
    );
    dispatch(updateUserInfoSuccess(response.data.newData));
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
    },
  };
  const response = await axios.put(
    `${apiConfig.baseURL}/api/user/update`,
    address,
    config,
  );
  dispatch(updateUserInfoSuccess(response.data.newData));
  console.log(response.data);
  // return response.data;
};

// Post Address
export const postAddress = async (address, token, dispatch) => {
  // Config
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const response = await axios.put(
      `${apiConfig.baseURL}/api/user/update`,
      address,
      config,
    );
    console.log(response.data);
    // dispatch(updateUserInfoSuccess(response.data.newData));
  } catch (error) {
    console.log(error);
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
export const postReview = async (review, bookId, token) => {
  // Config
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    await axios.post(
      `${apiConfig.baseURL}/api/review/${bookId}/new`,
      review,
      config,
    );
  } catch (error) {
    console.log(error);
  }
};
