import {IconButton, TouchableRipple, useTheme} from 'react-native-paper';
import {windowWidth} from '../../Utils/Dimentions';
import {Text} from '../Input';
import {View, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SharedElement} from 'react-navigation-shared-element';
const SwiperComponent = ({row = false, data}) => {
  const {colors} = useTheme();
  const navigation = useNavigation();
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
            objectFit="contain"
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
              style={{backgroundColor: colors.primaryContainer, padding: 3}}>
              {data?.categories}
            </Text>
            <IconButton
              icon="heart"
              size={28}
              iconColor={colors.primary}
              onPress={() => {}}
            />
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
