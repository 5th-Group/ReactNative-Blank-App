import axios from 'axios';
import apiConfig from './apiConfig';

let store;
export const injectStore = _store => {
  store = _store;
};

// store
// store.subscribe(listener);

// function select(state) {
//   return state.user.accessToken
// }

// function listener() {
//   let token = select(store.getState());
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }

const apiPost = axios.create({
  baseURL: apiConfig.baseURL,
  // headers: {
  //   post: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // },
});

apiPost.interceptors.request.use(config => {
  const token = store.getState().user.accessToken;
  config.headers.post['Authorization'] = `Bearer ${token}`;
  return config;
});

export default apiPost;
