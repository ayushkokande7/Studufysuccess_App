import RazorpayCheckout from 'react-native-razorpay';
import FlashMessage from '../Components/Screen/FlashMessage';
export default function RazorPay(amount, course_id) {
  var options = {
    name: 'studifysuccess',
    description: 'Edtech platform!',
    image: 'https://www.studifysuccess.com/images//apple-touch-icon.webp',
    currency: 'INR',
    key: 'rzp_test_lVf0GKVvcMD2ad',
    amount: amount * 100,
    // order_id: '', //Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
    // prefill: {
    //   email: 'xyz@gmail.com',
    //   contact: '9999999999',
    //   name: 'User 1',
    // },
    theme: {color: '#008b8b'},
  };

  RazorpayCheckout.open(options)
    .then(data => {
      // handle success
      console.log(`Success: ${data.razorpay_payment_id}`);
    })
    .catch(error => {
      FlashMessage({message: error.error.reason, type: 'danger'});
    });
}
