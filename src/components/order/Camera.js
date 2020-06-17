// import React, { useState, useEffect } from 'react';
// import { Text, ActivityIndicator, Dimensions, TouchableOpacity } from 'react-native';
// import { Camera } from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';
// import * as Permissions from 'expo-permissions';
// import styled from "styled-components/native";
// import { MaterialIcons } from '@expo/vector-icons'; 
// import Header from '../shared/Header';

// const { width, height } = Dimensions.get("window");

// const CameraScreen = ({ navigation }) => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);
//   const cameraRef = React.createRef();
//   const ALBUM_NAME = "Shine";

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return (
//       <CenterView>
//         <ActivityIndicator />
//       </CenterView>
//     );  
//   }

//   if (hasPermission === false) {
//     return (
//       <CenterView>
//         <Text>No access to camera</Text>
//       </CenterView>
//     );  
//   }
  
//   const takePicture = async () => {
//     try {
//       if (cameraRef.current) {
//         const options = { quality: 1, base64: true };
//         let { uri } = await cameraRef.current.takePictureAsync(options);
//         // console.log(uri);
//         if (uri) {
//           savePicture(uri);
//         }
//       }
//     } catch (error) {
//       alert(error)
//     }  
//   };

//   const savePicture = async uri => {
//     try {
//       const { status } = await MediaLibrary.requestPermissionsAsync();
//       if (status === "granted") {
//         const asset = await MediaLibrary.createAssetAsync(uri);
//         // console.log(asset);
//         let album = await MediaLibrary.getAlbumAsync(ALBUM_NAME);
//         //console.log(album);
//         if (album === null) {
//           album = await MediaLibrary.createAlbumAsync(ALBUM_NAME, asset);
//         } else {
//           await MediaLibrary.addAssetsToAlbumAsync([asset], album.id);
//         }
//       } else {
//         setHasPermission(false);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <Header title="" navigation={navigation} />
//       <CenterView>
//         <Camera 
//           style={{ 
//             flex: 1,
//             width: width,
//             height: height / 2
//           }} 
//           type={type}
//           ref={cameraRef}
//         >
//           <SwitchCemeraIcon>
//             <TouchableOpacity
//               onPress={() => {
//                 setType(
//                   type === Camera.Constants.Type.back
//                     ? Camera.Constants.Type.front
//                     : Camera.Constants.Type.back
//                 );
//               }}>
//               <MaterialIcons name="switch-camera" size={36} color="white" />  
//             </TouchableOpacity>
//           </SwitchCemeraIcon>
//           <CameraIcon>
//             <TouchableOpacity 
//               onPress={takePicture}>
//               <MaterialIcons name="camera-alt" size={38} color="white" />
//             </TouchableOpacity>
//           </CameraIcon>    
//         </Camera>  
//       </CenterView>
//     </>
//   );
// }

// const CenterView = styled.View`
//   flex: 1;
//   flex-direction: row;
//   align-items: center;
//   background-color: transparent;
// `;

// const SwitchCemeraIcon = styled.View`
//   flex: 0.1;
//   margin: 20px 20px 0px 0px;
//   align-self: flex-end;
//   align-items: center;
// `;

// const CameraIcon = styled.View`
//   flex: 1;
//   flex-direction: row;
//   align-items: flex-end;
//   align-self: center;
//   margin-bottom: 20px;
// `;

// export default CameraScreen;