import InAppReview from 'react-native-in-app-review';

const InAppReviews = () => {
  InAppReview.RequestInAppReview()
    .then(hasFlowFinishedSuccessfully => {
      // when return true in android it means user finished or close review flow
      console.log('InAppReview in android', hasFlowFinishedSuccessfully);

      // when return true in ios it means review flow lanuched to user.
      // 1- you have option to do something ex: (navigate Home page) (in android).
      // 2- you have option to do something,
      // ex: (save date today to lanuch InAppReview after 15 days) (in android and ios).

      // 3- another option:
      if (hasFlowFinishedSuccessfully) {
        // do something for ios
        // do something for android
      }

      // for android:
      // The flow has finished. The API does not indicate whether the user
      // reviewed or not, or even whether the review dialog was shown. Thus, no
      // matter the result, we continue our app flow.

      // for ios
      // the flow lanuched successfully, The API does not indicate whether the user
      // reviewed or not, or he/she closed flow yet as android, Thus, no
      // matter the result, we continue our app flow.
    })
    .catch(error => {
      console.log(error);
    });
};

export default InAppReviews;
