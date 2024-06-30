import {Screen} from '../../Components/Screen';
import HomeHeader from '../../Components/Screen/HomeHeader';
import {CourseSecion, LiveClass} from '../../Components/Screen';
import Banner from '../../Components/Screen/Banner';
import InAppReview from '../../Components/Screen/InAppReview';
const Home = () => {
  console.log('Home renderded');
  return (
    <Screen NoHeader style={{marginBottom: 50}}>
      <InAppReview />
      <HomeHeader />
      <Banner />
      {/* <LiveClass /> */}
      <CourseSecion name="new" />
      <CourseSecion name="popular" horizontal={false} />
    </Screen>
  );
};

export default Home;
