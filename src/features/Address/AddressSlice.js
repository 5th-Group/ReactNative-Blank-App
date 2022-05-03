import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// Async

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    coord: {latitude: 1, longitude: 1},
    address: {short: null, long: null},
    status: '',
  },
  reducers: {
    addCoord: (state, action) => {
      state.status = 'idle';
      state.coord = {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    },
    addAddress: (state, action) => {
      state.status = 'idle';
      state.address = {
        short: action.payload.short,
        long: action.payload.long,
      };
    },
    pendingAddress: state => {
      state.status = 'pending';
    },
  },
  extraReducers: {
    // Get Book
    // [getAllBook.pending]: state => {
    //   state.status = 'loading';
    // },
    // [getAllBook.fulfilled]: (state, action) => {
    //   state.book = [...action.payload];
    //   state.status = 'success';
    // },
    // [getAllBook.rejected]: state => {
    //   state.status = 'error';
    // },
  },
});

// EXPORTS

export const {addCoord, pendingAddress, addAddress} = addressSlice.actions;
export default addressSlice.reducer;
