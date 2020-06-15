import React from 'react';
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const Header = ({ title, navigation }) => {

  const openMenu = () => {
    navigation.openDrawer();
  }

  return (
    <SafeAreaView>
      <Container>
        <Icon>
          <MaterialIcons name='menu' size={28} onPress={openMenu} />
        </Icon>
        <Text>{title}</Text>
      </Container>
    </SafeAreaView>
  );
}

const SafeAreaView = styled.SafeAreaView`
  background: #CBB387;
  flex: 0.1;
`;

const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.View`
  position: absolute;
  right: 16px;
`;

const Text = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #333;
  letter-spacing: 1;
`;

Header.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.object
}

export default Header;


