import React, { useState, useEffect } from 'react';
import { Image, Dimensions, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import styled from 'styled-components/native';
import { Button } from 'react-native-elements';
import { TabView, SceneMap } from 'react-native-tab-view';
import OrderSpecs from './OrderSpecs';
import OrderNotes from './OrderNotes';
import SetupOrAdd from './SetupOrAdd';

const options = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: true,
  aspect: [4, 3],
  quality: 1,
};

const initialLayout = { width: Dimensions.get('window').width };
const { width, height } = Dimensions.get("window");

const SelectPhoto = ({ navigation }) => {

  const [image, setImage] = useState(null);
  
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first' },
    { key: 'second' },
    { key: 'third' },
    { key: 'fourth' }
  ]);
  
  const renderScene = ({ route, jumpTo  }) => {

    switch (route.key) {
      case 'first':
        return (  
          <Container>  
            <ImageArea source={{ uri: image }} />
            <Container>
            <Button 
              title="SELECT ANOTHER PHOTO" 
              containerStyle={{paddingTop: 20, width: 350 }}
              buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
              onPress={() => setImage(null)} />
            <Button 
              title="CONTINUE"
              containerStyle={{paddingTop: 20, width: 350 }}
              buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
              onPress={() => {
                jumpTo("second")
              }}
            />
            </Container>    
          </Container>
        )
      case 'second':
        return <OrderSpecs jumpTo={jumpTo} image={image} />

      case 'third':
        return <OrderNotes jumpTo={jumpTo} image={image} />

      case 'fourth':
        return <SetupOrAdd jumpTo={jumpTo} image={image} navigation={navigation} />
        
      default: 
        return null; 
    }
  };

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera permissions to make this work!');
        }
      }
    })();
  }, []);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync(options);
    // console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const TakePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync(options);
    // console.log(result.uri);
    if (!result.cancelled) {
      setImage(result.uri)
    }
  } 

  return !image ? 
  (
    <Container>
      <Button 
        title="UPLOAD PHOTO" 
        containerStyle={{paddingTop: 20, width: 350 }}
        buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
        onPress={PickImage} 
      />
      <Button 
        title="TAKE A PHOTO" 
        containerStyle={{paddingTop: 20, width: 350 }}
        buttonStyle={{backgroundColor: 'black', height: 50, borderRadius: 7}}
        onPress={TakePhoto} />
    </Container>
  ) : (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
}

const ImageArea = styled.Image`
 
  flex: .75;
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default SelectPhoto;