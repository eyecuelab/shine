/* eslint-disable no-undef */
import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigators/RootNavigator/index';
import { AuthProvider } from './src/components/AuthContext';
import { Provider } from 'react-redux';
import store from './src/rdx/store';

const App = () => {
  let [fontsLoaded] = useFonts({
    'Marison-Sans-Round': require('./assets/fonts/Marison-Sans-Round.ttf'),
    'Marison-Script-Vintage': require('./assets/fonts/Marison-Script-Vintage.ttf'),
  });

  return fontsLoaded ? (
    <Provider store={store}>
      <>
        <AuthProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </AuthProvider>
      </>
    </Provider>
  ) : (
    <AppLoading />
  );
};

export default App;
