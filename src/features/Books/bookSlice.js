import {createSlice} from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    book: null,
    status: 'idle',
  },
  reducers: {
    setBookStatusLoading: state => {
      state.status = 'loading';
    },
    setBookStatusError: state => {
      state.status = 'error';
    },
    getbookSuccess: (state, action) => {
      state.status = 'success';
      state.book = action.payload;
    },
  },
});

// EXPORTS

export const {setBookStatusLoading, getbookSuccess, setBookStatusError} =
  bookSlice.actions;

export default bookSlice.reducer;
