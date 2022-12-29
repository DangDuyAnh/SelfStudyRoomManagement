import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text
} from "react-native";

function App(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <TextInput placeholder="HUST" style={styles.textInput}></TextInput>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Image
            source={require("./assets/Mizuhara.Chizuru.full.3007141.jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <Image
            source={require("./assets/Mizuhara.Chizuru.full.3007141.jpg")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.button3Row}>
        <TouchableOpacity style={styles.button3}>
          <Image
            source={require("./assets/Mizuhara.Chizuru.full.3007141.jpg")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Image
            source={require("./assets/Mizuhara.Chizuru.full.3007141.jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.image6Row}>
        <Image
          source={require("./assets/Mizuhara.Chizuru.full.3007141.jpg")}
          resizeMode="contain"
          style={styles.image6}
        ></Image>
        <Text style={styles.loremIpsum}>Nguyễn Công Hoàng Anh</Text>
        <Text style={styles.loremIpsum2}>|</Text>
        <Text style={styles.loremIpsum3}>20183473</Text>
      </View>
      <View style={styles.dangKyPhongRow}>
        <Text style={styles.dangKyPhong}>Đăng ký phòng</Text>
        <Text style={styles.xemTinhTrạng}>Xem tình trạng</Text>
      </View>
      <View style={styles.rect1}>
        <View style={styles.trangChủRow}>
          <Text style={styles.trangChủ}>Trang chủ</Text>
          <Text style={styles.profile}>Profile</Text>
        </View>
      </View>
      <View style={styles.lịchSửDangKyRow}>
        <Text style={styles.lịchSửDangKy}>Lịch sử đăng ký</Text>
        <Text style={styles.gfgfd}>Phòng đăng ký hôm nay</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  rect: {
    width: 375,
    height: 43,
    backgroundColor: "#E6E6E6",
    marginTop: 41
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "rgba(237,17,17,1)",
    width: 99,
    height: 30,
    fontSize: 26,
    marginTop: 7,
    marginLeft: 154
  },
  button: {
    width: 112,
    height: 100,
    backgroundColor: "#E6E6E6"
  },
  image: {
    width: 65,
    height: 65,
    marginTop: 18,
    marginLeft: 23
  },
  button1: {
    width: 112,
    height: 100,
    backgroundColor: "#E6E6E6",
    marginLeft: 74
  },
  image4: {
    width: 65,
    height: 65,
    marginTop: 18,
    marginLeft: 24
  },
  buttonRow: {
    height: 100,
    flexDirection: "row",
    marginTop: 140,
    marginLeft: 43,
    marginRight: 34
  },
  button3: {
    width: 112,
    height: 100,
    backgroundColor: "#E6E6E6"
  },
  image5: {
    width: 65,
    height: 65,
    marginTop: 17,
    marginLeft: 23
  },
  button2: {
    width: 112,
    height: 100,
    backgroundColor: "#E6E6E6",
    marginLeft: 74
  },
  image2: {
    width: 65,
    height: 65,
    marginTop: 17,
    marginLeft: 24
  },
  button3Row: {
    height: 100,
    flexDirection: "row",
    marginTop: 99,
    marginLeft: 43,
    marginRight: 34
  },
  image6: {
    width: 49,
    height: 49
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    lineHeight: 30,
    fontSize: 16,
    marginLeft: 9,
    marginTop: 10
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 20,
    marginLeft: 5,
    marginTop: 11
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginLeft: 5,
    marginTop: 16
  },
  image6Row: {
    height: 49,
    flexDirection: "row",
    marginTop: -417,
    marginLeft: 17,
    marginRight: 35
  },
  dangKyPhong: {
    fontFamily: "roboto-regular",
    color: "#121212",
    lineHeight: 30,
    fontSize: 16
  },
  xemTinhTrạng: {
    fontFamily: "roboto-regular",
    color: "#121212",
    lineHeight: 30,
    fontSize: 16,
    marginLeft: 84
  },
  dangKyPhongRow: {
    height: 30,
    flexDirection: "row",
    marginTop: 178,
    marginLeft: 45,
    marginRight: 36
  },
  rect1: {
    width: 375,
    height: 54,
    backgroundColor: "#E6E6E6",
    flexDirection: "row",
    marginTop: 350
  },
  trangChủ: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16
  },
  profile: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 16,
    marginLeft: 81
  },
  trangChủRow: {
    height: 19,
    flexDirection: "row",
    flex: 1,
    marginRight: 97,
    marginLeft: 80,
    marginTop: 19
  },
  lịchSửDangKy: {
    fontFamily: "roboto-regular",
    color: "#121212",
    lineHeight: 30,
    fontSize: 16
  },
  gfgfd: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 63,
    width: 95,
    fontSize: 16,
    marginLeft: 88
  },
  lịchSửDangKyRow: {
    height: 63,
    flexDirection: "row",
    marginTop: -232,
    marginLeft: 45,
    marginRight: 36
  }
});

export default App;
