import React from 'react';
import {View} from 'react-native';
import {Drawer, Avatar, TouchableRipple} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text} from '../Input';
import {useSelector} from 'react-redux';
const DrawerComponent = props => {
  const navigate = nav => {
    props.navigation.navigate(nav);
    props.navigation.closeDrawer();
  };
  const {user} = useSelector(state => state.initial);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <TouchableRipple onPress={() => navigate('Profile')}>
          <View
            style={{
              flexDirection: 'row',
              padding: 17,
              alignItems: 'center',
            }}>
            <Avatar.Text size={60} label="Ax" />
            <View style={{marginLeft: 8}}>
              <Text size="medium">{user.fname}</Text>
              <Text size="small">{user.lname}</Text>
            </View>
          </View>
        </TouchableRipple>
        <View style={{marginLeft: -10}}>
          <Drawer.Item
            label="Report Issue or Bug"
            icon="bug"
            onPress={() => navigate('Appreport')}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerComponent;
