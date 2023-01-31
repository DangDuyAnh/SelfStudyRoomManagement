import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT } from "../../redux/features/auth/authSlice";

export default function Profile(props) {
    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
          <View style={styles.rect2}>
            <Text style={styles.thongTinSinhVien}>Thông tin sinh viên</Text>
          </View>
          <ImageBackground
            source={require("../../assets/a.jpg")}
            resizeMode="stretch"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <View style={styles.rect4}>
              <View style={styles.iconRow}>
                <Icon name="user" style={styles.icon}></Icon>
                <View style={styles.loremIpsum2Column}>
                  <Text style={styles.loremIpsum2}>Nguyễn Công Hoàng Anh</Text>
                  <View style={styles.sdt9816590894Row}>
                    <Text style={styles.sdt9816590894}>Sđt:</Text>
                    <Text style={styles.sdt9816590893}>0981659089</Text>
                  </View>
                  <View style={styles.email2Row}>
                    <Text style={styles.email2}>Email:</Text>
                    <Text style={styles.loremIpsum3}>
                      anh.nch183473@sis.hust.edu.vn
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
          <Text style={styles.loremIpsum}>Lorem Ipsum</Text>
          <View style={styles.rect5}>
            <View style={styles.maSinhVienRow}>
              <Text style={styles.maSinhVien}>Mã sinh viên:</Text>
              <Text style={styles.ngaySinh}>Ngày sinh:</Text>
            </View>
            <View style={styles.maSinhVien2Row}>
              <Text style={styles.maSinhVien2}>20183473</Text>
              <Text style={styles.maSinhVien3}>30/08/2000</Text>
            </View>
            <View style={styles.khoaViệnRow}>
              <Text style={styles.khoaViện}>Khoa/Viện:</Text>
              <Text style={styles.sốDiệnThoại}></Text>
            </View>
            <View style={styles.maSinhVien7Stack}>
              <Text style={styles.maSinhVien7}></Text>
              <Text style={styles.maSinhVien9}>
                Viện Công nghệ Thông tin và Truyền thông
              </Text>
            </View>
            <Text style={styles.lớp}>Lớp:</Text>
            <Text style={styles.maSinhVien11}>Khoa học máy tính 02-K63</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={()=>{dispatch(LOGOUT())}}>
            <Text style={styles.dangXuất}>Đăng xuất</Text>
          </TouchableOpacity>
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
        // marginTop: 36,
        marginLeft: -44
      },
      thongTinSinhVien: {
        fontFamily: "roboto-regular",
        color: "white",
        marginTop: 12,
        marginLeft: 173
      },
      image: {
        width: 375,
        height: 173,
        backgroundColor: "rgba(15,15, 15,1)",
        borderWidth: 0,
        borderColor: "rgba(0,0,0,1)"
      },
      image_imageStyle: {},
      rect4: {
        width: 342,
        height: 141,
        backgroundColor: "rgba(230,230,230,0.83)",
        borderWidth: 1,
        borderColor: "rgba(0,0,0,0.83)",
        borderRadius: 20,
        marginTop: 16,
        marginLeft: 17
      },
      icon: {
        color: "rgba(128,128,128,1)",
        fontSize: 75,
        opacity: 0.83,
        height: 74,
        width: 54
      },
      loremIpsum2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 20,
        fontWeight: "bold"
      },
      sdt9816590894: {
        fontFamily: "roboto-regular",
        color: "#121212"
      },
      sdt9816590893: {
        fontFamily: "roboto-regular",
        color: "blue",
        marginLeft: 5
      },
      sdt9816590894Row: {
        height: 17,
        flexDirection: "row",
        marginTop: 13,
        marginRight: 139
      },
      email2: {
        fontFamily: "roboto-regular",
        color: "#121212"
      },
      loremIpsum3: {
        fontFamily: "roboto-regular",
        color: "blue",
        marginLeft: 7
      },
      email2Row: {
        height: 17,
        flexDirection: "row",
        marginTop: 13
      },
      loremIpsum2Column: {
        width: 248,
        marginLeft: 10,
        marginTop: 7
      },
      iconRow: {
        height: 84,
        flexDirection: "row",
        marginTop: 25,
        marginLeft: 6,
        marginRight: 24
      },
      loremIpsum: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: -275,
        marginLeft: -370
      },
      rect5: {
        width: 356,
        height: 288,
        backgroundColor: "#E6E6E6",
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 20,
        marginTop: 272,
        marginLeft: 9
      },
      maSinhVien: {
        fontFamily: "roboto-regular",
        color: "grey"
      },
      ngaySinh: {
        fontFamily: "roboto-regular",
        color: "grey",
        marginLeft: 105
      },
      maSinhVienRow: {
        height: 17,
        flexDirection: "row",
        marginTop: 34,
        marginLeft: 21,
        marginRight: 83
      },
      maSinhVien2: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontWeight: "bold"
      },
      maSinhVien3: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 124,
        fontWeight: "bold"
      },
      maSinhVien2Row: {
        height: 17,
        flexDirection: "row",
        marginTop: 14,
        marginLeft: 21,
        marginRight: 74
      },
      khoaViện: {
        fontFamily: "roboto-regular",
        color: "grey"
      },
      sốDiệnThoại: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 118,
        marginTop: 9
      },
      khoaViệnRow: {
        height: 17,
        flexDirection: "row",
        marginTop: 26,
        marginLeft: 21,
        marginRight: 148
      },
      maSinhVien7: {
        top: 13,
        left: 185,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212"
      },
      maSinhVien9: {
        top: 0,
        left: 0,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212",
        fontWeight: "bold"
      },
      maSinhVien7Stack: {
        width: 280,
        height: 17,
        marginTop: 15,
        marginLeft: 21
      },
      lớp: {
        fontFamily: "roboto-regular",
        color: "grey",
        marginTop: 29,
        marginLeft: 21
      },
      maSinhVien11: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 15,
        marginLeft: 21,
        fontWeight: "bold"
      },
      button: {
        width: 419,
        height: 50,
        backgroundColor: "red",
        marginTop: 55
      },
      dangXuất: {
        fontFamily: "roboto-regular",
        color: "white",
        marginTop: 16,
        marginLeft: 165
      }
    });
    