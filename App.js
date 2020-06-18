import React, { useState } from 'react';
import { StatusBar } from "react-native";
import { useFonts } from '@use-expo/font';
// import { Asset } from 'expo-asset';
// import * as Font from "expo-font";
// import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { AppLoading } from 'expo';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigators/Tabs";
// import Drawer from "./src/navigators/Drawer";
// import Stack from "./src/navigators/Stack";

const App = () => {
  let [fontsLoaded] = useFonts({
    'Marison-Sans-Round': require('./assets/fonts/Marison-Sans-Round.ttf'),
    'Marison-Script-Vintage': require('./assets/fonts/Marison-Script-Vintage.ttf'),
  });

  return ( 
    fontsLoaded ? 
      ( <>
          <NavigationContainer>
            {/* <Drawer /> */}
            <Tabs />
            {/* <Stack /> */}
          </NavigationContainer>  
          <StatusBar barStyle="light-content" />
        </>
      ) : (
        <AppLoading />
      )
  );
}

export default App;



// const cacheImages = images =>
//   images.map(image => {
//     return Asset.fromModule(image).downloadAsync();
//   });

// const cacheFonts = fonts => 
//   fonts.map(font => Font.loadAsync(font));

// const App = () => {
//   const [dataLoaded, setDataLoaded] = useState(false);

//   const cacheResourcesAsync = () => {
//     const images = cacheImages([require('./assets/images/splash.png')]);
//     // ==========add custom fonts later===========
//     // const fonts = cacheFonts([{
//     //   ...Ionicons.font, 
//     //   ...FontAwesome.font, 
//     //   'Ladytron': require('./assets/fonts/Ladytron.otf'),
//     //   'Beri-Sintta': require('./assets/fonts/Beri-Sintta.otf')
//     // }]);
//     const fonts = cacheFonts([Ionicons.font, FontAwesome.font]);
//     return Promise.all([...images, ...fonts]);
//   };

//   const onFinish = () => setDataLoaded(true);

//   return ( 
//     dataLoaded ? 
//       ( <>
//           <NavigationContainer>
//             <Drawer />
//           </NavigationContainer>  
//         </>
//       ) : (
//         <AppLoading
//           startAsync={cacheResourcesAsync}
//           onFinish={onFinish}
//           onError={console.warn}
//         />
//       )
//   );
// }
// export default App;