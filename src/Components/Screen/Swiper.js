import {Icon, IconButton, TouchableRipple, useTheme} from 'react-native-paper';
import {windowWidth} from '../../Utils/Dimentions';
import {Text} from '../Input';
import {View, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
import {useMutation} from '@tanstack/react-query';
import useApi from '../Api/Api';
import {useState} from 'react';
const SwiperComponent = ({row = false, data}) => {
  const {colors} = useTheme();
  const [fav, setFav] = useState(data.favourite_id == null ? false : true);
  const navigation = useNavigation();
  const {mutate: addfav, isPending: p} = useMutation({
    mutationFn: e =>
      useApi().post('/course/favourite', {course_id: data.course_id}),
    onSuccess: res => {
      if (res.status == 200) setFav(true);
    },
  });

  const {mutate: revFav, isPending: q} = useMutation({
    mutationFn: e =>
      useApi().post('/course/remove_favourite', {course_id: data.course_id}),
    onSuccess: res => {
      if (res.status == 200) setFav(false);
    },
  });

  return (
    <TouchableRipple
      onPress={() => navigation.navigate('CourseDetails', {data: data})}
      style={{
        width: row ? windowWidth(84) : windowWidth(94),
        marginRight: row ? 15 : 0,
        backgroundColor: colors.elevation.level2,
        borderRadius: 15,
        padding: 10,
        marginBottom: !row ? 20 : 0,
      }}>
      <View style={styles.container}>
        <SharedElement id={`item.${data?.course_id}.image`}>
          <Image
            source={{uri: data?.image}}
            style={{
              height: 140,
              width: 120,
              borderRadius: 15,
              objectFit: 'fill',
            }}
          />
        </SharedElement>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              size=""
              style={{
                backgroundColor: colors.primaryContainer,
                padding: 5,
                borderRadius: 5,
              }}>
              {data?.categories}
            </Text>
            <View>
              {p || q ? (
                <ActivityIndicator size={25} style={{padding: 13}} />
              ) : fav ? (
                <IconButton
                  icon="heart"
                  size={23}
                  iconColor={colors.primary}
                  onPress={revFav}
                />
              ) : (
                <IconButton
                  icon="heart-outline"
                  size={23}
                  iconColor={colors.primary}
                  onPress={addfav}
                />
              )}
            </View>
          </View>
          <View style={{justifyContent: 'space-evenly', flex: 1}}>
            <Text size="medium" style={{fontWeight: 'bold'}}>
              {data?.course_name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 15,
                alignItems: 'center',
              }}>
              <Text size="medium">₹{data?.price}</Text>
              <Text
                style={{color: '#a1a0a0', textDecorationLine: 'line-through'}}>
                ₹{data?.fake_price}
              </Text>
            </View>
            <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <Text>
                <Icon source="star" size={20} color="#ffa500" />
                {data?.ratings}
              </Text>
              <Text size="medium">|</Text>
              <Text>{data?.students_enrolled} students</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
  },
});

export default SwiperComponent;
