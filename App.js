import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import AppNavigator from './src/navigation/AppNavigator';

export default App = () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <AppNavigator />
  </ApplicationProvider>
);
