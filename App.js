import React from 'react';
import type {Node} from 'react';

import MainStack from './src/routes';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
