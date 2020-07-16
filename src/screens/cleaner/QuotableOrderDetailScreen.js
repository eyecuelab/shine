import React from 'react';
import { connect } from 'react-redux';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import ShoePhoto from '../../components/shared/ShoePhoto';
import AddOnSwitch from '../../components/order/AddOnSwitch';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const QuotableOrderDetailScreen = ({ route }) => {
  const item = route.params;
  console.log('DETAIL', item);

  return (
    <ScrollViewContailner>
      {ShoePhoto(item.image)}
      <Container>
        <Text>{item.attributes.time_frame}</Text>
        <SwitchTextContainer>
          <SwitchText>ADD POLISH</SwitchText>
          <SwitchText>ADD RAIN PROTECTION</SwitchText>
          <SwitchText>REPLACE SHOELACES</SwitchText>
        </SwitchTextContainer>
        <SwitchContainer>
          <AddOnSwitch
            disabled={true}
            switchState={item.attributes.add_ons.polish}
          />
          <AddOnSwitch
            disabled={true}
            switchState={item.attributes.add_ons.rainProtection}
          />
          <AddOnSwitch
            disabled={true}
            switchState={item.attributes.add_ons.replaceLaces}
          />
        </SwitchContainer>
      </Container>
    </ScrollViewContailner>
  );
};

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Text = styled.Text`
  font-size: 20px;
  color: #8e1818;
`;

const SwitchTextContainer = styled.View`
  margin-right: 90px;
`;

const SwitchText = styled.Text`
  text-align: left;
  margin: 15px 0px 0px 20px;
  color: black;
  font-size: 18px;
`;

const SwitchContainer = styled.View`
  margin-top: 40px;
  padding-top: 10px;
`;

QuotableOrderDetailScreen.propTypes = {
  navigation: PropTypes.object,
  orders: PropTypes.array,
  cleaner: PropTypes.object,
};

const mapStateToProps = (state) => {
  return { orders: state.orders, cleaner: state.cleaner };
};

export default connect(mapStateToProps, actions)(QuotableOrderDetailScreen);
