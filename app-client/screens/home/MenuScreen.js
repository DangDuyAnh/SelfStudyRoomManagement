import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import color from "../../constants/color/color";

import { useDispatch, useSelector } from 'react-redux'

import { LOGOUT } from "../../redux/features/auth/authSlice";

export const MenuScreen = ({navigation}) => {
  const dispatch = useDispatch()
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>    
        <TouchableHighlight style={styles.seemoreButton} onPress={()=>{dispatch(LOGOUT())}} underlayColor={color.TouchableHighlightBorderWhite}>
          <Text style={styles.buttonText}>Log out</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.MenuBackgroundGray,
  },
  header: {
    height: 100,
    flexDirection: "column",
  },
  topBarContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerContainer: {
    flex: 1,
    paddingLeft: 10,
  },
  rightItemContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
  },
  icon: {
    width: 34,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.IconBackgroundGray,
    borderRadius: 20,
    marginRight: 10,
  },
  headerText: {
    // fontFamily: "Roboto-Bold",
    fontSize: 26,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    flex: 1,
  },
  avatar: {
    
  },
  name: {
    marginLeft: 10,
  },
  nameBold: {
    // fontFamily: "Roboto-Medium",
    fontSize: 15,
  },
  br: {
    width: "90%",
    borderBottomWidth: 1,
    marginTop: 10,
    alignSelf: "center",
    borderBottomColor: color.BrGray,
    elevation: 1,
  },
  shortcut: {
    padding: 10,
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    flexWrap: "nowrap",
    marginBottom: 10,
  },
  shortcutHeader: {
    height: 36,
  },
  seemoreButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: color.IconBackgroundGray,
    marginTop: 10,
    borderRadius: 6,
    width: "100%"
  },
  buttonText: {
    // fontFamily: "Roboto-Medium"
  },
  settingContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 25,
  },
  settingButtonContainer: {
    paddingLeft: 10,
    height: 60,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: color.BorderTopGray,
    justifyContent: "center",
  },
  settingButton: {
    flexDirection: "row",
    alignItems: "center",
  }
});

const ICON_SIZE = 20;
const SettingIcon = () => (
  <Ionicons name="settings-sharp" size={ICON_SIZE} color="black" />
);
const SearchIcon = () => (
  <Feather name="search" size={ICON_SIZE} color="black" />
);
