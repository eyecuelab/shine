import React, { useState } from 'react';
import uuid from 'uuid';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { TabView, TabBar } from 'react-native-tab-view';
import OrderSpecs from '../../components/order/OrderSpecs';
import OrderNotes from '../../components/order/OrderNotes';
import SetupOrAdd from '../../components/order/SetupOrAdd';
import PropTypes from 'prop-types';
import SelectPhoto from '../../components/order/SelectPhoto';
import * as actions from '../../rdx/actions';
import _ from 'lodash';

const initialLayout = { width: Dimensions.get('window').width };

const NewOrderScreen = ({ navigation }) => {
  // ALL HOOKS FOR ORDERFORM VALUES
  const [image, setImage] = useState('empty.img');
  const [index, setIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState('Within Two Days');

  const [shoeTypes, setShoeTypes] = useState([
    { style: 'INDOOR', chosen: false },
    { style: 'OUTDOOR', chosen: false },
    { style: 'EXERCISE', chosen: false },
    { style: 'LEISURE', chosen: false },
    { style: 'FORMAL', chosen: false },
    { style: 'SOCIAL', chosen: false },
  ]);

  const [note, setNote] = useState('');
  // ROUTE STATE
  const [routes] = useState([
    { key: 'first', title: 'Step 1' },
    { key: 'second', title: 'Step 2' },
    { key: 'third', title: 'Step 3' },
    { key: 'fourth', title: 'Step 4' },
  ]);
  // PLEASE KEEP FOR REFERENCE
  // const [selected, setSelected] = useState([]);

  // const filterShoeTypes = () => {
  //   shoeTypes.map((item) => {
  //     if (item.chosen === true) {
  //       setSelected((selected) => [...selected, item.style]);
  //     }
  //   });
  // };

  const orderInfo = {
    uuid: uuid.v4(),
    image: image,
    shoeTypes: shoeTypes,
    timeFrame: sliderValue,
    note: note,
  };

  const onSubmit = () => {
    navigation.navigate('OrderDetail', orderInfo);
  };

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'first':
        return (
          <SelectPhoto jumpTo={jumpTo} image={image} setImage={setImage} />
        );
      case 'second':
        return (
          <OrderSpecs
            jumpTo={jumpTo}
            image={image}
            sliderValue={sliderValue}
            setSliderValue={setSliderValue}
            shoeTypes={shoeTypes}
            setShoeTypes={setShoeTypes}
          />
        );
      case 'third':
        return (
          <OrderNotes
            jumpTo={jumpTo}
            image={image}
            note={note}
            setNote={setNote}
          />
        );
      case 'fourth':
        return (
          <SetupOrAdd
            submit={() => onSubmit()}
            setImage={setImage}
            jumpTo={jumpTo}
            image={image}
            orderInfo={orderInfo}
            navigation={navigation}
          />
        );
      default:
        return null;
    }
  };

  return (
    <TabView
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: '#2c2c2c', height: 3 }}
          style={{ backgroundColor: '#CBB387' }}
        />
      )}
      swipeEnabled={index === 1 || image === 'empty.img' ? false : true}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

const mapStateToProps = (state) => {
  return { orders: state.orders };
};

NewOrderScreen.propTypes = {
  navigation: PropTypes.object,
  jumpTo: PropTypes.func,
  route: PropTypes.object,
  // addOrder: PropTypes.func,
  orders: PropTypes.array,
};

export default connect(mapStateToProps, actions)(NewOrderScreen);
