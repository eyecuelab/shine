import React from 'react';
import SelectPhoto from "../../components/order/SelectPhoto";
import PropTypes from 'prop-types';

const NewOrderScreen = ({ navigation }) => {
  
  console.log("test" , navigation)
  return <SelectPhoto navigation={navigation} /> 
  
};  

NewOrderScreen.propTypes = {
  navigation: PropTypes.object
}

export default NewOrderScreen;