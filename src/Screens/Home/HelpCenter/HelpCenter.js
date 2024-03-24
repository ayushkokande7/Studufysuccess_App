import {TopNavigation} from '../../../Navigation';
import {FAQ, ContactUs} from './index';
export default function HelpCenter({navigation}) {
  // const tabs = [
  //   {name: 'FAQ', component: FAQ},
  //   {name: 'Contact Us', component: ContactUs},
  // ];
  return (
    // <TopNavigation tabs={tabs} />
    <ContactUs navigation={navigation} />
  );
}
