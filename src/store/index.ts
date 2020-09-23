import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase } from 'react-redux-firebase';
import { getFirestore } from 'redux-firestore';

import rootReducer from './reducers';

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? (typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
      compose
    : compose;

// const middlewares = []

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

export default store;
