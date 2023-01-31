import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.textInput}>HUST</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}
          onPress={() => {
            navigation.navigate("RegisterRoom")
          }}>
          <AntDesign name="form" resizeMode="contain"
            style={styles.image2} size={65} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1}>
          <AntDesign name="barschart" resizeMode="contain"
            style={styles.image2} size={65} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.button3Row}>
        <TouchableOpacity style={styles.button3}>
          <MaterialIcons name="history" resizeMode="contain"
            style={styles.image} size={65} color="red" />

        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <AntDesign name="calculator" resizeMode="contain"
            style={styles.image2} size={65} color="red" />

        </TouchableOpacity>
      </View>
      <View style={styles.image6Row}>
        <Image
          source={require("../../assets/Mizuhara.Chizuru.full.3007141.jpg")}
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
    width: 876,
    height: 43,
    backgroundColor: "red",
    // marginTop: 41,
    marginLeft: -314
  },
  textInput: {
    fontFamily: "roboto-regular",
    color: "white",
    width: 99,
    height: 30,
    fontSize: 26,
    marginTop: 3,
    marginLeft: 480
  },
  button: {
    width: 112,
    height: 100,
    borderRadius: 20,
    backgroundColor: "rgb(195,231,234)"
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
    borderRadius: 20,
    backgroundColor: "rgb(195,231,234)",
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
    borderRadius: 20,
    backgroundColor: "rgb(195,231,234)"
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
    borderRadius: 20,
    backgroundColor: "rgb(195,231,234)",
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
    width: 712,
    height: 70,
    backgroundColor: "white",
    marginTop: 320,
    marginLeft: -208
  },
  image7: {
    width: 50,
    height: 50
  },
  image9: {
    width: 50,
    height: 50,
    marginLeft: 92
  },
  image7Row: {
    height: 50,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 299,
    marginRight: 221
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
    marginLeft: 84
  },
  trangChủRow: {
    height: 19,
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 288,
    marginRight: 223
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
    marginTop: -220,
    marginLeft: 45,
    marginRight: 36
  }
});
