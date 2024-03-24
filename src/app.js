import {
  MD3DarkTheme,
  MD3LightTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {DarkTheme, LightTheme} from './Utils/Theme';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigation, AppNavigation} from './Navigation';
import {StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import {BottomSheet} from './Components/Screen';
import FlashMessage from 'react-native-flash-message';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import CheckAuth from './Components/Api/CheckAuth';
const queryClient = new QueryClient();
const LightMode = {
  ...MD3LightTheme,
  colors: LightTheme,
};

const DarkMode = {
  ...MD3DarkTheme,
  colors: DarkTheme,
};
const App = () => {
  const {isDark, isUserLoggedIn} = useSelector(state => state.initial);
  const theme = isDark ? DarkMode : LightMode;
  return (
    <PaperProvider theme={theme}>
      <CheckAuth />
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent={true}
      />
      <NavigationContainer>
        <QueryClientProvider client={queryClient}>
          {isUserLoggedIn ? <AppNavigation /> : <AuthNavigation />}
        </QueryClientProvider>
      </NavigationContainer>
      <BottomSheet />
      <FlashMessage />
    </PaperProvider>
  );
};

export default App;
