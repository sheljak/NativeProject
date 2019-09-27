import {createStore, applyMiddleware} from 'redux';
//import {composeWithDevTools} from 'remote-redux-devtools';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

export default function configureStore() {
  // const composeEnhancers = composeWithDevTools({
  //   realtime: true,
  // });
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}
