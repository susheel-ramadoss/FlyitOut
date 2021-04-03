import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';
import { Header, Left, Body, Right, Button, Card, CardItem } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { List } from 'react-native-paper';
import Drowpdown from './../components/Drowpdown'
import RBSheet from "react-native-raw-bottom-sheet";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import ImagePicker from 'react-native-image-crop-picker';

export default class AddItem extends React.Component {
  constructor(props) {
    super()
    this.state = {
      checked: false,
      images: []
    }
  }
  takePhotoFromCamera = () => {
    var arr = this.state.images
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(v => {
      if (v.path !== undefined || v.path !== null) {
        arr.push(v.path)
        this.setState({ images: arr })
      }
    });
  }
  choosePhotoFromLibrary = () => {
    var arr = this.state.images
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      arr.push(image.path)
      this.setState({ images: arr })
    });
  }
  removeImg = (index) => {
    var arr = this.state.images
    arr.splice(index, 1)
    this.setState({ images: arr })
  }
  render() {
    let { images } = this.state
    return (
      <View style={styles.container} >
        <Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.getCode}>Cancel</Text>
            </Button>
          </Left>
          <View style={styles.titleName}>
            <Text style={{ fontSize: 18 }}>Add Item</Text>
          </View>
          <Body
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          />
          <Right style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={{ marginRight: 20 }} onPress={() => this.props.navigation.navigate("Entry Details")}>
                <Text style={styles.getCode}>Save</Text>
              </TouchableOpacity>
            </View>
          </Right>
        </Header>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.headText}>
              Add the details of your item to link with
              the entry.
          </Text>

            <Text style={styles._heading}>
              Add Image {'    '}
              <AntDesign
                name="exclamationcircle"
                color="#8C57F0"
                style={{ paddingLeft: 30 }}
                size={16}
              />
            </Text>
          </View>

          {/* pic images view */}
          <View style={styles._gallery_row}>
            <ScrollView horizontal={true}>

              <TouchableOpacity style={styles._addImage} onPress={() => this.RBSheet.open()}>
                <AntDesign
                  name="plus"
                  color="#8C57F0"
                  size={20}
                />
              </TouchableOpacity>

              {
                images.length !== 0 ? images.map((val, i) => {
                  return (
                    <View style={styles._addImage} key={i} >
                      <Image source={{ uri: val }} style={{ height: 106, width: 106 }} />
                      <TouchableOpacity style={{ position: "absolute", right: -12, top: -12, backgroundColor: "white", borderRadius: 50, elevation: 10 }} onPress={() => this.removeImg(i)}>
                        <Entypo
                          name="cross"
                          color="red"
                          size={26}
                        />
                      </TouchableOpacity>
                      <View style={styles._progress_bar}>
                        <View style={styles._filled}></View>
                      </View>
                    </View>
                  )
                }) : null
              }

            </ScrollView>
          </View>
          <Text style={styles._gallery_desc}>Capture clear image to perceive item’s weight and description
easily</Text>
          {/* end */}

          <TextInput style={styles._input} placeholder="Item title" />
          <TextInput
            style={[styles._input, { borderRadius: 10 }]}
            multiline
            numberOfLines={4}
            placeholder="Description"
          />


          <TouchableOpacity id="1" style={styles._input_file} onPress={() => this.props.navigation.navigate('ItemType')}>
            <Text style={{ color: "grey" }}>Item type.</Text>
            <MaterialIcons name="keyboard-arrow-down" size={25} />
          </TouchableOpacity>



          {/* <TouchableOpacity id="1" style={styles._input_file} onPress={() => props.navigation.navigate('Select Receiver')}>
            <Text>Small Business.</Text>
            <MaterialIcons name="keyboard-arrow-down" size={25} />
          </TouchableOpacity> */}

          <View style={{ flexDirection: "row", flexWrap: "nowrap" }}>
            <TextInput style={[styles._input, { flex: 1, height: 50 }]} placeholder="Weight" />
            {/* <Drowpdown /> */}
            <TouchableOpacity id="1" style={[styles._input_file, { marginLeft: 10 }]} onPress={() => this.RBSheet.open()}>
              <Text>Kg</Text>
              <MaterialIcons name="keyboard-arrow-down" size={25} />
            </TouchableOpacity>

          </View>



          <View style={styles.deletePhone}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={styles.text1}>Delete Phone</Text>
            </TouchableOpacity>
          </View>
          {/* <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={150}
            openDuration={250}
            closeOnDragDown={true}
            customStyles={{
              container: {
                padding: 10
              }
            }}
          >
            <View style={styles._row}>
              <Text style={[styles._bottom_sheet_title, { color: "#8C57F0" }]}>Kilogram(Kg)</Text>
              <AntDesign name="checkcircle" color="#8C57F0" size={20} />
            </View>

            <View style={styles._row}>
              <Text style={styles._bottom_sheet_title}>Kilogram(Kg)</Text>
            </View>



          </RBSheet> */}

          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
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
              <TouchableOpacity style={styles._bottom_sheet_btn} onPress={() => this.choosePhotoFromLibrary()}>
                <FontAwesome name="image" size={30} />
              </TouchableOpacity>

              <TouchableOpacity style={styles._bottom_sheet_btn} onPress={() => this.takePhotoFromCamera()}>
                <FontAwesome name="camera" size={30} />

              </TouchableOpacity>
            </View>
          </RBSheet>
        </ScrollView>
      </View>
    );
  }
}


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

  headText: {
    fontWeight: 'bold',
    fontSize: 15,
    width: 380,
    marginVertical: 20,
    color: '#6C6C6C',
  },
  deletePhone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'red',
    marginVertical: 10,
  },
  text2: {
    marginHorizontal: 2,
    fontWeight: 'bold',
    fontSize: 13,
    color: 'gray',
  },
  _checkbox: {
    borderRadius: 3,
    height: 16,
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'grey',
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
    color: 'grey',
  },
  _heading: {
    fontWeight: "bold",
    paddingVertical: 20
  },
  _addImage: {
    height: 106,
    width: 106,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderColor: "#B1B1B1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
  _gallery_row: {
    paddingBottom: 20,
    flexDirection: "row"
  },
  _gallery_desc: {
    fontWeight: "bold",
    fontSize: 12,
    paddingBottom: 25
  },
  _progress_bar: {
    height: 5,
    backgroundColor: "red",
    width: 106,
    borderRadius: 5,
    backgroundColor: "#C6CCDD",
    marginTop: 10
  },
  _filled: {
    width: "50%",

    backgroundColor: "#8C57F0",
    height: 5,
    borderRadius: 5
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
  }
});
