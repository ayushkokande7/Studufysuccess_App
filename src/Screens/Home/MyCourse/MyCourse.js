import {TopNavigation} from '../../../Navigation';
import {Ongoing, Completed} from './index';
import {Screen} from '../../../Components/Screen';
export default function MyCourse() {
  const tabs = [
    {name: 'Ongoing', component: Ongoing},
    {name: 'Completed', component: Completed},
  ];
  return (
    <Screen list NoHeader padding>
      <TopNavigation tabs={tabs} />
    </Screen>
  );
}
