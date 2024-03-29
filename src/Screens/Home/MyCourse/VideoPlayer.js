import {Screen} from '../../../Components/Screen';
import VideoPlayer from 'react-native-video-controls';
import Orientation, {
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';
import {useEffect} from 'react';
import {StatusBar, PermissionsAndroid} from 'react-native';
import useApi from '../../../Components/Api/Api';
const VideoPlayers = ({route, navigation}) => {
  const {data, course, lec} = route.params;

  const requestCameraAndMicrophonePermission = async () => {
    try {
      const cameraPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera.',
          buttonPositive: 'OK',
        },
      );
      const microphonePermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Microphone Permission',
          message: 'App needs access to your microphone.',
          buttonPositive: 'OK',
        },
      );

      if (
        cameraPermission === PermissionsAndroid.RESULTS.GRANTED &&
        microphonePermission === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('Camera and microphone permissions granted');
      } else {
        console.log('Camera and microphone permissions denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    requestCameraAndMicrophonePermission();
  }, []);

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
      StatusBar.setHidden(true);
    }
  };
  useEffect(() => {
    return () => {
      Orientation.lockToPortrait();
      StatusBar.setHidden(false);
    };
  });
  return (
    <Screen padding>
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
        onBack={() => navigation.goBack()}
        seekColor="#007171"
        title={data.title}
        style={{flex: 1, backgroundColor: 'black'}}
      />
    </Screen>
  );
};

export default VideoPlayers;
