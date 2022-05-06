import {createSlice} from '@reduxjs/toolkit';

// Async

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    coord: {
      latitude: 1,
      longitude: 1,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    address: {short: '', long: ''},
    status: '',
  },
  reducers: {
    addCoord: (state, action) => {
      state.status = 'idle';
      state.coord = {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        latitudeDelta: action.payload.latitudeDelta,
        longitudeDelta: action.payload.longitudeDelta,
      };
    },
    addCoord2: (state, action) => {
      state.status = 'idle';
      state.coord = {
        ...state.coord,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    },
    addAddress: (state, action) => {
      state.status = 'idle';
      state.address = {...state.address, ...action.payload};
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

export const {addCoord, addCoord2, pendingAddress, addAddress} =
  addressSlice.actions;
export default addressSlice.reducer;
