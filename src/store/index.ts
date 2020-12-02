import { getFirebase } from 'react-redux-firebase';
import { applyMiddleware, compose, createStore } from 'redux';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import firebase from '../firebase/Firebase';
import rootReducer from './reducers';

interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;

// const composeEnhancers =
//   process.env.NODE_ENV === 'development'
//     ? (typeof window === 'object' &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//       compose
//     : compose;

const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;
// const middlewares = []

const middleware = [
  thunk.withExtraArgument({ getFirebase, getFirestore }),
  // This is where you add other middleware like redux-observable
];

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware), reduxFirestore(firebase)));

export default store;
