import {Ongoing, Completed} from './index';
import {useState} from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Screen} from '../../../Components/Screen';
import {TouchableRipple} from 'react-native-paper';
import {Text} from '../../../Components/Input';
export default function MyCourse({navigation}) {
  const {colors} = useTheme();
  const [tab, setTab] = useState(0);
  return (
    <Screen list NoHeader padding>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 10,
          gap: 10,
        }}>
        <TouchableRipple
          style={{
            flex: 1,
            backgroundColor:
              tab == 0 ? colors.primaryContainer : colors.elevation.level2,
            padding: 10,
            alignItems: 'center',
            borderRadius: 10,
          }}
          onPress={() => setTab(0)}>
          <Text size="medium" style={{fontWeight: 'bold'}}>
            Ongoing
          </Text>
        </TouchableRipple>
        <TouchableRipple
          style={{
            flex: 1,
            backgroundColor:
              tab == 1 ? colors.primaryContainer : colors.elevation.level2,
            padding: 10,
            alignItems: 'center',
            borderRadius: 10,
          }}
          onPress={() => setTab(1)}>
          <Text size="medium" style={{fontWeight: 'bold'}}>
            Completed
          </Text>
        </TouchableRipple>
      </View>
      {tab == 0 ? (
        <Ongoing navigation={navigation} />
      ) : (
        <Completed navigation={navigation} />
      )}
    </Screen>
  );
}
