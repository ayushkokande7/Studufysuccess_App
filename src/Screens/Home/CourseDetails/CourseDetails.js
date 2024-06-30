import {View, Image} from 'react-native';
import {Text} from '../../../Components/Input';
import {Screen} from '../../../Components/Screen';
import {Icon, Divider} from 'react-native-paper';
import {TopNavigation} from '../../../Navigation';
import {Lessons, About, Reviews} from './index';
import LikeButton from '../../../Components/Screen/LikeButton';
const CourseDetails = ({route}) => {
  const {data} = route.params;
  const tabs = [
    {
      name: 'About',
      component: About,
      data: data,
    },
    {
      name: 'Lessons',
      component: Lessons,
      data: {data: {lecturec: 0, id: data?.course_id}, padding: true},
    },
    // {name: 'Reviews', component: Reviews},
  ];
  return (
    <Screen>
      <Image
        source={{uri: data?.image}}
        style={{
          height: 150,
          marginVertical: 5,
          borderRadius: 10,
          objectFit: 'fill',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 40,
        }}>
        <Text size="large" numberOfLines={1}>
          {data?.course_name}
        </Text>
        <LikeButton favid={data?.favourite_id} courseid={data?.course_id} />
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
          marginVertical: 5,
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
