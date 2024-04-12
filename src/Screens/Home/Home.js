import {Screen} from '../../Components/Screen';
import {View, StyleSheet} from 'react-native';
import HomeHeader from '../../Components/Screen/HomeHeader';
import {CourseSecion, LiveClass} from '../../Components/Screen';
// import InAppReview from '../../Components/Screen/InAppReview';
const Home = () => {
  console.log('Home renderded');
  return (
    <Screen NoHeader>
      {/* <InAppReview /> */}
      <HomeHeader />
      <View style={styles.banner}></View>
      <LiveClass />
      <CourseSecion name="popular" />
      <CourseSecion name="trending" />
    </Screen>
  );
};
const styles = StyleSheet.create({
  banner: {
    height: 180,
    width: '100%',
    backgroundColor: '#52f275',
    borderRadius: 15,
    marginVertical: 15,
  },
});
export default Home;
