import {configureStore, combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// Reducers
import cartReducer from '../features/Cart/cartSlice';
import userReducer from '../features/User/UserSlice';
import bookReducer from '../features/Books/bookSlice';
import addressReducer from '../features/Address/AddressSlice';
import singleBookReducer from '../features/SingleBook/SingleBookSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['book', 'address', 'singleBook'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  book: bookReducer,
  address: addressReducer,
  singleBook: singleBookReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export let persistor = persistStore(store);
