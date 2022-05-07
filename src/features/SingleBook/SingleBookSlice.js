import {createSlice} from '@reduxjs/toolkit';

const singleBookSlice = createSlice({
  name: 'singleBook',
  initialState: {
    singleBook: null,
    status: 'idle',
    postReviewStatus: 'idle',
  },
  reducers: {
    setSingleBookStatusLoading: state => {
      state.status = 'loading';
    },
    setSingleBookStatusError: state => {
      state.status = 'error';
    },

    setSingleBookStatusSuccess: state => {
      state.status = 'success';
    },
    // Get
    getSingleBookSuccess: (state, action) => {
      state.status = 'success';
      state.singleBook = action.payload;
    },
    resetSingleBookStatus: state => {
      state.status = 'idle';
    },
    // Post Review
    setPostReivewUpdateLoading: state => {
      state.postReviewStatus = 'loading';
    },
    setPostReivewUpdateError: state => {
      state.postReviewStatus = 'error';
    },
    setPostReivewUpdateSuccess: state => {
      state.postReviewStatus = 'success';
    },
    resetPostReivewUpdate: state => {
      state.postReviewStatus = 'idle';
    },
  },
});

// EXPORTS

export const {
  resetPostReivewUpdate,
  setPostReivewUpdateLoading,
  setPostReivewUpdateError,
  setPostReivewUpdateSuccess,
  setSingleBookStatusLoading,
  setSingleBookStatusError,
  setSingleBookStatusSuccess,
  resetSingleBookStatus,
  getSingleBookSuccess,
} = singleBookSlice.actions;

export default singleBookSlice.reducer;
