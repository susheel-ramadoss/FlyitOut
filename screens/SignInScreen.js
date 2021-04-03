import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';

const SignInScreen = props => {
  const [countryCode, setCountryCode] = React.useState({});
  const [number, setNumber] = React.useState({});

  useEffect(() => {
    const unSubscribe = props.navigation.addListener('focus', async () => {
      await AsyncStorage.getItem('code').then(res => {
        if (res !== null) {
          setCountryCode(JSON.parse(res));
        } else {
          setCountryCode({
            code: '+91',
            name: 'India',
          });
        }
      });
    });
    return () => {
      unSubscribe;
    };
  }, [props]);

  const userLogin = () => {
    // <<<<<<<<<<<<<<<USER LOGIN API>>>>>>>>>>>>>
    // await axios.post("login api", {
    //     number: countryCode.code+''+number,
    //   })
    //   .then(async (response) => {
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //   console.log(error)
    //   });

    props.navigation.navigate('Verification', {
      number: { code: countryCode.code, number: number },
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Image
          source={require('./../assets/logo2.png')}
          style={{ height: 60, width: 60, marginVertical: 10, marginTop: 40 }}
        />
        <Text style={styles.text_footer}>Welcome Back!</Text>

        <Text style={{ fontWeight: 'bold', fontSize: 12, paddingVertical: 10 }}>
          Login with your registered Phone Number
        </Text>
        <View style={styles.action}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('CountryCode')}
            style={{
              borderRightWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 7,
              borderColor: '#707070',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text>{countryCode.code} </Text>
            <MaterialIcons name="keyboard-arrow-down" size={25} />
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            keyboardType="numeric"
            placeholder="Phone Number"
            onChangeText={val => setNumber(val)}
          />
        </View>

        <View
          style={styles.button}
          onPress={() => navigation.navigate('Verification')}>
          <TouchableOpacity style={styles.signIn} onPress={() => userLogin()}>
            <Text style={[styles.textSign]}>Get code</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.textPrivate} onPress={() => props.navigation.navigate("SignUpScreen")}>
            <Text style={styles.color_textPrivate}>
              Don’t have an account?{' '}
              <Text
                style={[
                  styles.color_textPrivate,
                  { color: '#8C57F0', fontWeight: 'bold' },
                ]}>
                Sign up
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground
        source={require('./../assets/hero.jpg')}
        style={styles.image}>
        <StatusBar backgroundColor="transparent" barStyle="light-content" />
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  footer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#C6CCDD',
    borderRadius: 25,
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#8C57F0',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: -100,
  },
  _alreadyText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '700',
    marginVertical: 30,
  },
});
