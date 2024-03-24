import React from 'react';
import {Screen, Transaction} from '../../../Components/Screen';
const Payment = ({navigation}) => {
  return (
    <Screen>
      <Transaction navigation={navigation} />
      <Transaction />
    </Screen>
  );
};

export default Payment;
