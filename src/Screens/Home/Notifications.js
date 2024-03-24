import React from 'react';
import {Text} from '../../Components/Input';
import {Screen} from '../../Components/Screen';
import {Icon} from 'react-native-paper';
const Notifications = () => {
  return (
    <Screen style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginBottom: 10}}>No Notifications</Text>
      <Icon source="bell" size={25} />
    </Screen>
  );
};

export default Notifications;
