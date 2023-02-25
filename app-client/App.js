import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Navigator } from "./navigations/Navigator";
// import 'expo-dev-client';
import { Provider } from "react-redux";
import { store } from "./redux/store/store";

import StatusRoom from "./screens/home/StatusRoom";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  // return <StatusRoom/>
  
   return <Provider store={store}>{<Navigator />}</Provider>;
}