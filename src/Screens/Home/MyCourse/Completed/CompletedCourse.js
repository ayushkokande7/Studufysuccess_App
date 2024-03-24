import {TopNavigation} from '../../../../Navigation';
import Certificate from './Certificate';
import {Lessons} from '../../CourseDetails';
const CompletedCourse = ({route}) => {
  const {data} = route.params;
  const tabs = [
    {name: 'Lessons', component: Lessons, data: {data: data}},
    {name: 'Certificate', component: Certificate},
  ];

  return <TopNavigation tabs={tabs} />;
};

export default CompletedCourse;
