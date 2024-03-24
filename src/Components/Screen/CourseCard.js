import {View, StyleSheet, Image} from 'react-native';
import {TouchableRipple, useTheme} from 'react-native-paper';
import {Text} from '../Input';
export default function CourseCard({title, img, duration, progress, onPress}) {
  const theme = useTheme();
  return (
    <TouchableRipple
      onPress={onPress}
      style={[
        styles.container,
        {backgroundColor: theme.colors.elevation.level2},
      ]}>
      <View style={styles.wrapper}>
        <Image
          source={{
            uri: `${img}`,
          }}
          style={{height: 90, width: 90}}
          resizeMode="contain"
        />
        <View style={styles.right}>
          <Text
            size="medium"
            style={{fontWeight: 'bold', marginBottom: 2}}
            numberOfLines={1}>
            {title}
          </Text>
          <Text>{duration}</Text>
          <View style={styles.wrapper}>
            <View style={styles.progress}>
              <View
                style={[
                  styles.innerProgress,
                  {width: `${parseInt(progress)}%`},
                ]}
              />
            </View>
            <Text style={{marginRight: 5}}>{parseInt(progress)}% </Text>
          </View>
        </View>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 10,
    height: 110,
    borderRadius: 10,
  },
  wrapper: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  right: {
    flex: 1,
  },
  progress: {
    height: 8,
    backgroundColor: '#9e9e9ea4',
    flex: 1,
    borderRadius: 10,
  },
  innerProgress: {
    borderRadius: 10,
    height: 8,
    maxWidth: '100%',
    backgroundColor: '#008b8b',
  },
});
