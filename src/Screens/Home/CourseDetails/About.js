import {View} from 'react-native';
import React from 'react';
import {Button, Text} from '../../../Components/Input';
import {Screen} from '../../../Components/Screen';
import {Avatar} from 'react-native-paper';
import RazorPay from '../../../Utils/RazorPay';
export default function About({route}) {
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
          <Avatar.Image size={60} source={{uri: 'https://i.pravatar.cc/300'}} />
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold'}}>Ankit Budhori</Text>
            <Text>Senior UI/UX Designer</Text>
          </View>
        </View>
      </View>
      <View style={{marginVertical: 10}}>
        <Text size="medium" style={{fontWeight: 'bold', marginBottom: 10}}>
          About Course
        </Text>
        <Text>
          loream ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. loream \n
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. loream ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod
        </Text>
      </View>
      <View style={{marginVertical: 10}}>
        <Button
          name="Enter Course"
          onPress={() => RazorPay(data?.price, data?.course_id)}
        />
      </View>
    </Screen>
  );
}
