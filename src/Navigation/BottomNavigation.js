import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {Wishlist, Profile, MyCourse} from '../Screens/Home';
import Main from '../Screens/Home/Main';
import Micon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme} from 'react-native-paper';
export default function BottomNavigation() {
  const Tab = createMaterialBottomTabNavigator();
  const theme = useTheme();
  return (
    <>
      <Tab.Navigator
        activeColor={theme.colors.primary}
        barStyle={{
          height: 50,
          justifyContent: 'center',
          backgroundColor: theme.colors.elevation.level1,
        }}
        screenOptions={{
          tabBarHideOnKeyboard: true,
          headerShown: false,
        }}>
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Home',
            tabBarIcon: ({focused}) => (
              <Micon
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color={
                  focused ? theme.colors.primary : theme.colors.onSurfaceVariant
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="MyCourse"
          component={MyCourse}
          options={{
            title: 'My Course',
            tabBarIcon: ({focused}) => (
              <Micon
                name={focused ? 'book-open-variant' : 'book-open-blank-variant'}
                size={23}
                color={
                  focused ? theme.colors.primary : theme.colors.onSurfaceVariant
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            tabBarIcon: ({focused}) => (
              <Micon
                name={focused ? 'heart' : 'heart-outline'}
                size={24}
                color={
                  focused ? theme.colors.primary : theme.colors.onSurfaceVariant
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <Micon
                name={focused ? 'account-circle' : 'account-circle-outline'}
                size={24}
                color={
                  focused ? theme.colors.primary : theme.colors.onSurfaceVariant
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}
