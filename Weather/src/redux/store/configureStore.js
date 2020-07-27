import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';
import LoginReducer from '../reducer/login';

const logger = createLogger({
  collapsed: true,
});

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  Login: LoginReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const pReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  pReducer,
  compose(applyMiddleware(...middlewares)),
);
export const persistor = persistStore(store);
