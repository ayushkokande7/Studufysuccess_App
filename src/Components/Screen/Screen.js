import {View, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import {windowPaddingHorizontal} from '../../Utils/Dimentions';
import {useTheme} from 'react-native-paper';
import {memo} from 'react';
function Screen({
  children,
  style,
  NoHeader = false,
  list = false,
  padding = false,
  ...props
}) {
  const height = StatusBar.currentHeight || 0;
  const theme = useTheme();
  if (list) {
    return (
      <View
        style={{
          marginTop: NoHeader ? height : 0,
          paddingHorizontal: windowPaddingHorizontal,
          backgroundColor: theme.colors.background,
          flexGrow: 1,
          width: '100%',
          ...style,
        }}>
        {children}
      </View>
    );
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.background}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          ...style,

          marginTop: NoHeader ? height : 0,
        }}
        {...props}
        nestedScrollEnabled
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled">
        <View
          style={{
            // marginTop: NoHeader ? height : 0,
            paddingHorizontal: padding ? 0 : windowPaddingHorizontal,
            flexGrow: 1,
            width: '100%',
            ...style,
          }}>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default memo(Screen);
