import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { lanes } from '../Reducers/Lanes';


const reducers = combineReducers({
  lanes,
});

// store.js
function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));
  return store;
}

export const store = configureStore();
