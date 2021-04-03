import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Card, CardItem, Body } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from '../components/BannerSlider';
import RBSheet from "react-native-raw-bottom-sheet";
import AntDesign from 'react-native-vector-icons/AntDesign'
const AddressList = (props) => {
  const refRBSheet = useRef();
  const [checked, setChecked] = React.useState(false);
  const [traveller, settraveller] = React.useState(false);
  const [deliver, setdeliver] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false)




  let arr = [
    {
      img: require('./../assets/tibs.png'),
      title: '',
      review: [],
      finder: require('./../assets/finder.png'),
      location: (
        <MaterialIcons name="my-location" size={15} style={{ margin: 3 }} />
      ),
      verified: (
        <Text
          style={{
            fontSize: 13,
            color: '#8C57F0',
            fontWeight: 'bold',
            marginHorizontal: 17,
            borderWidth: 1,
            padding: 2,
            borderRadius: 10,
            borderColor: '#8C57F0',
          }}>
          {' '}
          Pharmaceutical
        </Text>
      ),
      Address: ' KraoLandia, Brazil',
    },
    {
      img: require('./../assets/tibs.png'),
      title: '',
      review: [],
      finder: require('./../assets/finder.png'),
      location: (
        <MaterialIcons name="my-location" size={15} style={{ margin: 3 }} />
      ),
      verified: (
        <Text
          style={{
            fontSize: 13,
            color: '#8C57F0',
            fontWeight: 'bold',
            marginHorizontal: 17,
            borderWidth: 1,
            padding: 2,
            borderRadius: 10,
            borderColor: '#8C57F0',
          }}>
          {' '}
          Pharmaceutical
        </Text>
      ),
      Address: ' KraoLandia, Brazil',
    },
  ];
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={require('./../assets/checked.png')}
              style={{ height: 50, width: 50, borderRadius: 5, alignSelf: 'center', marginHorizontal: 4 }}
            />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Your request is sent</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: 'white' }}>
        {/* ======= Main View ====== */}
        <View>
          <View>
            <Text style={styles.title}>Medicine for my mom</Text>
            <Text style={styles.DetailText}>
              {' '}
              It would be better if you pick the package as soon as possible
            </Text>
            <Text style={styles.Restaurant}>Restaurant </Text>
            <Text style={styles.Address}>
              {' '}
              #13 th street, near zolo pg, below banyan tree Bangalore,
              Karnataka
            </Text>
          </View>

          <View style={styles.profileView}>
            <View style={styles.profileImage}>
              <Image
                source={require('./../assets/profile2.png')}
                style={{
                  height: 80,
                  width: 80,
                  borderRadius: 5,
                  alignSelf: 'center',
                  marginHorizontal: 4,
                }}
              />
            </View>
            <View style={styles.profileData}>
              <Text style={styles.userName}>Janet Ramirez</Text>
              <Text style={styles.mobNumber}>+91 1234568902</Text>

              <Text style={styles.userAddress}>
                Port Angeles, WA, United State of asdasada America{' '}
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.dueDate}>Delivery due date:</Text>
            <Text style={styles.Date}>10/12/2021</Text>
            <Text style={styles.ist}>(IST)</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.dueDate}>Requested:</Text>
            <Text style={styles.finder}>Finder</Text>
            <Image
              source={require('./../assets/finder.png')}
              style={{
                height: 15,
                width: 15,
                borderRadius: 5,
                alignSelf: 'center',
                marginHorizontal: 4,
              }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.dueDate}>Split and pick items:</Text>
            <Text style={styles.Date}>No</Text>
          </View>
        </View>
        <View>
          <Text style={{ marginVertical: 15, fontWeight: 'bold', fontSize: 18 }}>
            Linked items
          </Text>
        </View>
        {/* ====== cards ===== */}
        {arr.map((val, i) => {
          return (
            <Card
              key={i}
              style={{
                elevation: 5,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRightWidth: 0,
                borderLeftWidth: 0,
                backgroundColor: 'white',
                borderRadius: 5,
              }}>
              <CardItem>
                <Body>
                  <Slider />

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        flex: 1,
                        paddingHorizontal: 5,
                        flexDirection: 'column',
                        marginVertical: 10,
                      }}>
                      <Text
                        style={{
                          paddingVertical: 5,
                          color: '#000',
                          fontWeight: 'bold',
                          fontSize: 17,
                        }}>
                        Ibuprofen
                      </Text>

                      <View style={{}}>
                        <Text
                          style={{ fontSize: 12, color: '#707070', width: 310 }}>
                          Ibuprofen is used to reduce fever and treat pain or
                          inflammation caused by many conditions such as
                          headache, toothache, back pain, arthritis,
                          menstrualcramps, or minor injury.
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          marginVertical: 10,
                        }}>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={{ fontWeight: 'bold' }}>Weight:</Text>

                          <Text
                            style={{
                              fontSize: 15,
                              color: '#8C57F0',
                              fontWeight: 'bold',
                              marginHorizontal: 10,
                            }}>
                            5 Kg
                          </Text>
                        </View>
                        <View>
                          <View>{val.verified}</View>
                        </View>
                      </View>
                    </View>
                  </View>
                </Body>
              </CardItem>
              <CardItem></CardItem>
            </Card>
          );
        })}
        <View style={styles.btnGroup}>
          <TouchableOpacity style={styles.btn1} onPress={() => refRBSheet.current.open()}>
            <Text style={styles.btnText1}>Request as Finder</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={() => props.navigation.navigate("Confirm Bid")}>
            <Text style={styles.btnText2}>Bid</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={{ fontWeight: 'bold', color: 'gray' }}>
            You will get paid after receiver collects the package as per{' '}
            <Text style={{ color: '#8C57F0' }}>Terms and conditions.</Text>
          </Text>
        </View>
      </ScrollView>
      <View style={styles.chatBtn}>
        <Image
          source={require('./../assets/chaticon.png')}
          style={{ height: 20, width: 23, borderWidth: 2, zIndex: -3 }}
        />
      </View>
      <RBSheet
        ref={refRBSheet}

        height={340}
        openDuration={250}
        closeOnDragDown={true}
        customStyles={{
          container: {
            padding: 10
          }
        }}
      >
        <Text style={styles._bottom_heading}>
          Request as a finder
        </Text>
        <Text style={styles._sub_heading}>
          Choose the services you would like to offer for the sender
        </Text>
        <View style={styles._checkbox_row}>

          <TouchableOpacity style={[styles._checkbox, traveller && { backgroundColor: "#8C57F0", borderColor: '#8C57F0' }]} onPress={() => settraveller(!traveller)}>
            {traveller ? <AntDesign name="check" size={12} color="white" /> : null}
          </TouchableOpacity>
          <Text style={styles._checkbox_desc}>Find a traveler for sender and guarantee that
the traveler delivers the items to the receiver.</Text>
          <AntDesign name="exclamationcircle" color="#8C57F0" style={{ paddingLeft: 30 }} size={16} />
        </View>
        <View style={styles._checkbox_row}>

          <TouchableOpacity style={[styles._checkbox, deliver && { backgroundColor: "#8C57F0", borderColor: '#8C57F0' }]} onPress={() => setdeliver(!deliver)}>
            {deliver ? <AntDesign name="check" size={12} color="white" /> : null}
          </TouchableOpacity>
          <Text style={styles._checkbox_desc}>Check and deliver the items from the
sender to the traveler</Text>
          <AntDesign name="exclamationcircle" color="#8C57F0" style={{ paddingLeft: 30 }} size={16} />
        </View>
        <View style={styles.price_row}>
          <Text style={styles._price_label}>You will earn</Text>
          <Text style={styles._price}>$ 0</Text>

        </View>

        <TouchableOpacity style={styles._small_btn} onPress={() => setModalVisible(true)}>
          <Text style={styles._btn_text}>Confirm Request</Text>
        </TouchableOpacity>



      </RBSheet>
    </View>
  );
};

export default AddressList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
  },
  kgdata: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  DetailText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'gray',
  },
  Restaurant: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  Address: {
    width: 300,
    fontSize: 13,
    marginVertical: -4,
  },
  profileView: {
    flexDirection: 'row',
    marginVertical: 15,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  mobNumber: {
    fontWeight: 'bold',
    marginVertical: 7,
  },
  userAddress: {
    width: 210,
  },
  dueDate: {
    fontWeight: 'bold',
    marginRight: 15,
  },
  Date: {
    color: '#8C57F0',
    fontWeight: 'bold',
  },
  ist: {
    fontWeight: 'bold',
    color: 'gray',
  },
  finder: {
    color: '#8C57F0',
    fontWeight: 'bold',
    marginHorizontal: 11,
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  btn1: {
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 100,
    elevation: 6,
    // padding: 13,
    // marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 26,
    // paddingHorizontal: 30,
    padding: 13,
    flex: 1,
    margin: 10
  },
  btn2: {
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 12.35,
    elevation: 6,
    // padding: 13,
    // marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 26,
    // paddingHorizontal: 70,
    backgroundColor: '#8C57F0',
    padding: 13,
    flex: 1,
    margin: 10
  },
  btnText1: {
    color: '#8C57F0',
    textAlign: "center"
  },
  btnText2: {
    color: 'white',
    textAlign: "center"

  },
  chatBtn: {
    borderRadius: 40,
    backgroundColor: '#8C57F0',
    bottom: 70,
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 12,
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10

  },
  _row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5

  }
  ,
  _bottom_sheet_title: {
    color: '#1F1B1B',
    fontWeight: "bold",
    fontSize: 16
  },
  _checkbox: {
    borderRadius: 3,
    height: 18,
    width: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "grey",
    marginRight: 10
  },
  _checkbox_row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10

  },
  _checkbox_desc: {
    color: "#6C6C6C",
    fontWeight: "bold",
    fontSize: 14,
  },
  _bottom_heading: {
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 10,
    color: "#1F1B1B",

  },
  _sub_heading: {
    fontSize: 12,
    color: "#6C6C6C",
    fontWeight: "bold",

  },
  _price_label: {
    fontWeight: "bold",
    fontSize: 18,
  },
  _price: {
    color: "#8C57F0",
    fontWeight: "bold",
    fontSize: 18
  },
  price_row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  _small_btn: {
    textTransform: 'capitalize',
    backgroundColor: '#8C57F0',
    borderRadius: 30,
    marginTop: 40,
    padding: 8,
    marginBottom: 10
  },
  _btn_text: {
    color: 'white',
    padding: 8,
    textAlign: 'center',
    fontWeight: "bold"
  },
  modalView: {
    margin: 20,
    backgroundColor: "#CEBAFA",
    borderRadius: 20,

    alignItems: "center",
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: 300,
    justifyContent: 'center',
    marginVertical: 200
  },
  textStyle: {

    color: '#fff',
    fontSize: 18,
    paddingTop: 10
    // fontWeight: 'bold'
  }

});
