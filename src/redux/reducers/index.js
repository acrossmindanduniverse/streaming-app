import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistAuth = {
  storage: AsyncStorage,
};

const reducer = combineReducers({
  auth: persistReducer(persistAuth),
});

export default reducer;
