import * as React from 'react';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const CleanerProfileScreen = ({ cleaner, users, navigation }) => {
  // console.log('C', cleaner);
  // console.log('U', users);

  return (
    <>
      <Container>
        <Text>CleanerProfileScreen</Text>
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

CleanerProfileScreen.propTypes = {
  navigation: PropTypes.object,
  users: PropTypes.object,
  cleaner: PropTypes.object,
  deleteCleanerWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { users: state.users, cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(CleanerProfileScreen);
