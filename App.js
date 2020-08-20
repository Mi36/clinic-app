import React from 'react';
import * as eva from '@eva-design/eva';
import AsyncStorage from '@react-native-community/async-storage';
import {ApplicationProvider} from '@ui-kitten/components';
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
  whitelist: ['questions', 'clientQuestions'],
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, {}, applyMiddleware(ReduxThunk));
let persistor = persistStore(store);

export default App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <AppNavigator />
      </ApplicationProvider>
    </PersistGate>
  </Provider>
);
