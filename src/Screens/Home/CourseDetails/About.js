import {View} from 'react-native';
import React from 'react';
import {Button, Text} from '../../../Components/Input';
import {Screen} from '../../../Components/Screen';
import {Avatar} from 'react-native-paper';
import RazorPay from '../../../Utils/RazorPay';
export default function About({route, navigation}) {
  const data = route.params;
  return (
    <Screen padding hideScrollbar showsVerticalScrollIndicator={false}>
      <View style={{marginTop: 10}}>
        <Text size="medium" style={{fontWeight: 'bold'}}>
          Mentor
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Avatar.Text size={50} label={data?.instructor_name[0]} />
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold'}}>{data?.instructor_name}</Text>
          </View>
        </View>
      </View>
      <View style={{marginVertical: 10}}>
        <Text size="medium" style={{fontWeight: 'bold', marginBottom: 10}}>
          About Course
        </Text>
        <Text>{data.course_description}</Text>
      </View>
      <View style={{marginVertical: 10}}>
        {data?.payment_id != null ? (
          <Button name="Already Purchased" />
        ) : (
          <Button
            name={`Pay Now ₹${data?.price}`}
            onPress={() => RazorPay(data?.price, data?.course_id, navigation)}
          />
        )}
      </View>
    </Screen>
  );
}
