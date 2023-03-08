import { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TouchableHighlight,
  Button
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { BreakLineBody } from "../../components/login/BreakLineBody";
import { InputField } from "../../components/login/InputField";
import color from "../../constants/color/color";
import axiosClient from "../../utils/axiosClient";
import DatePicker from 'react-native-date-picker'

export default function Register({ navigation }) {
  const dispatch = useDispatch()
  const error = useSelector(state => state.auth.error)
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)


  const [account, setAccount] = useState({
    mssv: '',
    name: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })
  const changeAccount = useCallback((key) => {
    return (val) => {
      setAccount(prev => {
        return {
          ...prev,
          [key]: val,
        }
      })
    }
  }, [account])

  const signup = async (params, navigation) => {
    const res = await axiosClient('post', '/student/create', params = params)
    if (res.status === 200) {
      alert("Đăng ký thành công")
      setTimeout(() => { navigation.navigate("Login") }, 1000)
    }
    else {
      alert("Đăng ký thất bại")
    }
  }

  const handleRegister = () => {
    if (account.password !== account.confirmPassword) {
      alert('Password mismatch')
    }
    else {
      const params = {
        'studentCode': account.mssv,
        'name': account.name,
        'password': account.password,
        'phone': account.phone
      }
      signup(params, navigation)
      // navigation.navigate("Login")
    }

    // dispatch(login(account))
  }



  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../../assets/a.jpg")}
          resizeMode="cover"
          style={styles.image}
        ></ImageBackground>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.moreLanguage}>

        </View>
        <View style={styles.inputContainer}>
          <InputField placeholder="Mã số sinh viên" keyName="mssv" val={account.mssv} onChangeVal={changeAccount} numeric={true} />
          <InputField placeholder="Họ và tên" keyName="name" val={account.name} onChangeVal={changeAccount} />
          <InputField placeholder="Số điện thoại" keyName="phone" val={account.phone} onChangeVal={changeAccount} numeric={true}/>

          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
          />
          <InputField
            placeholder="Mật khẩu"
            secured={true}
            isLastInputField={true}
            keyName="password"
            val={account.password}
            onChangeVal={changeAccount}
          />
          <InputField
            placeholder="Xác thực mật khẩu"
            secured={true}
            isLastInputField={true}
            keyName="confirmPassword"
            val={account.confirmPassword}
            onChangeVal={changeAccount}
          />

          <TouchableOpacity
            onPress={handleRegister}
            style={styles.loginButton}
          >
            <Text
              style={styles.loginButtonText}
            >
              Đăng ký
            </Text>
          </TouchableOpacity>

        </View>
      </View>
      <View style={styles.footerContainer}>
        <BreakLineBody />
        <TouchableOpacity onPress={() => navigation.navigate("Login")}
          style={styles.createNewAccountButton}
        >
          <Text
            style={styles.createNewAccountText}
          >
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: color.White,
  },
  imageContainer: {
    height: 225,
  },
  bodyContainer: {
    flex: 1,
  },
  footerContainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  moreLanguage: {
    height: "10%",
    flexDirection: "column",
    alignItems: "center",
  },
  inputContainer: {
    paddingTop: "11%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  loginButton: {
    width: "90%",
    borderRadius: 4,
    height: 42,
    backgroundColor: color.Red,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "4%",
  },
  loginButtonText: {
    fontSize: 16,
    color: color.White,
    fontWeight: "700",
    // fontFamily: "Cochin",
  },
  forgotPWButton: {
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: color.White,
    padding: 6,
    height: 30,
    width: 130,
  },
  forgotPWText: {
    color: "#2061c4",
    fontWeight: "bold",
    // fontFamily: "Cochin",
    fontSize: 14,
  },
  createNewAccountButton: {
    marginTop: "9%",
    width: "65%",
    borderRadius: 4,
    height: 34,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "4%",
  },
  createNewAccountText: {
    fontSize: 14,
    color: color.White,
    fontWeight: "700",
    // fontFamily: "Cochin",
  }
});
