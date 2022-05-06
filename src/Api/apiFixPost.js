import axios from 'axios';
import apiConfig from './apiConfig';
import {updateUserInfoSuccess} from '../features/User/UserSlice';

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

// Post order
export const postOrder = async (order, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    await axios.post(`${apiConfig.baseURL}/api/order/create`, order, config);
  } catch (error) {
    console.log(error);
  }
};
