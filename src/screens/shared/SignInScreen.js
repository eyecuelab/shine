import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import {
  Dimensions,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AuthContext from '../../components/AuthContext';
import { Feather } from '@expo/vector-icons';
import { loginWatcher } from '../../rdx/actions';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

const SignInScreen = ({ loginWatcher }) => {
  // const { authContext } = React.useContext(AuthContext);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry((previousState) => !previousState);
  };

  const navigation = useNavigation();
  const onSubmit = () => {
    // console.log('authParams:', email);
    loginWatcher({ email, password });
    navigation.navigate('Profile');
  };

  return (
    <>
      <Container>
        <TextInput
          placeholder="Email"
          returnKeyType="next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <InputContainer>
          <TextInput
            placeholder="Password"
            returnKeyType="done"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
          />
          <SecureButton onPress={toggleSecureTextEntry}>
            {secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </SecureButton>
        </InputContainer>
        <Button
          title="Log in"
          containerStyle={{ paddingTop: 20, width: 350 }}
          buttonStyle={{
            backgroundColor: 'black',
            height: 50,
            borderRadius: 7,
          }}
          onPress={() => onSubmit()}
        />
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#8A8F9E',
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    width: width * 0.85,
    marginVertical: 5,
    paddingHorizontal: 20,
    fontSize: 15,
    color: '#161F3D',
  },
});

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const InputContainer = styled.View`
  flex-direction: row;
`;

const SecureButton = styled.TouchableOpacity`
  position: absolute;
  margin-left: 300px;
  margin-top: 15px;
`;

const Text = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

const mapStateToProps = (state) => {
  return { users: state.users };
};

// mapping dispatch functions to the props of LoginForm component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      loginWatcher,
      // add other watcher sagas to this object to map them to props
    },
    dispatch,
  );
};

SignInScreen.propTypes = {
  loginWatcher: PropTypes.func,
  users: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

// import * as React from 'react';
// import styled from 'styled-components/native';
// import { Button } from 'react-native-elements';
// import {
//   Dimensions,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import AuthContext from '../../components/AuthContext';
// import { Feather } from '@expo/vector-icons';

// const { width, height } = Dimensions.get('window');

// const SignInScreen = () => {
//   const { authContext } = React.useContext(AuthContext);

//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [secureTextEntry, setSecureTextEntry] = React.useState(true);

//   const toggleSecureTextEntry = () => {
//     setSecureTextEntry((previousState) => !previousState);
//   };

//   return (
//     <>
//       <Container>
//         <TextInput
//           placeholder="Email"
//           returnKeyType="next"
//           keyboardType="email-address"
//           autoCapitalize="none"
//           autoCorrect={false}
//           style={styles.input}
//           value={email}
//           onChangeText={setEmail}
//         />
//         <InputContainer>
//           <TextInput
//             placeholder="Password"
//             returnKeyType="done"
//             keyboardType="email-address"
//             autoCapitalize="none"
//             autoCorrect={false}
//             style={styles.input}
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry={secureTextEntry}
//           />
//           <SecureButton onPress={toggleSecureTextEntry}>
//             {secureTextEntry ? (
//               <Feather name="eye-off" color="grey" size={20} />
//             ) : (
//               <Feather name="eye" color="grey" size={20} />
//             )}
//           </SecureButton>
//         </InputContainer>
//         <Button
//           title="Log in"
//           containerStyle={{ paddingTop: 20, width: 350 }}
//           buttonStyle={{
//             backgroundColor: 'black',
//             height: 50,
//             borderRadius: 7,
//           }}
//           onPress={() => authContext.signIn({ email, password })}
//         />
//       </Container>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     borderBottomColor: '#8A8F9E',
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     height: 40,
//     width: width * 0.85,
//     marginVertical: 5,
//     paddingHorizontal: 20,
//     fontSize: 15,
//     color: '#161F3D',
//   },
// });

// const Container = styled.View`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
// `;

// const InputContainer = styled.View`
//   flex-direction: row;
// `;

// const SecureButton = styled.TouchableOpacity`
//   position: absolute;
//   margin-left: 300px;
//   margin-top: 15px;
// `;

// const Text = styled.Text`
//   color: black;
//   font-size: 20px;
//   font-weight: 500;
//   text-align: center;
// `;

// export default SignInScreen;
