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
    {
      name: 'About',
      component: About,
      data: {price: data?.price, course_id: data?.course_id},
    },
    {
      name: 'Lessons',
      component: Lessons,
      data: {data: {lecturec: 0, id: data?.course_id}, padding: true},
    },
    {name: 'Reviews', component: Reviews},
  ];
  return (
    <Screen>
      <SharedElement id={`item.${data?.course_id}.image`}>
        <Image
          source={{uri: data?.image}}
          style={{
            height: 150,
            marginVertical: 5,
            borderRadius: 10,
            objectFit: 'fill',
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
        <IconButton
          icon={data?.favourite_id ? 'heart' : 'heart-outline'}
          size={27}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Text size="large" style={{color: '#007171'}}>
            ₹{data?.price}
          </Text>
          <Text
            size="medium"
            style={{color: '#a1a0a0', textDecorationLine: 'line-through'}}>
            ₹{data?.fake_price}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Icon source="star" size={22} color="#ffa500" />
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
          <Text> {data?.students_enrolled} Students</Text>
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
