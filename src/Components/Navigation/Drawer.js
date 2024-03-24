import React from 'react';
import {View} from 'react-native';
import {Drawer, Avatar, TouchableRipple} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text} from '../Input';

const DrawerComponent = props => {
  const navigate = nav => {
    props.navigation.navigate(nav);
    props.navigation.closeDrawer();
  };
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
            <View>
              <Text size="medium" style={{marginLeft: 8}}>
                Ankit
              </Text>
              <Text size="small" style={{marginLeft: 8}}>
                Budhori
              </Text>
            </View>
          </View>
        </TouchableRipple>
        <DrawerItemList {...props} />
        {/* <Drawer.Item
          label="Short Courses"
          icon="book-open-page-variant-outline"
          onPress={() => navigate('CourseDetails')}
          style={{marginLeft: 5}}
        />
        <Drawer.Item
          label="Resources"
          icon="shield-search"
          onPress={() => {}}
          style={{marginLeft: 5}}
        />
        <Drawer.Item
          label="Tearms and Conditions"
          icon="shield-search"
          onPress={() => {}}
          style={{marginLeft: 5}}
        />
        <Drawer.Item
          label="Privacy Policy"
          icon="shield-search"
          onPress={() => {}}
          style={{marginLeft: 5}}
        /> */}
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerComponent;
