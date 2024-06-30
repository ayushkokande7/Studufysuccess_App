import {View} from 'react-native';
import {IconButton, useTheme} from 'react-native-paper';
import {useState} from 'react';
import {useMutation} from '@tanstack/react-query';
import useApi from '../Api/Api';
const LikeButton = ({favid, courseid}) => {
  const [fav, setFav] = useState(favid == null ? false : true);
  const {colors} = useTheme();

  const {mutate: addfav} = useMutation({
    mutationFn: e => {
      setFav(e => !e);
      useApi().post('/course/favourite', {course_id: courseid});
    },
  });
  const {mutate: revFav} = useMutation({
    mutationFn: e => {
      setFav(e => !e);
      useApi().post('/course/remove_favourite', {course_id: courseid});
    },
  });

  return (
    <View>
      {fav ? (
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
  );
};

export default LikeButton;
