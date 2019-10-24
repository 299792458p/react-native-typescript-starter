import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import combinedReducer from '../modules';

const config = {
  key: 'LIFTED_REDUX_STORE',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(config, combinedReducer);

export default persistedReducer;
