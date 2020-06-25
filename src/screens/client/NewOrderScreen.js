import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { TabView } from 'react-native-tab-view';
import OrderSpecs from '../../components/order/OrderSpecs';
import OrderNotes from '../../components/order/OrderNotes';
import SetupOrAdd from '../../components/order/SetupOrAdd';
import PropTypes from 'prop-types';
import SelectPhoto from '../../components/order/SelectPhoto';
import * as actions from '../../actions';

const initialLayout = { width: Dimensions.get('window').width };

const NewOrderScreen = ({ addOrder, navigation }) => {
  // ALL HOOKS FOR ORDERFORM VALUES
  console.log(addOrder);
  const [image, setImage] = useState('empty.img');
  const [index, setIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState('Within Two Days');
  const [shoeTypes, setShoeTypes] = useState({
    INDOOR: false,
    OUTDOOR: false,
    EXERCISE: false,
    LEISURE: false,
    FORMAL: false,
    SOCIAL: false,
  });
  const [note, setNote] = useState('');
  // ROUTE STATE
  const [routes] = useState([
    { key: 'first' },
    { key: 'second' },
    { key: 'third' },
    { key: 'fourth' },
  ]);
  const orderInfo = {
    image: image,
    shoeTypes: 'indoor',
    timeFrame: sliderValue,
    note: note,
    price: 7,
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
            submit={() => addOrder({ orderInfo })}
            jumpTo={jumpTo}
            image={image}
            navigation={navigation}
          />
        );
      default:
        return null;
    }
  };

  return (
    <TabView
      swipeEnabled={index === 1 || image === 'empty.img' ? false : true}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

NewOrderScreen.propTypes = {
  navigation: PropTypes.object,
  jumpTo: PropTypes.func,
  route: PropTypes.object,
  addOrder: PropTypes.func,
};

export default connect(null, actions)(NewOrderScreen);
