import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import axiosClient from "../../utils/axiosClient";
import AsyncStorage from '@react-native-async-storage/async-storage';

function HistoryRegister(props) {
    const [dataHistory, setDataHistory] = useState()

    const data = [{
        id: ' 1',
        date: '27-12-2022',
        historyTime: [
            {
                id: '1',
                time: '10:15',
                room: 'phòng tự do',
                total: 5
            },
            {
                id: '2',
                time: '13:50',
                room: 'phòng học nhóm',
                total: 10
            }
        ]
    },
    {
        id: ' 2',
        date: '29-12-2022',
        historyTime: [
            {
                id: '1',
                time: '10:15',
                room: 'phòng tự do',
                total: 2
            }
        ]

    }
    ]

    const getHistory = async () => {
        // const id = await AsyncStorage.getItem('userToken');
        const id = '6408fb4684334bfb973c4ae6'
        const res = await axiosClient(method = 'get', url = `/registerForm/get/${id}`)
        console.log(res.data)
    }

    // useEffect(() => {


    // 	setTimeout(() => { setLoading(false) }, 1000)

    // 	getHistory().then(setDataPost)


    // 	getUser().then(setDataUser)
    // 	return () => {
    // 		setState({}); // This worked for me
    // 	}
    // }, [isFocused, del]);



    const GridViewDate = ({ date, historyTime }) => {
        return (
            <View style={styles.container}>
                <Text style={styles.loremIpsum14}>{date}</Text>
                <FlatList
                    data={historyTime}
                    renderItem={({ item }) => <GridViewTime time={item.time} room={item.room} total={item.total} />}
                    keyExtractor={item => item.id}
                    // numColumns={3}
                    key={item => item.id}
                />
            </View>
        )
    }

    const GridViewTime = ({ time, room, total }) => {
        return (
            <View>
                <TouchableOpacity onPress={getHistory}>
                    <Text style={styles.loremIpsum15}>- {time}: {room} ({total} chỗ ngồi)</Text>
                </TouchableOpacity>
            </View>)
    }
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <GridViewDate date={item.date} historyTime={item.historyTime} />}
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
