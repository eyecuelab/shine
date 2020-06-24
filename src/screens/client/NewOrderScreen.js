import React, { useState } from 'react';
import { Dimensions } from 'react-native';
import { TabView } from 'react-native-tab-view';
import OrderSpecs from '../../components/order/OrderSpecs';
import OrderNotes from '../../components/order/OrderNotes';
import SetupOrAdd from '../../components/order/SetupOrAdd';
import PropTypes from 'prop-types';
import SelectPhoto from '../../components/order/SelectPhoto';

const initialLayout = { width: Dimensions.get('window').width };

const NewOrderScreen = ({ navigation }) => {
  const [image, setImage] = useState('empty.img');
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first' },
    { key: 'second' },
    { key: 'third' },
    { key: 'fourth' },
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'first':
        return (
          <SelectPhoto jumpTo={jumpTo} image={image} setImage={setImage} />
        );
      case 'second':
        return <OrderSpecs jumpTo={jumpTo} image={image} />;
      case 'third':
        return <OrderNotes jumpTo={jumpTo} image={image} />;
      case 'fourth':
        return (
          <SetupOrAdd jumpTo={jumpTo} image={image} navigation={navigation} />
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
};

export default NewOrderScreen;
