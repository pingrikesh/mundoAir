import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers'

import createSagaMiddleware from 'redux-saga'

import sagas from '../sagas'
const sagaMiddleware = createSagaMiddleware()


const rootReducer = combineReducers(reducers)

const middlewares = [
    sagaMiddleware,
];

const enhancers = [
    applyMiddleware(...middlewares),
];

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
       shouldHotReload: false,
       })
:compose;

export default () => {
  const store = createStore(rootReducer ,{},composeEnhancers(...enhancers));
sagaMiddleware.run(sagas)
  return store;
};
