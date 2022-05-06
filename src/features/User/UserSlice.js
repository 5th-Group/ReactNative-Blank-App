import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    accessToken: null,
    userInfo: null,
    status: 'idle',
  },
  reducers: {
    // Status
    setUserStatusLoading: state => {
      state.status = 'loading';
    },
    setUserStatusError: state => {
      state.status = 'error';
    },

    // Login
    loginSuccess: (state, action) => {
      state.status = 'success';
      state.userInfo = {...action.payload.userData};
      state.accessToken = action.payload.token;
    },

    // Update
    updateUserInfoSuccess: (state, action) => {
      state.status = 'success';
      state.userInfo = action.payload;
    },

    // Reset
    logOut: state => {
      state.userInfo = null;
      state.accessToken = null;
      state.status = 'idle';
    },

    resetStatus: state => {
      state.status = 'idle';
    },
  },
});

export const {
  setUserStatusLoading,
  setUserStatusError,
  loginSuccess,
  updateUserInfoSuccess,
  resetStatus,
  logOut,
} = userSlice.actions;

export default userSlice.reducer;
