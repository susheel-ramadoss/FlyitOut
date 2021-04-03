import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FinderActiveEtnry from './../components/MyEntryTabs/Active/FinderActiveEtntry';
import SenderActiveEntry from './../components/MyEntryTabs/Active/SenderActiveEntry';
import TravellerActiveEntry from './../components/MyEntryTabs/Active/TravellerActiveEntry';
import FinderHistoryEtnry from './../components/MyEntryTabs/History/FinderHistoryEtntry';
import SenderHistoryEntry from './../components/MyEntryTabs/History/SenderHistoryEntry';
import TravellerHistoryEntry from './../components/MyEntryTabs/History/TravellerHistoryEntry';

const ChatScreen = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('active');
  return (
    <View style={styles.container}>
      <Header style={{backgroundColor: 'transparent', elevation: 0}}>
        <Left style={{flex: 1}}>
          <Button transparent>
            <Entypo name="menu" size={30} color="black" />
          </Button>
        </Left>
        <Body style={{flex: 1, alignItems: 'center'}}>
          <Title style={{color: 'black'}}>My Entries</Title>
        </Body>
        <Right style={{flex: 1}}>
          <TouchableOpacity style={{marginRight: 20}}>
            <MaterialIcons
              name="notifications-none"
              size={26}
              style={{marginHorizontal: 10}}
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
              <Text style={{color: 'white'}}>1</Text>
            </View>
          </TouchableOpacity>
        </Right>
      </Header>
      <View style={styles._mainTab}>
        <TouchableOpacity
          style={[
            styles._activeTab,
            activeTab === 'active' && {
              borderBottomWidth: 4,
              borderBottomColor: '#8C57F0',
            },
          ]}
          onPress={() => setActiveTab('active')}>
          <Text style={styles._mainTabTitle}>Active</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles._historyTab,
            activeTab === 'history' && {
              borderBottomWidth: 4,
              borderBottomColor: '#8C57F0',
            },
          ]}
          onPress={() => setActiveTab('history')}>
          <Text style={styles._mainTabTitle}>History</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'active' ? (
        <Tabs
        tabContainerStyle={{backgroundColor:"transparent",elevation:0}}
          tabBarUnderlineStyle={{
            backgroundColor: '#8C57F0',
            height: 3,
          }}>
          <Tab
            tabBarActiveTextColor="#8C57F0"
            heading={
              <TabHeading style={{backgroundColor: 'white'}}>
                <Text style={styles._heading}>Senders</Text>
                <Image
                  source={require('./../assets/travellericon.png')}
                  style={{height: 15, width: 19, marginLeft: 4}}
                />
              </TabHeading>
            }>
            <SenderActiveEntry />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: 'white'}}>
                <Text style={styles._heading}>Travellers</Text>

                <Image
                  source={require('./../assets/travelermin.png')}
                  style={{height: 15, width: 15, marginLeft: 4}}
                />
              </TabHeading>
            }>
            <TravellerActiveEntry />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{backgroundColor: 'white'}}>
                <Text style={styles._heading}>Finder</Text>

                <Image
                  source={require('./../assets/Group9970.png')}
                  style={{height: 14, width: 14}}
                />
              </TabHeading>
            }>
            <FinderActiveEtnry />
          </Tab>
        </Tabs>
      ) : (
        <>
          {/* history tab */}
          <Tabs
        tabContainerStyle={{backgroundColor:"transparent",elevation:0}}
          tabBarUnderlineStyle={{
            backgroundColor: '#8C57F0',
            height: 3,
          }}>
            <Tab
              tabBarActiveTextColor="#8C57F0"
              heading={
                <TabHeading style={{backgroundColor: 'white'}}>
                  <Text style={styles._heading}>Senders</Text>
                  <Image
                    source={require('./../assets/travellericon.png')}
                    style={{height: 15, width: 19, marginLeft: 4}}
                  />
                </TabHeading>
              }>
              <SenderHistoryEntry />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{backgroundColor: 'white'}}>
                  <Text style={styles._heading}>Travellers</Text>

                  <Image
                    source={require('./../assets/travelermin.png')}
                    style={{height: 15, width: 15, marginLeft: 4}}
                  />
                </TabHeading>
              }>
              <TravellerHistoryEntry />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{backgroundColor: 'white'}}>
                  <Text style={styles._heading}>Finder</Text>

                  <Image
                    source={require('./../assets/Group9970.png')}
                    style={{height: 14, width: 14}}
                  />
                </TabHeading>
              }>
              <FinderHistoryEtnry />
            </Tab>
          </Tabs>
        </>
      )}
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:15
  },
  _mainTab: {
    flexDirection: 'row',
  },
  _activeTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  _historyTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  _mainTabTitle: {
    fontWeight: 'bold',
    color: 'grey',
  },
  _heading: {
    paddingRight: 4,
  },
});
