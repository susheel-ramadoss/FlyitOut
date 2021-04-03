import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Tab,
  Tabs,
  TabHeading,
} from 'native-base';

import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import TravellerChatTab from './../components/travellerChatTab';
import SenderChatTab from './../components/senderChatTab';
import FinderChatTab from './../components/FinderChatTab';

const ChatScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ImageBackground
        source={require('./../assets/Chatheading.png')}
        style={styles._headerBg}>
        {/* <Image source={require('./../assets/Chatheading.png')} /> */}
        <Header style={{backgroundColor: 'transparent', elevation: 0}}>
          <Left>
            <Button transparent>
              <Entypo name="menu" size={30} color="white" />
            </Button>
          </Left>
          <Body style={{flex: 1}}>
            <Title>Chats</Title>
          </Body>
          <Right>
            <Button transparent>
              <Feather name="search" size={25} color="white" />
            </Button>
          </Right>
        </Header>
      </ImageBackground>
      <Tabs
        tabContainerStyle={{
          backgroundColor: 'transparent',
          elevation: 0,
          marginTop: -50,
        }}>
        <Tab
          style={{backgroundColor: 'transparent'}}
          tabBarActiveTextColor="#8C57F0"
          tabBarUnderlineStyle={{
            height: 3,
          }}
          heading={
            <TabHeading style={{backgroundColor: 'transparent'}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Senders</Text>
              <Image
                source={require('./../assets/senderChat.png')}
                style={{height: 15, width: 15, marginLeft: 4}}
              />
            </TabHeading>
          }>
          <SenderChatTab />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: 'transparent'}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Travellers
              </Text>
              <Image
                source={require('./../assets/travellerChat.png')}
                style={{height: 15, width: 15, marginLeft: 4}}
              />
            </TabHeading>
          }>
          <TravellerChatTab />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{backgroundColor: 'transparent'}}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Finder</Text>
              <Image
                source={require('./../assets/finderChat.png')}
                style={{height: 15, width: 15, marginLeft: 4}}
              />
            </TabHeading>
          }>
          <FinderChatTab />
        </Tab>
      </Tabs>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  _headerBg: {
    height: 150,
  },
});
