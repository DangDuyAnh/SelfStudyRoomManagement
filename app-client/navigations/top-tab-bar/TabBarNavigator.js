import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// import HomeStack from "../../screens/home/HomeStack";
import HomeStack from "../../screens/home/HomeStack";
import Profile from "../../screens/Profile/Profile";


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

