import React, { useState } from 'react';
import { StatusBar } from "react-native";
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { NavigationContainer } from "@react-navigation/native";
// import Tabs from "./src/navigators/Tabs";
import { RootNavigator } from './src/navigators';


const App = () => {
  let [fontsLoaded] = useFonts({
    'Marison-Sans-Round': require('./assets/fonts/Marison-Sans-Round.ttf'),
    'Marison-Script-Vintage': require('./assets/fonts/Marison-Script-Vintage.ttf'),
  });

  return ( 
    fontsLoaded ? 
      ( <>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>  
          {/* <StatusBar barStyle="light-content" /> */}
        </>
      ) : (
        <AppLoading />
      )
  );
}

export default App;