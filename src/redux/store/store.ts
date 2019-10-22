import { createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';

// import { composeWithDevTools } from 'remote-redux-devtools';

import rootReducer from './reducers';

export default function initializeStore() {

  const middlewares = [
    // thunk.withExtraArgument(),
    __DEV__ ? createLogger() : null
  ].filter(Boolean);

  const debugWrapper = (data: any) => data;
  // if (__DEV__) {
  //   debugWrapper = composeWithDevTools({ realtime: true, port: 8000 });
  // }

  const store = createStore(
    rootReducer,
    {},
    // debugWrapper(compose(applyMiddleware(...middlewares)))
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
