import bookApi from './apiV1';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage, // for web: window.localStorage
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});

export const getToken = async () => {
  const token = await storage
    .load({
      key: 'token',
      autoSync: true,
      syncInBackground: true,
      syncParams: {
        extraFetchOptions: {},
        someFlag: true,
      },
    })
    .then(ret => {
      return ret;
    })

    .catch(err => {
      console.warn(err.message);
    });
  return token;
};

export const Login = async user => {
  const response = await bookApi.login(user);
  storage.save({
    key: 'token', // Note: Do not use underscore("_") in key!
    data: {
      accessToken: response.data.token,
    },
    expires: 1000 * 3600,
  });
  return response.data;
};
