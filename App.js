import React from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import AsyncStorage from '@react-native-community/async-storage';

import AppNavigator from './src/navigation/AppNavigator';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore, persistReducer} from 'redux-persist';
import reducers from './src/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['questions', 'clientData'],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
let persistor = persistStore(store);

export default App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <AppNavigator />
        </ApplicationProvider>
      </>
    </PersistGate>
  </Provider>
);
