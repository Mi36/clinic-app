import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';

export default App = () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
      <AppNavigator />
    </Provider>
  </ApplicationProvider>
);
