import React from 'react';
import { Dimensions, View } from 'react-native';
import Dash from 'react-native-dash';

const { width, height } = Dimensions.get("window");

const DashedLine = () => {
  return (
    <View style={{alignItems: "center", marginVertical: 20}}>
      <Dash 
        style={{width:width * 0.8, height:2, flex: 1}}
        dashColor="#CBB387"  
        dashGap={5}
      />
    </View>
  )
}

export default DashedLine;
