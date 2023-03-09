import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import axiosClient from "../../utils/axiosClient";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

function HistoryRegister(props) {
    const [dataHistory, setDataHistory] = useState([])
    const [dataQRHistory, setDataQRHistory] = useState([])
    

    const getHistory = async () => {
        const id = await AsyncStorage.getItem('userToken');
        const res = await axiosClient('get', `/registerForm/listByStudent/${id}`)
        if (res.status == 200) {
            return res.data
        }

    }
    const getQRHistory = async () => {
        const id = await AsyncStorage.getItem('userToken');
        const res = await axiosClient('get', `/usingQRRoom/get/${id}`)
        console.log("Res", res)
        if (res.status == 200) {
            return res.data
        }

    }


    const [state, setState] = useState({});
    const isFocused = useIsFocused();
    useEffect(() => {

        getHistory().then(setDataHistory)
        // getQRHistory().then(setDataQRHistory)


        return () => {
            setState({}); // This worked for me
        }
    }, [isFocused]);


    const StringToTime = (date) => {
        let time = new Date(date);
        let singleMinutes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        let minute = time.getMinutes().toString();
        if (singleMinutes.includes(minute)) minute = '0' + minute;
        let showTime = `${time.getHours()}:${minute}`;
        return showTime
    }

    const StringToDate = (date) => {
        let time = new Date(date);
        let showTime = `${time.getDate()}-${time.getMonth()}-${time.getFullYear()}`;
        return showTime
    }

    const GridViewDate = ({ data}) => {
        const day = StringToDate(data.dateRegister)
        const timeStart = StringToTime(data.startTime)
        const timeEnd = StringToTime(data.endTime)
        return (
            <View style={styles.container}>
                <Text style={styles.loremIpsum14}>{day}</Text>
                <Text style={styles.loremIpsum15}>Loại phòng: {data.typeRoom}</Text>
                <Text style={styles.loremIpsum15}>Thời gian: {timeStart} - {timeEnd} ({data.numberSeats} chỗ ngồi)</Text>
            </View>
        )
    }

    const GridViewTime = ({ time, room, total }) => {
        return (
            <View>

                <Text style={styles.loremIpsum15}>- {time}: {room} ({total} chỗ ngồi)</Text>

            </View>)
    }
    return (
        <FlatList
            data={dataHistory}
            renderItem={({ item }) => <GridViewDate data={item} />}
            keyExtractor={item => item.id}
            // numColumns={3}
            key={item => item.id}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rect2: {
        width: 463,
        height: 41,
        backgroundColor: "#E6E6E6",
        marginTop: 36,
        marginLeft: -44
    },
    lịchSửDangKy: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 12,
        marginLeft: 173
    },
    loremIpsum: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: -102,
        marginLeft: -370
    },
    sốDiệnThoại: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 383,
        marginLeft: 217
    },
    maSinhVien7: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 36,
        marginLeft: 215
    },
    loremIpsum14: {
        fontFamily: "roboto-700",
        color: "#121212",
        marginTop: 25,
        fontSize: 16,
        marginLeft: 12,
        fontWeight: 'bold'
    },
    loremIpsum15: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 12,
        marginLeft: 40
    },
    text: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 10,
        marginLeft: 40
    }
});

export default HistoryRegister;
