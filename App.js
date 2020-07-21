/* eslint-disable no-undef */
import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/rdx/store';

const App = () => {
  let [fontsLoaded] = useFonts({
    'Marison-Sans-Round': require('./assets/fonts/Marison-Sans-Round.ttf'),
    'Marison-Script-Vintage': require('./assets/fonts/Marison-Script-Vintage.ttf'),
    'Raleway-Regular': require('./assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
    'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
  });

  return fontsLoaded ? (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  ) : (
    <AppLoading />
  );
};

export default App;
