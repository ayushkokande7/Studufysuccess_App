import {TopNavigation} from '../../../Navigation';
import {Ongoing, Completed} from './index';
import {View, StatusBar} from 'react-native';
export default function MyCourse() {
  const height = StatusBar.currentHeight || 0;
  const tabs = [
    {name: 'Ongoing', component: Ongoing},
    {name: 'Completed', component: Completed},
  ];
  return (
    <View style={{marginTop: height, flex: 1}}>
      <TopNavigation tabs={tabs} />
    </View>
  );
}
