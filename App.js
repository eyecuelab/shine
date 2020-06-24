/* eslint-disable no-undef */
import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './src/navigators';
import { AuthProvider } from './src/components/AuthContext';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';

const App = () => {
  let [fontsLoaded] = useFonts({
    'Marison-Sans-Round': require('./assets/fonts/Marison-Sans-Round.ttf'),
    'Marison-Script-Vintage': require('./assets/fonts/Marison-Script-Vintage.ttf'),
  });

  return fontsLoaded ? (
    <Provider store={createStore(reducers)}>
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
