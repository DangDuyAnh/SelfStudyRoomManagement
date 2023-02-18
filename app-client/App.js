import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Navigator } from "./navigations/Navigator";
// import 'expo-dev-client';
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import LoginScreen from "./screens/login/LoginScreen";
import { TabBarNavigator } from "./navigations/top-tab-bar/TabBarNavigator";
import Profile from "./screens/Profile/Profile";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  // return <Profile/>
  
   return <Provider store={store}>{<Navigator />}</Provider>;
}
