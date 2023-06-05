import React from 'react';
import { ActivityIndicator, View, Dimensions, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';


const {width,height} = Dimensions.get('screen');

const Payment = (props) => {

  const route = useRoute();
  const param2 = route.params.amt
  console.log(param2)



  const stateChng = (navState) => {
  //  console.log(navState);
   const { url, title } = navState ;
   if(title == "PayPal Sucess"){
      console.log("url",url);
      let spliturl = url.split('?');
      // console.log("spliturl",spliturl);
      let splitotherhalf = spliturl[1].split('&');
      console.log("splitotherhalf",splitotherhalf);
      let paymentId = splitotherhalf[0].replace("paymentId=","");
      let token = splitotherhalf[1].replace("token=","");
      let PayerID = splitotherhalf[2].replace("PayerID=","");
      props.navigation.navigate('Success',{payId:paymentId,token:token,payerId:PayerID})
       console.log("paymentId", paymentId);
       console.log("token", token);
       console.log("PayerID", PayerID);
   }
  }

  return (
     <WebView 
     
     startInLoadingState={true}
     onNavigationStateChange={stateChng}
     renderLoading={() => <Loading />}
     source={{ uri: 'https://www.sandbox.paypal.com/signin'+ param2 }} />
     
  );
 
}

const Loading = () => {
  return(
    <View style={{height:height,width:width,justifyContent:'center',alignItems:'center'}}>
        <Image 
        source={require('./components/HomeScreen/paypal.png')}
        style={{width:250,height:100,resizeMode:'contain'}}
        />
    </View>
  )
}

export default Payment;