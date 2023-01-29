import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import color from "../../constants/color/color";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { StyleSheet, Animated, Dimensions, View, StatusBar, Platform } from "react-native";
import HomeStack from "../../screens/home/HomeStack";
import { Profile } from "../../screens/home/Profile";
import RegisterRoom from "../../screens/home/RegisterRoom";
import { useEffect, useState, useCallback, useRef } from "react";


import { getStatusBarHeight } from 'react-native-status-bar-height';

const Tab = createBottomTabNavigator();

export const TabBarNavigator = () => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const icons = {
            HomeStack: 'ios-home-outline',
            Profile: 'ios-person-outline',
          };

          return (
            <Ionicons
              name={icons[route.name]}
              color={focused ? "red" : "grey"}
              size={24}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          {
            "display": "flex"
          },
          null
        ],
        backgroundColor: "grey",
        headerShown: false,
      })}>


      <Tab.Screen
        name="HomeStack"
        component={HomeStack}     
       />
      <Tab.Screen
        name="Profile"
        component={Profile}       
      />
      


    </Tab.Navigator>
  );
};

