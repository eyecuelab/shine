import * as React from 'react';
import { Button } from 'react-native-elements';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import AuthContext from '../../components/AuthContext';

const ClientProfileScreen = () => {
  const { state, authContext } = React.useContext(AuthContext);
  // console.log("signOut func", authContext.signOut);
  // console.log(state);

  return (
    <>
      <Container>
        <Text>Loged in!</Text>
        <Button
          title="Log Out"
          containerStyle={{ paddingTop: 20, width: 350 }}
          buttonStyle={{
            backgroundColor: 'black',
            height: 50,
            borderRadius: 7,
          }}
          onPress={() => authContext.signOut()}
        />
      </Container>
    </>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: black;
  font-size: 20px;
  font-weight: 500;
`;

ClientProfileScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ClientProfileScreen;
