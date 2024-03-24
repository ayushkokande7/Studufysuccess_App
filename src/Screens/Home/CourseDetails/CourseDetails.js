import {View, Image} from 'react-native';
import {Text} from '../../../Components/Input';
import {Screen} from '../../../Components/Screen';
import {Icon, IconButton, Divider} from 'react-native-paper';
import {TopNavigation} from '../../../Navigation';
import {Lessons, About, Reviews} from './index';
import {SharedElement} from 'react-navigation-shared-element';
const CourseDetails = ({route}) => {
  const {data} = route.params;
  const tabs = [
    {name: 'About', component: About},
    {
      name: 'Lessons',
      component: Lessons,
      data: {data: {lecturec: 0, id: data?.course_id}, padding: true},
    },
    {name: 'Reviews', component: Reviews},
  ];
  return (
    <Screen style={{height: '140%'}}>
      <SharedElement id={`item.${data?.course_id}.image`}>
        <Image
          source={{uri: data?.image}}
          style={{
            height: 150,
            width: '100%',
            alignSelf: 'center',
            marginVertical: 10,
            borderRadius: 5,
          }}
        />
      </SharedElement>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text size="large">{data?.course_name}</Text>
        <IconButton icon="bookmark-outline" size={30} onPress={() => {}} />
      </View>
      <View
        style={{
          marginVertical: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text size="medium" style={{fontWeight: 'bold', color: '#007171'}}>
          {data?.price}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon source="star" size={20} />
          <Text>{data?.ratings}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 10,
          marginBottom: 20,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon source="account-group" size={23} />
          <Text> 56 Students</Text>
        </View>

        <Text>
          <Icon source="clock" size={20} /> {data.duration}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon source="certificate" size={20} />
          <Text> Certificate</Text>
        </View>
      </View>
      <Divider />
      <TopNavigation tabs={tabs} />
    </Screen>
  );
};

export default CourseDetails;
