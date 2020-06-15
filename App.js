import React, { useState } from 'react';
import { Asset } from 'expo-asset';
import * as Font from "expo-font";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { AppLoading } from 'expo';
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./src/navigators/Drawer";


const cacheImages = images =>
  images.map(image => {
    return Asset.fromModule(image).downloadAsync();
  });

const cacheFonts = fonts => 
  fonts.map(font => Font.loadAsync(font));

const App = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  const cacheResourcesAsync = () => {
    const images = cacheImages([require('./assets/images/splash.png')]);
    // ==========add custom fonts later===========
    const fonts = cacheFonts([{
      ...Ionicons.font, 
      ...FontAwesome.font, 
      'Ladytron': require('./assets/fonts/Ladytron.otf'),
      'Beri-Sintta': require('./assets/fonts/Beri-Sintta.otf')
    }]);
    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => setDataLoaded(true);

  return ( 
    dataLoaded ? 
      ( <>
          <NavigationContainer>
            <Drawer />
          </NavigationContainer>  
        </>
      ) : (
        <AppLoading
          startAsync={cacheResourcesAsync}
          onFinish={onFinish}
          onError={console.warn}
        />
      )
  );
}

export default App;