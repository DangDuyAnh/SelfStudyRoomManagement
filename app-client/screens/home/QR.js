import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import DatePicker from 'react-native-date-picker'
import axiosClient from '../../utils/axiosClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function QRScan() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [api, setAPI] = useState('Not yet scanned')

  const [dateStart, setDateStart] = useState(new Date())
  const [dateEnd, setDateEnd] = useState(new Date())
  const [openStart, setOpenStart] = useState(false)
  const [openEnd, setOpenEnd] = useState(false)
  const [getDateStart, setGetDateStart] = useState('Chọn thời gian')
  const [getDateEnd, setGetDateEnd] = useState('Chọn thời gian')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })()
  }

  const change_date_start = (date) => {
    setGetDateStart(date.getHours() + ":" + date.getMinutes())
  }

  const change_date_end = (date) => {
    setGetDateEnd(date.getHours() + ":" + date.getMinutes())
  }

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setAPI(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  const registerQR = async () => {
    const id = await AsyncStorage.getItem('userToken');
    console.log("id", id)
    const params = {
      "idStudent": id,
      "startTime": dateStart,
      "endTime": dateEnd
    }
    const res = await axiosClient('post', `${api}`, params)
    if (res.status == 200) {
      alert("Đăng ký thành công")
      setTimeout(() => { navigation.goBack() }, 1000)
    }
    else {
      alert("thất bại")
    }
  }

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>
      {
        !scanned ? <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ height: 400, width: 400 }} />
        </View>
          : <Text></Text>
      }

      <Text style={styles.maintext}>api: {api}</Text>

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}


      <View style={{ flex: 4, flexDirection: 'row' }}>
        <Text style={{ marginTop: 20 }}>Thời gian kết thúc:  </Text>
        <TouchableOpacity style={styles.placeholder1}
          onPress={() => { setOpenEnd(true) }}

        >
          <DatePicker
            modal
            open={openEnd}
            date={dateEnd}
            mode={"time"}
            onConfirm={(dateEnd) => {
              setOpenEnd(false)
              setDateEnd(dateEnd)
              change_date_end(dateEnd)
            }}
            onCancel={() => {
              setOpenEnd(false)
            }}
          />
          <Text style={{ marginTop: 20 }}>{getDateEnd}</Text>
        </TouchableOpacity>

      </View>
      <TouchableOpacity style={{ flex: 1 }} onPress={registerQR}><Text style={{ color: 'red' }}>Đăng ký</Text></TouchableOpacity>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});
