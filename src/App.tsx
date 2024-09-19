/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {StrictMode,useRef} from 'react';
import {RootNav} from '@/navigation';
import {Provider} from 'react-redux';
import {store} from './config/store';
function App(): JSX.Element {

  return (
    <StrictMode>
      <Provider store={store}>
          <RootNav />
      </Provider>
    </StrictMode>
  );
}

export default App;
