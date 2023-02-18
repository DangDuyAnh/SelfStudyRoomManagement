import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import RegisterRoom from './RegisterRoom';
import QRScan from './QR';
const Stack = createNativeStackNavigator();
export default HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                  }}/>
            <Stack.Screen
                name="RegisterRoom"
                component={RegisterRoom}
                options={{ 
                title: "Đăng ký phòng học", 
                headerTintColor: 'white', 
                headerStyle: { backgroundColor: 'red' }  }}
                />
            <Stack.Screen
                name="QRScan"
                component={QRScan}
                options={{ 
                    title: "Quét mã", 
                    headerTintColor: 'white', 
                    headerStyle: { backgroundColor: 'red' }  }}
                />
           
           
            
        </Stack.Navigator>
    )
}