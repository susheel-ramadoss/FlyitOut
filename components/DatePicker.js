import React, {useState, useEffect} from 'react';
import {
  View,
  Button,
  Platform,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
var moment = require('moment');
moment().format();

const DPicker = () => {
  const [date, setDate] = useState(null);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    // console.log("-------currentDate-------->",moment(currentDate).format('MM/DD/YYYY')
    // )
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
      }}>
      {/* <Text>
      { moment(date).format('DD MMM YYYY')}
      </Text> */}

      <DatePicker
        showIcon={false}
        androidMode="spinner"
        date={date}
        style={{flex: 1}}
        mode="date"
        placeholder="DD/MM/YYYY"
        format="DD-MM-YYYY"
        maxDate={moment().format('DD-MM-YYYY')}
        confirmBtnText="confirm"
        cancelBtnText="cancel"
        customStyles={{
          dateInput: {
            flex: 1,
            borderWidth: 0,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 0,
            height: 40,
          },
        }}
        onDateChange={(date) => setDate(date)}
      />

      <TouchableOpacity onPress={showDatepicker}>
        <MaterialCommunityIcons name="calendar" />
        {/* <Image source={require("./../../Assests/calender.png")} style={{ height: 20, width: 20, marginTop: 5 }} /> */}
      </TouchableOpacity>
    </View>
  );
};

export default DPicker;
