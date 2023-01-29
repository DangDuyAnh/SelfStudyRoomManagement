import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

export default function RegisterRoom(props) {
  return (
    <View style={styles.container}>
      <View style={styles.quetQrCodeRow}>
        <Text style={styles.quetQrCode}>quet QR Code</Text>
        <View style={styles.rect}></View>
      </View>
      <View style={styles.soLuongSinhVienRow}>
        <Text style={styles.soLuongSinhVien}>so luong sinh vien:</Text>
        <TextInput
          placeholder="placeholder"
          style={styles.placeholder}
        ></TextInput>
      </View>
      <View style={styles.loaiPhongRow}>
        <Text style={styles.loaiPhong}>Loai phong</Text>
        <TextInput
          placeholder="placeholder"
          style={styles.placeholder2}
        ></TextInput>
      </View>
      <View style={styles.thờiGianSửDụngRow}>
        <Text style={styles.thờiGianSửDụng}>Thời gian sử dụng</Text>
        <TextInput
          placeholder="placeholder"
          style={styles.placeholder1}
        ></TextInput>
      </View>
      <View style={styles.phongHọcDềXuấtRow}>
        <Text style={styles.phongHọcDềXuất}>Phòng học đề xuất</Text>
        <TextInput
          placeholder="placeholder"
          style={styles.placeholder3}
        ></TextInput>
      </View>
      <View style={styles.yeuCầuKhacRow}>
        <Text style={styles.yeuCầuKhac}>Yêu cầu khác</Text>
        <TextInput
          placeholder="placeholder"
          style={styles.placeholder4}
        ></TextInput>
      </View>
      <Text style={styles.lờiNhắn}>Lời nhắn</Text>
      <TextInput
        placeholder="placeholder"
        style={styles.placeholder5}
      ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.dangKy}>Dang ky</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  quetQrCode: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 13
  },
  rect: {
    width: 54,
    height: 43,
    backgroundColor: "#E6E6E6",
    marginLeft: 54
  },
  quetQrCodeRow: {
    height: 43,
    flexDirection: "row",
    marginTop: 84,
    marginLeft: 89,
    marginRight: 93
  },
  soLuongSinhVien: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 5
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
    color: "#121212"
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
    marginTop: 6
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
    marginTop: 5
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
    marginTop: 5
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
    marginLeft: 32
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
    backgroundColor: "#E6E6E6",
    marginTop: 0,
    marginLeft: 140
  },
  dangKy: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 17,
    marginLeft: 37
  }
});