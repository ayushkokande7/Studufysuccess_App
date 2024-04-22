import VideoPlayer from 'react-native-video-controls';
import Orientation, {
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';
import {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import useApi from '../../../Components/Api/Api';
const VideoPlayers = ({route, navigation}) => {
  const {data, course, lec} = route.params;
  const updateProgress = async () => {
    const res = await useApi().post('/course/progress', {
      course_id: course.id,
      progress: data.id,
    });
    if (res.status === 200) lec(data.id + 1);
    navigation.goBack();
  };
  const handleOrientationChange = orientation => {
    if (orientation === LANDSCAPE) {
      Orientation.lockToPortrait();
      StatusBar.setHidden(false);
    } else {
      Orientation.lockToLandscape();
    }
  };
  useEffect(() => {
    return () => {
      Orientation.lockToPortrait();
      StatusBar.setHidden(false);
    };
  });
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
      }}>
      <VideoPlayer
        source={{
          uri: data.video,
        }}
        onEnterFullscreen={() => handleOrientationChange(PORTRAIT)}
        onExitFullscreen={() => handleOrientationChange(LANDSCAPE)}
        muted={false}
        paused={false}
        poster={data.poster}
        fullscreen={true}
        onEnd={updateProgress}
        disableVolume
        resizeMode="contain"
        onBack={() => navigation.goBack()}
        seekColor="#007171"
        title={data.title}
      />
    </View>
  );
};

export default VideoPlayers;
