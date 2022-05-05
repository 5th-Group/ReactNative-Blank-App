import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import bookApiPost from '../../api/apiV1';

export const updateAddress = createAsyncThunk(
  'user/updateAddress',
  async ({data, userId}) => {
    console.log(data);
    // await bookApiPost.updateAddress(data, userId);
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    accessToken: null,
    userInfo: null,
    status: 'idle',
    updateStatus: 'idle',
  },
  reducers: {
    loginStart: state => {
      state.status = 'loading';
    },
    loginSuccess: (state, action) => {
      state.status = 'success';
      state.userInfo = {...action.payload.userData};
      state.accessToken = action.payload.token;
    },
    loginFail: state => {
      state.status = 'error';
    },
    Reset: state => {
      state.userInfo = null;
      state.status = 'idle';
    },
    resetStatus: state => {
      state.status = 'idle';
    },
    resetUpdataStatus: state => {
      state.updateStatus = 'idle';
    },
  },
  extraReducers: {
    // Update Address
    [updateAddress.pending]: state => {
      state.updateStatus = 'loading';
    },
    [updateAddress.fulfilled]: state => {
      state.updateStatus = 'success';
    },
    [updateAddress.rejected]: state => {
      state.updateStatus = 'error';
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFail,
  Reset,
  resetStatus,
  resetUpdataStatus,
} = userSlice.actions;

export default userSlice.reducer;
