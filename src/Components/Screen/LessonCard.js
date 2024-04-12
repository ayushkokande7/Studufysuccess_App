import {View, StyleSheet} from 'react-native';
import {Avatar, Icon, TouchableRipple, useTheme} from 'react-native-paper';
import {Text} from '../Input';

const LessonCard = ({title, duration, number, onPress, isLocked}) => {
  const theme = useTheme();
  return (
    <TouchableRipple
      onPress={!isLocked && onPress}
      style={[
        styles.container,
        {backgroundColor: theme.colors.elevation.level2},
      ]}>
      <View style={styles.wrapper}>
        <Avatar.Text
          label={number}
          size={50}
          backgroundColor={theme.colors.elevation.level5}
          color={theme.colors.onBackground}
        />
        <View style={styles.right}>
          <View style={{flex: 1}}>
            <Text size="medium" style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={{fontSize: 14}}>{duration}</Text>
          </View>
          {isLocked ? (
            <Icon source="lock" size={25} />
          ) : (
            <Icon source="play-circle" size={30} color={theme.colors.primary} />
          )}
        </View>
      </View>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  wrapper: {
    flexDirection: 'row',
    gap: 15,
  },
  right: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 5,
    textTransform: 'capitalize',
  },
});
export default LessonCard;
