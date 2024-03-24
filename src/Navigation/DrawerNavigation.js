import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomNavigation} from './index';
import {DrawerComponent} from '../Components/Navigation';
import {useTheme, Icon} from 'react-native-paper';
import {AppBar} from '../Components/Navigation';
const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  const theme = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerComponent {...props} />}
      screenOptions={{
        headerShown: false,
        // header: props => <AppBar {...props} />,
        drawerActiveBackgroundColor: theme.colors.primary,
        drawerActiveTintColor: theme.colors.onPrimary,
        drawerInactiveTintColor: theme.colors.onBackground,
        drawerStyle: {
          backgroundColor: theme.colors.elevation.level3,
        },
        drawerLabelStyle: {
          fontSize: 15,
          marginLeft: -20,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={BottomNavigation}
        options={{
          drawerIcon: ({color, size}) => (
            <Icon source="home" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
