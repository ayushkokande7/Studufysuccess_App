import RazorpayCheckout from 'react-native-razorpay';
import FlashMessage from '../Components/Screen/FlashMessage';
import useApi from '../Components/Api/Api';
export default function RazorPay(amount, course_id) {
  var options = {
    name: 'studifysuccess',
    description: 'Edtech platform!',
    image: 'https://www.studifysuccess.com/images//apple-touch-icon.webp',
    currency: 'INR',
    key: 'rzp_test_lVf0GKVvcMD2ad',
    amount: amount * 100,
    prefill: {
      email: '',
      contact: '',
    },
    theme: {color: '#008b8b'},
  };
  RazorpayCheckout.open(options)
    .then(e => {
      useApi().post(
        '/payment',
        (data = {
          course_id,
          amount,
          payment_id: e.razorpay_payment_id,
        }),
      );
    })
    .catch(error => {
      FlashMessage({
        message: error?.error?.reason || 'Something went wrong',
        type: 'danger',
      });
    });
}
