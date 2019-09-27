import React from 'react';
import {Provider} from 'react-redux';
import Navigation from './components/navigation';

import configureStore from './configureStore';

const store = configureStore();

export default function App() {
  const container = (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );

  return container;
}
