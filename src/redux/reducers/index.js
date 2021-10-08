import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';

import auth from './auth';
import discover from './discover';

const persistAuth = {
  storage: AsyncStorage,
  key: 'auth',
};

const reducer = combineReducers({
  auth: persistReducer(persistAuth, auth),
  discover,
});

export default reducer;
