import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
// import { composeWithDevTools } from 'remote-redux-devtools';

import persistedReducer from './reducers';

export default function initializeStore() {

  const devLogger: Middleware | undefined = __DEV__ ? createLogger() : undefined;

  const middlewares: any[] = [
    thunk,
    devLogger
  ].filter(Boolean);

  const debugWrapper = (data: any) => data;
  // if (__DEV__) {
  //   debugWrapper = composeWithDevTools({ realtime: true, port: 8000 });
  // }

  const store = createStore(
    persistedReducer,
    {},
    debugWrapper(compose(applyMiddleware(...middlewares)))
  );

  persistStore(
    store,
    null,
    () => {
      store.getState();
    }
  );

  return store;
}
