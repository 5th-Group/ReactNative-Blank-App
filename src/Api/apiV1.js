import apiPost from './apiClientPost';

const bookApiPost = {
  // Post Review
  postReview: (review, bookid) => {
    const url = `/api/review/${bookid}/new`;
    return apiPost.post(url, review);
  },
  // UpdateAddress
  updateAddress: (update, userId) => {
    const url = `/api/user/${userId}/update`;
    return apiPost.put(url, update);
  },
  updateUserInfo: update => {
    const url = `/api/user/update`;
    return apiPost.put(url, update);
  },
};

export default bookApiPost;
