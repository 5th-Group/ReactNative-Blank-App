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
    address: {short: '', long: '', name: ''},
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

    setAddressStatusLoading: state => {
      state.status = 'loading';
    },
  },
});

// EXPORTS

export const {addCoord, addCoord2, setAddressStatusLoading, addAddress} =
  addressSlice.actions;
export default addressSlice.reducer;
