import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import bookApi from '../../api/apiV1';

// Async
export const getAllBook = createAsyncThunk('users/getAllBook', async () => {
  const response = await bookApi.getAllBook();
  return response.data;
});

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    book: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: {
    // Get Book
    [getAllBook.pending]: state => {
      state.status = 'loading';
    },
    [getAllBook.fulfilled]: (state, action) => {
      state.book = [...action.payload];
      state.status = 'success';
    },
    [getAllBook.rejected]: state => {
      state.status = 'error';
    },
  },
});

// EXPORTS

export default bookSlice.reducer;
