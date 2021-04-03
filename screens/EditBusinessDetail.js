import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Header, Left, Body, Right, Button, Card, CardItem } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
const EditBusinessDetails = (props) => {
  const [countryCode, setCountryCode] = React.useState({});

  const [checked, setChecked] = React.useState(false);

  useEffect(() => {
    const unSubscribe = props.navigation.addListener('focus', async () => {
      await AsyncStorage.getItem('code').then((res) => {
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

  const userSignup = (props) => {
    props.navigation.navigate('Verification', {
      number: { code: countryCode.code, number: number, eamil, funllName },
    });
  };
  return (
    <View style={styles.container}>
      <Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
        <Left style={{ flex: 1 }}>
          <Button transparent onPress={() => props.navigation.goBack()}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </Button>
        </Left>
        <View style={styles.titleName}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            Business Detail
          </Text>
        </View>
        <Body
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        />
        <Right style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{ marginRight: 20 }}
              onPress={() => props.navigation.navigate('Add Business')}>
              <Text style={styles.getCode}>Add</Text>
            </TouchableOpacity>
          </View>
        </Right>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* detail */}
        {props.route.params.detail.map((val, i) => {
          return (
            <Card>
              <CardItem>
                <Body>
                  <View style={styles._row}>
                    <Text style={[styles._heading, { fontSize: 18 }]}>
                      {val.title}
                    </Text>

                    <Text style={styles._edit}>Edit</Text>
                  </View>
                  {/* <View style={styles._row}> */}
                  <View>
                    <Text style={styles._deailBox}>{val.subtitle}</Text>

                    <Text style={{ color: '#8C57F0' }}>
                      {val.url}
                    </Text>
                  </View>

                  <Text style={styles._deailCont}>
                    {val.desc}
                  </Text>
                </Body>
              </CardItem>
            </Card>
          )
        })}

      </ScrollView>
    </View>
  );
};

export default EditBusinessDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  titleName: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginRight: -70,
  },
  getCode: {
    color: '#8C57F0',
    fontWeight: 'bold',
    fontSize: 17,
  },

  _row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  _heading: {
    fontWeight: 'bold',
  },
  _deailBox: {
    fontWeight: 'bold',
  },
  _edit: {
    color: '#8C57F0',
    fontWeight: 'bold',
  },
  _deailCont: {
    fontWeight: 'bold',
    marginVertical: 10,
    flex:1
  },
});
