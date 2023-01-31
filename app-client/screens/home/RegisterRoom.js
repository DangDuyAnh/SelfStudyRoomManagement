import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

export default function RegisterRoom({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.quetQrCodeRow}>
        <Text style={styles.quetQrCode}>Quét mã</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("QRScan") }}>
        <Image source={require("../../assets/QR.jpg")}
          resizeMode="contain"
          style={styles.rect}>
        
        </Image>

          {/* <View style={styles.rect}></View> */}
          </TouchableOpacity>
      </View>
      <View style={styles.soLuongSinhVienRow}>
        <Text style={styles.soLuongSinhVien}>Số lượng sinh viên:</Text>
        <TextInput
          placeholder="Input"
          style={styles.placeholder}
        ></TextInput>
      </View>
      <View style={styles.loaiPhongRow}>
        <Text style={styles.loaiPhong}>Loại phòng:</Text>
        <TextInput
          placeholder="Input"
          style={styles.placeholder2}
        ></TextInput>
      </View>
      <View style={styles.thờiGianSửDụngRow}>
        <Text style={styles.thờiGianSửDụng}>Thời gian sử dụng:</Text>
        <TextInput
          placeholder="Input"
          style={styles.placeholder1}
        ></TextInput>
      </View>
      <View style={styles.phongHọcDềXuấtRow}>
        <Text style={styles.phongHọcDềXuất}>Phòng học đề xuất:</Text>
        <TextInput
          placeholder="Input"
          style={styles.placeholder3}
        ></TextInput>
      </View>
      <View style={styles.yeuCầuKhacRow}>
        <Text style={styles.yeuCầuKhac}>Yêu cầu khác:</Text>
        <TextInput
          placeholder="Input"
          style={styles.placeholder4}
        ></TextInput>
      </View>
      <Text style={styles.lờiNhắn}>Lời nhắn:</Text>
      <View style={styles.textAreaContainer} >
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.dangKy}>Đăng ký</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textAreaContainer: {
    borderColor: "grey",
    borderWidth: 1,
    margin: 30
  },
  quetQrCode: {
    fontFamily: "roboto-regular",
    fontWeight: "bold",
    color: "#121212",
    marginTop: 13
  },
  rect: {
    width: 54,
    height: 43,
    backgroundColor: "#E6E6E6",
    marginLeft: 54
  },
  textArea: {
    height: 150,
    justifyContent: "flex-start"
  },
  quetQrCodeRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 50,
    marginLeft: 90,
    marginRight: 30
  },
  soLuongSinhVien: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5,
    fontWeight: "bold",
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 28,
    width: 188,
    marginLeft: 27
  },
  soLuongSinhVienRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 45,
    marginLeft: 32,
    marginRight: 13
  },
  loaiPhong: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontWeight: "bold",
  },
  placeholder2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 28,
    width: 188,
    marginLeft: 73
  },
  loaiPhongRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 32,
    marginRight: 13
  },
  thờiGianSửDụng: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 6,
    fontWeight: "bold",
  },
  placeholder1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 28,
    width: 188,
    marginLeft: 30
  },
  thờiGianSửDụngRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 111,
    marginLeft: 32,
    marginRight: 13
  },
  phongHọcDềXuất: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5,
    fontWeight: "bold",
  },
  placeholder3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 28,
    width: 188,
    marginLeft: 26
  },
  phongHọcDềXuấtRow: {
    height: 28,
    flexDirection: "row",
    marginTop: -121,
    marginLeft: 32,
    marginRight: 13
  },
  yeuCầuKhac: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5,
    fontWeight: "bold",
  },
  placeholder4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 28,
    width: 188,
    marginLeft: 60
  },
  yeuCầuKhacRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 32,
    marginRight: 13
  },
  lờiNhắn: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 70,
    marginLeft: 32,
    fontWeight: "bold",
  },
  placeholder5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 111,
    width: 310,
    marginTop: 25,
    marginLeft: 32
  },
  button: {
    width: 125,
    height: 50,
    backgroundColor: "red",
    marginTop: 0,
    marginLeft: 140
  },
  dangKy: {
    fontFamily: "roboto-regular",
    color: "white",
    marginTop: 17,
    marginLeft: 37
  }
});