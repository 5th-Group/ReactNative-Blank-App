import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// export const updateAddress = createAsyncThunk(
//   'user/updateAddress',
//   async ({data, userId}) => {
//     await bookApiPost.updateAddress(data, userId);
//   },
// );

// export const updateUserInfo = createAsyncThunk(
//   'user/updateUserInfo',
//   async update => {
//     await bookApiPost.updateUserInfo(update);
//   },
// );

export const userSlice = createSlice(
  {
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
      updateUserInfoSuccess: (state, action) => {
        state.status = 'success';
        state.userInfo = action.payload;
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
    // extraReducers: {
    //   // Update Address
    //   [updateAddress.pending]: state => {
    //     state.updateStatus = 'loading';
    //   },
    //   [updateAddress.fulfilled]: state => {
    //     state.updateStatus = 'success';
    //   },
    //   [updateAddress.rejected]: state => {
    //     state.updateStatus = 'error';
    //   },
  },
  // extraReducers: {
  //   [updateUserInfo.pending]: state => {
  //     state.updateStatus = 'loading';
  //   },
  //   [updateUserInfo.fulfilled]: state => {
  //     state.updateStatus = 'success';
  //   },
  //   [updateUserInfo.rejected]: state => {
  //     state.updateStatus = 'error';
  //   },
  // },
);

export const {
  loginStart,
  loginSuccess,
  loginFail,
  Reset,
  resetStatus,
  resetUpdataStatus,
  updateUserInfoSuccess,
} = userSlice.actions;

export default userSlice.reducer;
