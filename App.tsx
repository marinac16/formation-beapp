/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';

import store from './src/redux/store';
import Home from './src/ui/screens/home';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Home />
      </Provider>
    </>
  );
};

export default App;
