import InAppReview from 'react-native-in-app-review';

const InAppReviews = () => {
  InAppReview.RequestInAppReview()
    .then(hasFlowFinishedSuccessfully => {
      console.log('InAppReview in android', hasFlowFinishedSuccessfully);

      if (hasFlowFinishedSuccessfully) {
        //in react native 0.62.2
        InAppReview.open();

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
