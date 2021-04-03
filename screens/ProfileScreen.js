import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Header, Left, Body, Right, Button, Card, CardItem } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RBSheet from "react-native-raw-bottom-sheet";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-crop-picker';

const ProfileScreen = (props) => {
  const { verified, setverified } = useState(true);
  const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');
  const [contact, setcontact] = useState('+91 1234567890')

  const refRBSheet = useRef();
  // <<<<<<<<<<<<<< PROFILE API>>>>>>>>>>>>>>>
  // useEffect(res => {
  //   return async dispatch => {
  //     let axiosConfig = {
  //       headers: {
  //         Authorization: `Bearer ${AUTHTOKEN}`,
  //       },
  //     };
  //     await axios
  //       .get(`profile end point url here`, axiosConfig)
  //       .then(async response => {
  //         console.log(response);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   };fg
  // });


  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }

  let reaminingActions = [
    {
      title: 'Update Profile Image',
      desc:
        'Updating profile make you more reliable and easier for others to recognise you',
    },
    {
      title: 'Verify KYC',
      desc:
        'Updating profile make you more reliable and easier for others to recognise you',
    },
    {
      title: 'Verify Email',
      desc:
        'Updating profile make you more reliable and easier for others to recognise you',
    },
  ];

  const businesDetail = [{
    title: "Travel Agent",
    subtitle: ' SRM Travels',
    url: "https://www.srstravels.com",
    desc: 'Cookie Man has a diverse range of Crispy, Soft and Chewy Cookies, Brownies, Muffins, Chocolates and specialty cookie products. These highest quality ingredients with best in industry'
  }, {
    title: "Small Business",
    subtitle: 'Cookie Man',
    url: "https://www.cookiemanindia.com",
    desc: 'Cookie Man has a diverse range of Crispy, Soft and Chewy Cookies, Brownies, Muffins, Chocolates and specialty cookie products. These highest quality ingredients with best in industry'
  }]
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Header
          style={{
            backgroundColor: 'transparent',
            elevation: 0,
            alignItems: 'center',
          }}>
          <Left style={{ flex: 1 }}>
            <Button transparent>
              <Entypo name="menu" size={30} color="black" />
            </Button>
          </Left>
          <Text style={styles._tab_heading}>Profile</Text>

          <Right style={{ flex: 1 }} />
        </Header>
        <View style={styles._header_view}>
          <TouchableOpacity
            style={styles._eidt_profile_icon}
            onPress={() => props.navigation.navigate('Basic Details')}>
            <Feather name="edit" color="#8C57F0" size={25} />
          </TouchableOpacity>
          <View style={styles._user_profile}>
            <Image
              // source={require('./../assets/homeavatar.png')}
              source={{ uri: image }}
              style={styles._avatar}
            />
            <TouchableOpacity style={styles._active} onPress={() => refRBSheet.current.open()}>
              <Feather name="camera" size={18} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={[styles._heading, { fontSize: 18, textAlign: 'center' }]}>
            Business Details
          </Text>
          <View style={styles._user_statics_detail}>
            <Text style={{ color: '#1F1B1B', fontSize: 15, marginRight: 5 }}>
              6.5
            </Text>
            <AntDesign
              name="heart"
              size={18}
              color="#ED1C24"
              style={{ marginHorizontal: 5 }}
            />
            <Text style={{ color: '#8C57F0', fontWeight: 'bold' }}>
              1K reviews
            </Text>
          </View>
          <View style={styles._profile_data_heading}>
            <Text style={styles._address}>Bangalore, India</Text>
            <Text style={styles._gender}>Male</Text>
          </View>
          <Text>
            Rodney Erickson is a content marketing professional at HubSpot, an
            inbound marketing and sales platform that helps companies attract
            visitors, convert leads, and close customers. Previously, Rodney
            worked as a marketing
          </Text>

          <Image source={require('./../assets/fbicon.png')} />
        </View>

        {/* personal Detail */}
        <Card>
          <CardItem>
            <Body>
              <View style={styles._row}>
                <Text style={[styles._heading, { fontSize: 18 }]}>
                  Profile completion
                </Text>

                <Text style={styles._edit}>33%</Text>
              </View>

              <View
                style={{
                  height: 5,
                  width: '100%',
                  backgroundColor: '#C6CCDD',
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    width: '40%',
                    backgroundColor: '#8C57F0',
                    height: 5,
                    borderRadius: 5,
                  }}></View>
              </View>

              <Text style={{ paddingVertical: 5 }}>Pending Actions</Text>
              <View style={{ flexDirection: 'row' }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}>
                  {reaminingActions.map((val, i) => {
                    return (
                      <View style={styles._detail_card}>
                        <Text style={styles._reamin_action_title}>
                          Update Profile Image
                        </Text>

                        <Text style={styles._remain_action_detail}>
                          It is a long established fact that a reader will be
                          distracted will be distracted
                        </Text>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </Body>
          </CardItem>
        </Card>

        {/* contact Detail */}
        <Card>
          <CardItem>
            <Body>
              <View style={styles._row}>
                <Text style={[styles._heading, { fontSize: 18 }]}>
                  Contact Details
                </Text>

                <Text
                  style={styles._edit}
                  onPress={() => props.navigation.navigate('Contact Details', { contact: contact })}>
                  Edit
                </Text>
              </View>
              {/* <View style={styles._row}> */}
              <View>
                <Text style={styles._deailBox}>Phone</Text>
                <Text style={{ fontWeight: 'bold', color: '#6C6C6C' }}>
                  {contact}
                </Text>
              </View>

              <Text style={styles._deailBox}>Email</Text>
              <View style={styles._row}>
                <Text style={{ fontWeight: 'bold', color: '#6C6C6C' }}>
                  {' '}
                  johny@foodmania.com
                </Text>
                {verified ? (
                  <TouchableOpacity>
                    <Text style={styles._edit}>Verifie</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate('Contact Details')
                    }>
                    <Text style={styles._edit}>Verify</Text>
                  </TouchableOpacity>
                )}
              </View>
              {/* </View> */}
            </Body>
          </CardItem>
        </Card>

        {/* business Detail */}
        <Card>
          <CardItem>
            <Body>

              <View style={styles._row}>
                <Text style={[styles._heading, { fontSize: 18 }]}>
                  Business Details
                </Text>

                <Text
                  style={styles._edit}
                  onPress={() => props.navigation.navigate('Business Detail', { detail: businesDetail })}>
                  Edit
                </Text>
              </View>
              {businesDetail.map((val, i) => {
                return (
                  <View>
                    <Text style={styles._deailBox}>{val.title}</Text>
                    <Text style={{ fontWeight: 'bold', color: '#6C6C6C' }}>
                      {val.subtitle}
                    </Text>
                  </View>
                )
              })}


              {/* </View> */}
            </Body>
          </CardItem>
        </Card>

        {/* addresses Detail */}
        <Card>
          <CardItem>
            <Body>
              <View style={styles._row}>
                <Text style={[styles._heading, { fontSize: 18 }]}>Addresses</Text>

                <Text
                  style={styles._edit}
                  onPress={() => props.navigation.navigate('Address')}>
                  {/* // onPress={() => props.navigation.navigate('Set Location')}> */}
                  Edit
                </Text>
              </View>

              <Text style={styles._deailBox}>Home</Text>
              <Text style={{ fontWeight: 'bold', color: '#6C6C6C' }}>
                #13 th street, near zolo pg, below banyan tree Bangalore,
                Karnataka
              </Text>

              <TouchableOpacity onPress={() => props.navigation.navigate("Preference")}>
                <Text style={styles._edit}>View More</Text>
              </TouchableOpacity>
            </Body>
          </CardItem>
        </Card>
      </View>
      <RBSheet
        ref={refRBSheet}
        height={130}
        openDuration={250}
        customStyles={{
          container: {
            // justifyContent: "center",
            // alignItems: "center",
            borderTopEndRadius: 20,
            borderTopLeftRadius: 20,
          },
        }}
      >
        {/* {/* bottom sheeet */}
        <View style={{ flexDirection: "row", justifyContent: "space-evenly", paddingTop: 30 }}>
          <TouchableOpacity style={styles._bottom_sheet_btn} onPress={() => choosePhotoFromLibrary()}>
            <FontAwesome name="image" size={30} />
          </TouchableOpacity>

          <TouchableOpacity style={styles._bottom_sheet_btn} onPress={() => takePhotoFromCamera()}>
            <FontAwesome name="camera" size={30} />

          </TouchableOpacity>
        </View>
      </RBSheet>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },

  _user_profile: {
    alignSelf: 'center',
    height: 120,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor:"grey"
    // overflow: "hidden"
  },
  _active: {
    height: 35,
    width: 35,
    backgroundColor: '#EAEAEA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17.5,
    marginTop: -40,
    alignSelf: 'center',
    marginRight: -100,
    elevation: 10,
  },
  _avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  _input: {
    backgroundColor: '#C6CCDD',
    borderRadius: 25,
    marginBottom: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
  _input_file: {
    backgroundColor: '#C6CCDD',
    borderRadius: 25,
    marginBottom: 10,
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  _small_btn: {
    width: 120,
    textTransform: 'capitalize',
    backgroundColor: '#8C57F0',
    borderRadius: 20,
    alignSelf: 'flex-end',
    marginTop: 40,
  },
  _btn_text: {
    color: 'white',
    padding: 10,
    textAlign: 'center',
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
    // fontWeight: 'bold',
  },
  _link: {
    color: 'blue',
  },
  _edit: {
    color: '#8C57F0',
    fontWeight: 'bold',
  },
  _roundBtn: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    borderColor: 'blue',
    marginLeft: 5,
  },
  _tab_heading: {
    fontSize: 20,
  },
  _header_view: {
    elevation: 2,
    paddingVertical: 20,
    // borderRadius:1
    // borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
  },
  _eidt_profile_icon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  _user_statics_detail: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  _profile_data_heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  _gender: {
    fontWeight: 'bold',
  },
  _detail_card: {
    backgroundColor: '#8C57F0',
    padding: 10,
    borderRadius: 10,
    width: 210,
    paddingRight: 40,
    marginRight: 15,
  },
  _reamin_action_title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 12,
  },
  _remain_action_detail: {
    color: 'white',
    fontSize: 12,
  },
  _bottom_sheet_btn: {
    height: 70,
    width: 70,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  }
});
