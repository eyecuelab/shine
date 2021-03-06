import React from 'react';
import { connect } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import styled from 'styled-components/native';
import ScrollViewContailner from '../../components/shared/ScrollViewContainer';
import ShoePhoto from '../../components/shared/ShoePhoto';
import DashedLine from '../../components/shared/Dash';
import UniversalButton from '../../components/shared/UniversalButton';
import { formatDate } from '../../components/shared/FormatDate';
import PropTypes from 'prop-types';
import * as actions from '../../rdx/actions';

const OrderConfirmScreen = ({ navigation, order, quoteAcceptWatcher }) => {
  const route = useRoute();
  const item = route.params;
  const cleanerID = item.attributes.cleaner_id.toString();
  const imageUrl = order.data.attributes.image_url;

  const onSubmit = () => {
    quoteAcceptWatcher({
      cleaner_id: cleanerID,
    });
    navigation.navigate('Home');
  };

  const onCancel = () => {
    navigation.navigate('OrderFinal');
  };

  return (
    <ScrollViewContailner>
      {ShoePhoto(imageUrl)}
      <Container>
        <InfoContainer>
          <TitelText>
            Final Price :<InfoText> $ {item.attributes.quoted_price}</InfoText>
          </TitelText>
          <TitelText>
            Service Due:
            <InfoText> {formatDate(item.attributes.delivery_by)}</InfoText>
          </TitelText>
        </InfoContainer>

        <UniversalButton
          title={'PLACE MY ORDER'}
          width={275}
          onPress={onSubmit}
        />

        <DashedLine />
        <UniversalButton
          title={'SEE OTHER QUOTES'}
          width={275}
          onPress={onCancel}
        />
      </Container>
    </ScrollViewContailner>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const InfoContainer = styled.View`
  width: 70%;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
`;

const TitelText = styled.Text`
  font-family: Raleway-Bold;
  font-size: 20px;
  margin-vertical: 10px;
`;

const InfoText = styled.Text`
  font-family: Raleway-Medium;
  font-size: 18px;
  margin-bottom: 5px;
  margin-left: 20px;
`;

OrderConfirmScreen.propTypes = {
  navigation: PropTypes.object,
  cleaner: PropTypes.object,
  quoteAcceptWatcher: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { order: state.orders.selectedOrder };
};

export default connect(mapStateToProps, actions)(OrderConfirmScreen);
