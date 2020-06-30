import React from 'react';
import { ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import OrderItem from '../../components/order/OrderItem';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

const HomeScreen = ({ orders }) => {
  console.log('Home ORDERS: ', orders);

  const navigation = useNavigation();

  // const handleClick = (item) => {
  //   if (orders.map((item) => item.requestCompleted)[0]) {
  //     navigation.navigate('OrderStatus', item);
  //   } else {
  //     navigation.navigate('OrderFinal', item);
  //   }
  // };

  const handleClick = (item) => {
    navigation.navigate('OrderFinal', item);
  };

  if (orders.length !== 0) {
    return (
      <>
        <ListContainer>
          <ImageArea onPress={() => navigation.navigate('NewOrder')}>
            <Image source={require('../../../assets/images/logo.png')} />
          </ImageArea>
        </ListContainer>

        <ScrollView
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            margin: 10,
          }}
        >
          {orders &&
            orders.map((item) => {
              // console.log(item);
              console.log('ITEM', item.uuid);
              return (
                <TouchableOpacity
                  key={item.uuid}
                  onPress={() => handleClick(item)}
                >
                  <ItemsContainer>
                    <OrderItem order={item} />
                  </ItemsContainer>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
      </>
    );
  } else {
    return (
      <>
        <HomeContainer>
          <ImageArea onPress={() => navigation.navigate('NewOrder')}>
            <Image source={require('../../../assets/images/logo.png')} />
          </ImageArea>
        </HomeContainer>
      </>
    );
  }
};

const HomeContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: #cbb387;
`;

const ListContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3.2}px;
  align-items: center;
  justify-content: center;
  background-color: #cbb387;
`;

const ImageArea = styled.TouchableOpacity`
  width: 200px;
  height: 200px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const ItemsContainer = styled.View`
  margin: 10px;
  flex-direction: row;
  flex-wrap: wrap;
`;

HomeScreen.propTypes = {
  orders: PropTypes.array,
};

const mapStateToProps = (state) => {
  return { orders: state.orders };
};

export default connect(mapStateToProps, actions)(HomeScreen);

// import React from 'react';
// // import { Image } from 'react-native';
// import styled from 'styled-components/native';
// import { Button } from 'react-native-elements';
// // import OrdersList from "../client/OrdersListScreen";
// // import { useRoute, useNavigation } from '@react-navigation/native';
// // import NewOrder from "../client/NewOrderScreen";

// const HomeScreen = ({ navigation }) => {
//   return (
//     <Container>
//       <ImageArea onPress={() => navigation.navigate('NewOrder')}>
//         <Image source={require('../../../assets/images/logo.png')} />
//       </ImageArea>
//       <Button
//         title="NEW ORDER"
//         containerStyle={{ paddingTop: 20, width: 350 }}
//         buttonStyle={{ backgroundColor: 'black', height: 50, borderRadius: 7 }}
//         onPress={() => navigation.navigate('NewOrder')}
//       />
//       <Button
//         title="MY ORDERS"
//         containerStyle={{ paddingTop: 20, width: 350 }}
//         buttonStyle={{ backgroundColor: 'black', height: 50, borderRadius: 7 }}
//         onPress={() => navigation.navigate('OrdersList')}
//       />
//     </Container>
//   );
// };

// const Container = styled.View`
//   flex: 1;
//   align-items: center;
//   justify-content: center;
//   background-color: #cbb387;
// `;

// const ImageArea = styled.TouchableOpacity`
//   width: 200px;
//   height: 200px;
//   margin-bottom: 30px;
// `;

// const Image = styled.Image`
//   width: 100%;
//   height: 100%;
// `;

// const Text = styled.Text`
//   color: black;
//   font-size: 50px;
//   font-weight: 500;
//   font-family: Marison-Script-Vintage;
// `;

// export default HomeScreen;
