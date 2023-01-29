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
import Home from "../../screens/home/Home";
import { Profile } from "../../screens/home/Profile";
import { useEffect, useState, useCallback, useRef } from "react";


import { getStatusBarHeight } from 'react-native-status-bar-height';

const Tab = createBottomTabNavigator();
const height = Dimensions.get("window").height + 80;
const STATUSBARHEIGHT = Platform.OS == 'android' ? StatusBar.currentHeight : getStatusBarHeight()

export const TabBarNavigator = () => {
  const [headerVisible, setHeaderVisible] = useState(true);

  let scrollY = useRef(new Animated.Value(0)).current;
  const clampedScrollY = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolateLeft: "clamp",
  });

  const minusScrollY = Animated.multiply(clampedScrollY, -1);

  const translateY = Animated.diffClamp(minusScrollY, -55, 0);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const icons = {
            Home: 'ios-home-outline',
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
        name="Home"
        component={Home}
      
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        
      />


    </Tab.Navigator>
  );
};

const size = 24;

const homeIcon = (
  <Ionicons name="home-outline" size={size} color={color.Black} />
);
const homeIconFocused = (
  <Entypo name="home" size={size} color={color.MainBlue} />
);
const friendFocused = (
  <FontAwesome5 name="user-friends" size={size} color={color.MainBlue} />
);
const friend = <Feather name="users" size={size} color={color.Black} />;
const videoFocused = (
  <MaterialCommunityIcons
    name="television-pause"
    size={size}
    color={color.MainBlue}
  />
);
const video = (
  <MaterialIcons name="ondemand-video" size={size} color={color.Black} />
);
const newfeedFocused = (
  <MaterialCommunityIcons
    name="newspaper-variant"
    size={size}
    color={color.MainBlue}
  />
);
const newfeed = (
  <MaterialCommunityIcons
    name="newspaper-variant-outline"
    size={size}
    color={color.Black}
  />
);
const notificationFocused = (
  <Fontisto name="bell-alt" size={size} color={color.MainBlue} />
);
const notification = <Fontisto name="bell" size={size} color={color.Black} />;
const MenuFocused = (
  <SimpleLineIcons name="menu" size={size} color={color.MainBlue} />
);
const Menu = <SimpleLineIcons name="menu" size={size} color="black" />;

const styles = StyleSheet.create({
  container: {
    paddingTop: STATUSBARHEIGHT,
    backgroundColor: color.White,
    height: "100%",
  },
  tabBarItemContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cecece",
  },
  tabBarIconStyle: {
    width: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarItemContainerHeaderInvisible: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: color.HeaderBorderColor,
  },
  tabBarStyle: {
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  tabBarIndicatorStyle: {
    backgroundColor: "#115cbf",
    borderWidth: 1,
    borderColor: "#115cbf",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
});
