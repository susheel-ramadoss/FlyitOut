import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Container, TabHeading } from 'native-base';
import TravellerTab from './../components/travellerTab';
import SenderTab from './../components/senderTab';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { Header, Left, Body, Right, Tab, Tabs, Button } from 'native-base';
const HomeScreen = ({ navigation }) => {
  // <<<<<<<<<<<<<< FOR GETTING HOME DATA API>>>>>>>>>>>>>>>
  // useEffect(res => {
  //   return async dispatch => {
  //     let axiosConfig = {
  //       headers: {
  //         Authorization: `Bearer ${AUTHTOKEN}`,
  //       },
  //     };
  //     await axios
  //       .get(`get data api`, axiosConfig)
  //       .then(async response => {
  //         console.log(response);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };
  // });

  return (
    <View style={styles.container}>
      <StatusBar />
      <Container>
        <Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Entypo name="menu" size={30} color="black" />
            </Button>
          </Left>
          <Body
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          />
          <Right style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <Octicons
                name="search"
                size={26}
                style={{ marginHorizontal: 10 }}
              />
              <TouchableOpacity style={{ marginRight: 20 }}>
                <MaterialIcons
                  name="notifications-none"
                  size={26}
                  style={{ marginHorizontal: 10 }}
                />
                <View
                  style={{
                    height: 18,
                    width: 18,
                    borderRadius: 10,
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    right: 4,
                  }}>
                  <Text style={{ color: 'white' }}>1</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Right>
        </Header>
        <Tabs
          tabContainerStyle={{ marginHorizontal: 15, elevation: 0 }}
          tabBarActiveTextColor="red"
          tabBarUnderlineStyle={{
            backgroundColor: '#8C57F0',
            height: 3,
          }}>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: 'white' }}>
                <Text
                  style={{ fontSize: 16, paddingRight: 5 }}>
                  Senders
                </Text>
                <Image
                  source={require('./../assets/mini.png')}
                  style={{ height: 22, width: 22 }}
                />
              </TabHeading>
            }>
            <SenderTab props={navigation} />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: 'white' }}>
                <Text
                  style={{ fontSize: 16, paddingRight: 5 }}>
                  Travellers
                </Text>
                <Image
                  source={require('./../assets/travelermin.png')}

                  style={{ height: 23, width: 23 }}
                />
              </TabHeading>
            }
            activeTabStyle={{
              backgroundColor: 'white',
            }}
            activeTextStyle={{
              color: '#8C57F0',
              fontWeight: 'bold',
            }}
            textStyle={{
              color: '#8C57F0',
              fontWeight: 'bold',
            }}>
            <TravellerTab props={navigation} />
          </Tab>
        </Tabs>
      </Container>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
