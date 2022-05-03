import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import bookApi from '../../api/apiV1';

export const login = createAsyncThunk('users/login', async user => {
  const response = await bookApi.login(user);
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    pending: null,
    error: null,
  },
  reducers: {
    Reset: state => {
      state.userInfo = null;
      state.pending = null;
      state.error = null;
    },
  },
  extraReducers: {
    // Login
    [login.pending]: state => {
      state.pending = true;
      state.error = false;
    },
    [login.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.pending = false;
    },
    [login.rejected]: state => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const {updateStart, updateSuccess, updateFailure, Reset} =
  userSlice.actions;

export default userSlice.reducer;
