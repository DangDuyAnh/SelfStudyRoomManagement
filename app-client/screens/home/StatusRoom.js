import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import DatePicker from 'react-native-date-picker'
import { Picker } from '@react-native-picker/picker';
import axiosClient from "../../utils/axiosClient";

function StatusRoom(props) {
  const [date, setDate] = useState(new Date())
  const [getDate, setGetDate] = useState('Chọn thời gian')
  const [open, setOpen] = useState(false)
  const [room, setRoom] = useState();
  const [status, setStatus] = useState();
  const [building, setBuilding] = useState();
  const [dataRoom, setDataRoom] = useState([]);

  const GridView = ({ data, max, current, building }) => {

    if (current / max < 0.25) {
      return (
        <View style={{
          flex: 1,
          height: 75,
          margin: 10,
          borderRadius: 20,
          backgroundColor: "rgba(126,211,33,1)",
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={styles.gridText} >{building}-{data}</Text>
          <Text style={{ marginTop: 5 }}>{current}/{max}</Text>
        </View>
      );
    }
    else if (current / max < 0.5 && current / max >= 0.25) {
      return (
        <View style={{
          flex: 1,
          height: 75,
          margin: 10,
          borderRadius: 20,
          backgroundColor: "rgba(248,231,28,1)",
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={styles.gridText} >{data}</Text>
          <Text style={{ marginTop: 5 }}>{current}/{max}</Text>
        </View>
      );
    }
    else {
      return (
        <View style={{
          flex: 1,
          height: 75,
          margin: 10,
          borderRadius: 20,
          backgroundColor: "rgba(208,2,27,1)",
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={styles.gridText} >{data}</Text>
          <Text style={{ marginTop: 5 }}>{current}/{max}</Text>
        </View>
      );
    }

  }

  const change_date = (date) => {
    setGetDate(date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + "   " + date.getHours() + ":" + date.getMinutes())
  }

  const getStatusRoom = async () => {
    const params = {
      "date": date,
      "buildingName": building,
      "status": status
    }
    const res = await axiosClient('post', '/room/status-by-name', params)
    if (res.status == 200){
      setDataRoom(res.data)
    }
    console.log("Res", res.data)
  }
  return (
    <View style={styles.container}>

      <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
      <View style={styles.thờiGianColumnRow}>
        <View style={styles.thờiGianColumn}>
          <Text style={styles.thờiGian}>Thời gian</Text>
          <Text style={styles.trạngThai}>Trạng thái</Text>
          <Text style={styles.phongHọc}>Phòng học</Text>
        </View>
        <View style={styles.button7Column}>
          <TouchableOpacity style={styles.button7}
            onPress={() => { setOpen(true) }}

          >
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                change_date(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />
            <Text style={styles.phongTựHọc2}>{getDate}</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button12}> */}
          <Picker
            style={styles.button11}
            selectedValue={status}
            onValueChange={(itemValue, itemIndex) =>
              setStatus(itemValue)
            }>
            <Picker.Item label="Tất cả" value="" />
            <Picker.Item label="Phòng vắng" value="Phòng vắng" />
            <Picker.Item label="Bình thường" value="Bình thường" />
            <Picker.Item label="Phòng đầy" value="Phòng đầy" />
          </Picker>

          {/* <Text >Tất cả</Text> */}
          {/* </TouchableOpacity> */}
          <Picker
            style={styles.button12}
            selectedValue={room}
            onValueChange={(itemValue, itemIndex) =>
              setRoom(itemValue)
            }>
            <Picker.Item label="Tất cả" value="" />
            {/* <Picker.Item label="Phòng tự học" value="Phòng tự học" />
            <Picker.Item label="Phòng tự do" value="Phòng tự do" /> */}
          </Picker>
          {/* <TouchableOpacity style={styles.button13}>
            <Text style={styles.phongTựHọc3}>Phòng tự học</Text>
          </TouchableOpacity> */}
        </View>
        <View style={styles.rect4}>
          <View style={styles.rect6Row}>
            <View style={styles.rect6}></View>
            <Text style={styles.it3}>Ít</Text>
          </View>
          <View style={styles.rect7Row}>
            <View style={styles.rect7}></View>
            <Text style={styles.tBinh}>T Bình</Text>
          </View>
          <View style={styles.rect8Row}>
            <View style={styles.rect8}></View>
            <Text style={styles.dong}>Đông</Text>
          </View>
          <View style={styles.rect10Row}>
            <TouchableOpacity onPress={getStatusRoom}>
              <Text style={{ color: 'red', fontSize: 20 }}>Tìm kiếm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.rect5}>
        <FlatList
          data={dataRoom}
          renderItem={({ item }) => <GridView data={item.room.name} current={item.sitting} max={item.room.numberSeats} building={item.room.idBuilding.name}/>}
          keyExtractor={item => item.id}
          numColumns={3}
          key={item => item.id}
        />

      </View>
      <View style={styles.toaNhaRow}>
        <Text style={styles.toaNha}>Tòa nhà</Text>
        {/* <TouchableOpacity style={styles.button14}>
          <Text style={styles.d2}>D1</Text>
        </TouchableOpacity> */}
        <Picker
          style={styles.button10}
          selectedValue={building}
          onValueChange={(itemValue, itemIndex) =>
            setBuilding(itemValue)
          }>
          <Picker.Item label="Tất cả" value="" />
          <Picker.Item label="D1" value="D1" />
          <Picker.Item label="D3" value="D3" />
          <Picker.Item label="B1" value="B1" />
        </Picker>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect2: {
    width: 463,
    height: 41,
    backgroundColor: "red",
    marginTop: 36,
    marginLeft: -44
  },
  tinhTrạngPhongHọc: {
    fontFamily: "roboto-regular",
    color: "white",
    marginTop: 12,
    marginLeft: 173
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: -102,
    marginLeft: -370
  },
  thờiGian: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,
    marginLeft: 1
  },
  trạngThai: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,
    marginTop: 35
  },
  phongHọc: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,
    marginTop: 25,
    marginLeft: 1
  },
  thờiGianColumn: {
    width: 70,
    marginTop: 10,
    marginBottom: 9
  },
  button7: {
    width: 134,
    height: 35,
    backgroundColor: "#E6E6E6"
  },
  phongTựHọc2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,
    marginTop: 10,
    marginLeft: 9
  },
  button11: {
    width: 180,
    marginLeft: 10,
    marginTop: 3,
    // height: 35,
    // backgroundColor: "#E6E6E6",
    // marginTop: 17
  },
  button12: {
    width: 180,
    marginLeft: 10,
    marginTop: 2,
    // height: 35,
    // backgroundColor: "#E6E6E6",
    // marginTop: 17
  },
  button10: {
    width: 180,
    marginLeft: 10,
    marginBottom: 12,
    marginLeft: 30
    // height: 35,
    // backgroundColor: "#E6E6E6",
    // marginTop: 17
  },
  tấtCả: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,

    marginLeft: 20
  },
  button13: {
    width: 134,
    height: 35,
    backgroundColor: "#E6E6E6",
    marginTop: 15,
    marginLeft: 2
  },
  phongTựHọc3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,
    marginTop: 10,
    marginLeft: 29
  },
  button7Column: {
    width: 136,
    marginLeft: 3,
    marginBottom: 1
  },
  rect4: {
    width: 91,
    height: 128,
    backgroundColor: "rgba(230,230,230,0.83)",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.83)",
    borderRadius: 20,
    marginLeft: 64,
    marginTop: 10
  },
  rect6: {
    width: 21,
    height: 22,
    backgroundColor: "rgba(126,211,33,1)"
  },
  it3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 13,
    marginTop: 2
  },
  rect6Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 9,
    marginRight: 40
  },
  rect7: {
    width: 21,
    height: 22,
    backgroundColor: "rgba(248,231,28,1)"
  },
  tBinh: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 8,
    marginTop: 5
  },
  rect7Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 9,
    marginRight: 14
  },
  rect8: {
    width: 21,
    height: 22,
    backgroundColor: "rgba(208,2,27,1)"
  },
  dong: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 10,
    marginTop: 0
  },
  rect8Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 8,
    marginRight: 19
  },
  MainContainer: {
    flex: 1,
    backgroundColor: 'white'
  },

  gridbox: {
    flex: 1,
    height: 75,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#00BFA5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  gridText: {
    fontSize: 24,
    color: 'white'
  },
  thờiGianColumnRow: {
    height: 138,
    flexDirection: "row",
    marginTop: 102,
    marginLeft: 3,
    marginRight: 10
  },
  rect5: {
    width: 356,
    height: 288,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 20,
    marginTop: 104,
    marginLeft: 9
  },
  rect9: {
    width: 88,
    height: 78,
    backgroundColor: "rgba(126,211,33,1)"
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 27,
    marginLeft: 28
  },
  sốDiệnThoại: {
    top: 14,
    left: 74,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  rect10: {
    top: 0,
    left: 0,
    width: 88,
    height: 78,
    position: "absolute",
    backgroundColor: "rgba(126,211,33,1)"
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 27,
    marginLeft: 28
  },
  sốDiệnThoạiStack: {
    top: 0,
    left: 0,
    width: 88,
    height: 78,
    position: "absolute"
  },
  rect10Row: {
    height: 78,
    width: 100,
    marginTop: 45,
    marginRight: 17,
  },
  maSinhVien7: {
    top: 50,
    left: 72,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  sốDiệnThoạiStackStack: {
    width: 88,
    height: 78,
    marginLeft: 29
  },
  rect11: {
    width: 88,
    height: 78,
    backgroundColor: "rgba(208,2,27,1)",
    marginLeft: 29
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 26,
    marginLeft: 27
  },
  rect9Row: {
    height: 78,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 17,
    marginRight: 17
  },
  rect12: {
    width: 88,
    height: 78,
    backgroundColor: "rgba(248,231,28,1)",
    marginTop: 33,
    marginLeft: 20
  },
  loremIpsum5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginTop: 26,
    marginLeft: 27
  },
  toaNha: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,
    marginTop: 10
  },
  button14: {
    width: 134,
    height: 35,
    backgroundColor: "#E6E6E6",
    marginLeft: 22
  },
  d2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 14,
    marginTop: 10,
    marginLeft: 54
  },
  toaNhaRow: {
    height: 35,
    flexDirection: "row",
    marginTop: -379,
    marginLeft: 3,
    marginRight: 166
  }
});

export default StatusRoom;
