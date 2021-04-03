import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const OtpScreen = props => {
  const {colors} = useTheme();
  let data = props.route.params.number;
      
  const Resend =()=>{
        //<<<<<<<<<<<<<<<<<<RESEND API>>>>>>>>>>>>> 
        //  await axios.post("resend api", {
        //   number: data.code+''+data.number,
        // })
        // .then(async (response) => {
        //   console.log(response)
        // })
        // .catch((error) => {
        // console.log(error)
        // });
      }

      const Verify =()=>{
            // <<<<<<<<<<<<<<<<<<VERIFY API>>>>>>>>>>>>>>>>>>>
            //  await axios.post("verify api here", {
            //   number: data.code+''+data.number,
            // })
            // .then(async (response) => {
            //   console.log(response)
            // })
            // .catch((error) => {
            // console.log(error)
            // });
            props.navigation.navigate("HomeDrawer")
          }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
      <View style={styles.header}>
        <Image
          duraton="1500"
          source={require('../assets/Verification.jpg')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
        <View style={styles.footer}>
          <Text
            style={{
              width: '80%',
              alignSelf: 'center',
              fontSize: 14,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            We just send a verification code your phone.{' '}
          </Text>
          <Text
            style={{color: '#8C57F0', fontWeight: 'bold', paddingVertical: 5}}>
            {data.code} {data.number}
          </Text>
          <OTPInputView
            style={{width: '80%', alignSelf: 'center', height: 200}}
            pinCount={4}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <TouchableOpacity onPress={()=>Resend()}>
            <Text style={{fontSize: 14}}> <Text style={{fontWeight:"bold",color:"#8C57F0"}}>Resend code </Text> in 1 min 30 sec</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signIn} onPress={() => Verify() }>
            <Text style={[styles.textSign]}>Verify code</Text>
          </TouchableOpacity>

          
        </View>
      </ScrollView>
    </View>
  );
};

export default OtpScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 4,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: '#fff',
    // paddingVertical: 50,
    paddingHorizontal: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: height_logo,
    height: height_logo,
    marginVertical:30
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },

  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#8C57F0',
    marginVertical: 30,
    // marginTop: 30,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  _alreadyText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '700',
  },
  _newRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  borderStyleBase: {
    width: 40,
    height: 54,
  },

  borderStyleHighLighted: {
    width: 40,
    height: 54,
    borderWidth: 0,
    backgroundColor: '#C6CCDD',
  },

  underlineStyleBase: {
    width: 40,
    height: 54,
    borderWidth: 0,
    backgroundColor: '#C6CCDD',
  },

  underlineStyleHighLighted: {
    backgroundColor: '#C6CCDD',
  },
});
