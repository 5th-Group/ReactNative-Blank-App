import {createSlice} from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    book: null,
    status: 'idle',
  },
  reducers: {
    getbookStart: state => {
      state.status = 'loading';
    },
    getbookSuccess: (state, action) => {
      state.status = 'success';
      state.book = action.payload;
    },
    getbookFail: state => {
      state.status = 'error';
    },
  },
});

// EXPORTS

export const {getbookStart, getbookSuccess, getbookFail} = bookSlice.actions;

export default bookSlice.reducer;
