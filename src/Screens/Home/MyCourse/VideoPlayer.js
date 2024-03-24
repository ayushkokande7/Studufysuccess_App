import {Screen} from '../../../Components/Screen';
import VideoPlayer from 'react-native-video-controls';
import Orientation, {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';
import {useEffect} from 'react';
import useApi from '../../../Components/Api/Api';
const VideoPlayers = ({route, navigation}) => {
  const {data, course, lec} = route.params;
  const updateProgress = async () => {
    const response = await useApi().post('/course/progress', {
      course_id: course.id,
      progress: data.id,
    });
    if (response.message) lec(data.id + 1);
    navigation.goBack();
  };
  const handleOrientationChange = orientation => {
    console.log(orientation);
    if (orientation === LANDSCAPE) {
      Orientation.lockToPortrait();
    } else {
      Orientation.lockToLandscape();
    }
  };
  useEffect(() => {
    return () => {
      Orientation.lockToPortrait();
    };
  });
  return (
    <Screen NoHeader padding>
      <OrientationLocker
        onDeviceChange={orientation =>
          handleOrientationChange(
            orientation === PORTRAIT ? LANDSCAPE : PORTRAIT,
          )
        }
      />
      <VideoPlayer
        source={{
          uri: data.video,
        }}
        onEnterFullscreen={() => handleOrientationChange(PORTRAIT)}
        onExitFullscreen={() => handleOrientationChange(LANDSCAPE)}
        muted={false}
        paused={false}
        // poster={data.poster}
        // resizeMode="contain"
        onEnd={updateProgress}
        disableVolume
        onBack={() => navigation.goBack()}
        seekColor="#007171"
        title={data.title}
      />
    </Screen>
  );
};

export default VideoPlayers;
