import React, { useState } from 'react';
import { Switch } from 'react-native';

const AdditionalServiceSwitch = () => {
  // ========= states for additional services ======================
  const [services, setServices] = useState([]);
  const isSelected = (service) => services.some((s) => s === service);
  const addService = (service) => {
    if (!isSelected(service)) {
      setServices([...services, service]);
    }
  };
  const removeService = (service) => {
    if (isSelected(service)) {
      setServices(services.filter((s) => s !== service));
    }
  };
  const toggleState = (service) =>
    isSelected(service) ? removeService(service) : addService(service);
  // ===============================================================

  // ==========states for toggle switch ============================
  const [addPolish, setAddPolish] = useState(false);
  const togglePolish = () => {
    setAddPolish((previousState) => !previousState);
  };

  const [addRainProtection, setAddRainProtection] = useState(false);
  const toggleRainProtection = () => {
    setAddRainProtection((previousState) => !previousState);
  };

  const [replaceShoelaces, setReplaceShoelaces] = useState(false);
  const toggleShoelaces = () => {
    setReplaceShoelaces((previousState) => !previousState);
  };
  // ===============================================================

  //console.log("Service", services);

  return (
    <>
      <Switch
        style={{
          transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
          marginBottom: 5,
        }}
        trackColor={{ false: '#767577', true: '#E6E6E6' }}
        thumbColor={addPolish ? '#CBB387' : '#f4f3f4'}
        ios_backgroundColor="#f4f3f4"
        onChange={() => toggleState('POLISH')}
        onValueChange={togglePolish}
        value={addPolish}
      />
      <Switch
        style={{
          transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
          marginBottom: 5,
        }}
        trackColor={{ false: '#939393', true: '#E6E6E6' }}
        thumbColor={addRainProtection ? '#CBB387' : '#f4f3f4'}
        ios_backgroundColor="#f4f3f4"
        onChange={() => toggleState('RAIN-PROTECTION')}
        onValueChange={toggleRainProtection}
        value={addRainProtection}
      />
      <Switch
        style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
        trackColor={{ false: '#767577', true: '#E6E6E6' }}
        thumbColor={replaceShoelaces ? '#CBB387' : '#f4f3f4'}
        ios_backgroundColor="#f4f3f4"
        onChange={() => toggleState('REPLACE-SHOELACE')}
        onValueChange={toggleShoelaces}
        value={replaceShoelaces}
      />
    </>
  );
};

export default AdditionalServiceSwitch;
