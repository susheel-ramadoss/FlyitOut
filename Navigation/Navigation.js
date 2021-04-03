import React from 'react';
// <<<<<<<<<<<<<<<<<<<<< NAVIGATION OF THE COMPLETE APP >>>>>>>>>>>>>>>>>>>>>>
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './../screens/DrawerContent';
import {Image, TouchableOpacity} from 'react-native';
import HomeScreen from './../screens/HomeScreen';
import ProfileScreen from './../screens/ProfileScreen';
import ChatScreen from './../screens/ChatScreen';
import Add from './../screens/Add';
import MyEntryScreen from './../screens/MyEntryScreen';
import MyReceiverScreen from './../screens/MyReceiverScreen';
import SignInScreen from './../screens/SignInScreen';
import SignUpScreen from './../screens/SignUpScreen';
import Splash from './../screens/Splash';
import OtpScreen from './../screens/otpScreen';
import AddEntryScreen from './../screens/AddEntry';
import TravellMode from './../screens/TravellMode';
import AddFlightDetail from './../screens/AddFlightDetail';
import AddCarDetail from './../screens/AddCarDetails';
import AddBusDetail from './../screens/AddBusDetail';
import AddTrainDetail from './../screens/AddTrainDetail';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CountryCode from './../screens/CountryCode';
import {Thumbnail} from 'native-base';
import EditBasicDetail from '../screens/EditBasicDetail';
import EditContactDetail from '../screens/EditContactDetail';
import EditPhoneNumber from '../screens/EditPhoneNumber';
import EditEmailDetails from '../screens/EditEmailDetail';
import EditBusinessDetails from '../screens/EditBusinessDetail';
import AddBusiness from '../screens/AddBusiness';
import AdressDetail from '../screens/AdressDetail';
import Preference from '../screens/Preferences';
import Address from '../screens/Address';
import SetLocation from '../screens/SetLocation';
import Invite from './../screens/Invite';
import AddTravel from './../screens/AddTravel';
import SenderAddEntry from './../screens/Senderaddentry';
import senderEntryBid from '../screens/senderEntryBid';
import UsersProfile from './../screens/UsersProfile'; //
import Review from './../screens/Review';
import MyReviews from './../screens/MyReviews';
import PreviewScreen from '../screens/EntryDetails';
import PublishEntry from '../screens/PublishEntry';
import Confirmbid from '../screens/ConfirmBid';
import AddItem from './../screens/AddItem';
import SelectAddress from './../screens/SelectAddress';
import SelectReciver from './../screens/SelectReceiver';
import TravelPreference from './../screens/TravelPreference';
import FlightTravel from './../screens/FlightTravel';
import TravelPreview from './../screens/TravelPreview';
import ChooseAddressList from './../screens/ChooseAddressList';
import ItemType from './../screens/ItemType';
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// <<<<<<<<<<<<<<<< MAIN STACK NAVIGATOR>>>>>>>>>>>>>>>>>
function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeDrawer"
          component={HomeDrawer}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ItemType"
          component={ItemType}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Add Item"
          component={AddItem}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ChooseAddressList"
          component={ChooseAddressList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyReceiverScreen"
          component={MyReceiverScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UsersProfile"
          component={UsersProfile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Review"
          component={Review}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyReviews"
          component={MyReviews}
          options={{headerShown: false}}
        />

        <Stack.Screen name="Confirm Bid" component={Confirmbid} />
        <Stack.Screen
          name="Publish Entry"
          component={PublishEntry}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Entry Details"
          component={PreviewScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TravelPreview"
          component={TravelPreview}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FlightTravel"
          component={FlightTravel}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TravelPreference"
          component={TravelPreference}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AddTravel"
          component={AddTravel}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Invite"
          component={Invite}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Select Receiver"
          component={SelectReciver}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Select Address"
          component={SelectAddress}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="senderEntryBid"
          component={senderEntryBid}
          options={{title: 'Entry Details'}}
        />

        <Stack.Screen
          name="SenderAddEntry"
          component={SenderAddEntry}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Set Location"
          component={SetLocation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Preference" component={Preference} />
        <Stack.Screen
          name="Adress Detail"
          component={AdressDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Add Business"
          component={AddBusiness}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Business Detail"
          component={EditBusinessDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Phone Number"
          component={EditPhoneNumber}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Email Detail" component={EditEmailDetails} />
        <Stack.Screen name="Contact Details" component={EditContactDetail} />
        <Stack.Screen name="Basic Details" component={EditBasicDetail} />

        <Stack.Screen
          name="CountryCode"
          component={CountryCode}
          options={{headerShown: false}}
        />

        <Stack.Screen name="Verification" component={OtpScreen} />

        <Stack.Screen
          name="AddEntryScreen"
          component={AddEntryScreen}
          options={{headerTitle: 'Add Entry'}}
        />
        <Stack.Screen
          name="TravellMode"
          component={TravellMode}
          options={{headerTitle: 'Travel Mode'}}
        />
        <Stack.Screen
          name="AddFlightDetail"
          component={AddFlightDetail}
          options={{headerTitle: 'Add Flight Detail'}}
        />
        <Stack.Screen
          name="AddCarDetail"
          component={AddCarDetail}
          options={{headerTitle: 'Add Car Detail'}}
        />
        <Stack.Screen
          name="AddBusDetail"
          component={AddBusDetail}
          options={{headerTitle: 'Add Bus Detail'}}
        />
        <Stack.Screen
          name="AddTrainDetail"
          component={AddTrainDetail}
          options={{headerTitle: 'Add Train Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// <<<<<<<<<<<<<<<<MY TABS>>>>>>>>>>>>>>>>>
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#8C57F0"
      inactiveColor="black">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: null,
          tabBarColor: 'transparent',
          tabBarIcon: ({color}) =>
            color === 'black' ? (
              <Image
                source={require('../assets/homeunselected.png')}
                style={{height: 24, width: 24}}
              />
            ) : (
              <Image
                source={require('../assets/icnhome.png')}
                style={{height: 24, width: 24}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          tabBarLabel: null,
          tabBarColor: 'transparent',
          tabBarIcon: ({color}) =>
            color === 'black' ? (
              <Image
                source={require('../assets/Iconunselected.png')}
                style={{height: 24, width: 24}}
              />
            ) : (
              <Image
                source={require('../assets/messageselected.png')}
                style={{height: 24, width: 24}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarLabel: null,
          tabBarColor: 'transparent',
          tabBarIcon: ({color}) => (
            <TouchableOpacity
              style={{
                flex: 1,
                width: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
                marginTop: -10,
              }}>
              <MaterialIcons name="add-circle" color="#8C57F0" size={35} />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="MyEntryScreen"
        component={MyEntryScreen}
        options={{
          tabBarLabel: null,
          tabBarColor: 'transparent',
          tabBarIcon: ({color}) =>
            color === 'black' ? (
              <Image
                source={require('../assets/entriesunselected.png')}
                style={{height: 24, width: 24}}
              />
            ) : (
              <Image
                source={require('../assets/Myentriesselected.png')}
                style={{height: 24, width: 24}}
              />
            ),
        }}
      />

      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: null,
          tabBarColor: 'transparent',
          tabBarIcon: ({color}) => (
            <Thumbnail
              source={require('../assets/Ellipse.png')}
              style={{width: 30, height: 30}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// <<<<<<<<<<<<<<<<DRAWER NAVIGATOR>>>>>>>>>>>>>>>>>
const HomeDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="MyTabs" component={MyTabs} />
    </Drawer.Navigator>
  );
};

export default MyStack;
