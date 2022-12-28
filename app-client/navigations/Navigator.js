import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
} from "react-native";

import LoginScreen from "../screens/login/LoginScreen";
import { MenuScreen } from "../screens/home/MenuScreen";


import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RETRIEVE_TOKEN } from "../redux/features/auth/authSlice";


const Stack = createNativeStackNavigator();
export const Navigator = () => {
  const dispatch = useDispatch()

  let userToken = useSelector(state => state.auth.userToken)
  // console.log("userToken324324", userToken)

  useEffect(() => {
    setTimeout(async () => {
      // console.log("userToken111", userToken)
      try {
        userToken = await AsyncStorage.getItem('userToken');
        // console.log("userToken343432", userToken)
      } catch (e) {
        console.log(e);
      }
      dispatch(RETRIEVE_TOKEN({ token: userToken }));
    }, 10);
  }, []);
  return (
    <NavigationContainer>
      {!userToken ?
      <Stack.Navigator>

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={() => ({
            headerShown: false,
            headerTransparent: true,
            statusBarTranslucent: false,
            statusBarColor: "transparent",
            statusBarTranslucent: true,
          })}
        />
      </Stack.Navigator>
      :
      <Stack.Navigator>
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
        />
      </Stack.Navigator>
}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
