import 'rxjs';
import {createStore, applyMiddleware} from 'redux';
import Reducers from './reducers';
import thunk from 'redux-thunk';
import rootEpic from '../redux/epics';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {createEpicMiddleware} from 'redux-observable';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, Reducers);
const epicMiddleware = createEpicMiddleware();
const configureStore = () => {
  const store = createStore(
    persistedReducer,
    applyMiddleware(thunk, epicMiddleware),
  );
  const persistor = persistStore(store);
  epicMiddleware.run(rootEpic);
  return {store, persistor};
};

export default configureStore;
