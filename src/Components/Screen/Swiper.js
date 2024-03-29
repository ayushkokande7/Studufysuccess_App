import {IconButton, TouchableRipple, useTheme} from 'react-native-paper';
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
      setFav(true);
    },
  });

  const {mutate: revFav, isPending: q} = useMutation({
    mutationFn: e =>
      useApi().post('/course/remove_favourite', {fav_id: data.favourite_id}),
    onSuccess: res => {
      setFav(false);
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
            // objectFit="contain"
            style={{height: 150, width: 120}}
          />
        </SharedElement>
        <View style={{flex: 1}}>
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
                padding: 3,
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
          <View>
            <Text size="medium" style={{fontWeight: 'bold'}}>
              {data?.course_name}
            </Text>
            <Text>{data?.ratings}</Text>
            <Text>{data?.ratings}</Text>
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
