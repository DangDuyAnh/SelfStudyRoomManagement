import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosClient from '../../../utils/axiosClient'
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
    studentCode: '',
    userToken: null
}

export const login =  createAsyncThunk('/student/login', async (params, thunkAPI) => {
    
  
    const newParams = {
        studentCode: params.studentCode,
        password: params.password
    }
    try {
        const res = await axiosClient('post', '/student/login', newParams)
        if (res.status ==200){
        await AsyncStorage.setItem('userToken', res.data._id)
        await AsyncStorage.setItem('name', res.data.name)
        await AsyncStorage.setItem('phone', res.data.phone)
        await AsyncStorage.setItem('studentCode', res.data.studentCode)

        }
        // return res
        return res.data
    } catch(error) {
        console.log("ga12234", error)

        return thunkAPI.rejectWithValue(error.response.data)
    } 
})

export const signup = createAsyncThunk('/student/create', async (params, thunkAPI) => {
    const res = await axiosClient('post', '/student/create', params=params)
    return res
})

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        LOGOUT: (state) => {
            AsyncStorage.removeItem("userToken")
            AsyncStorage.removeItem("name")
            AsyncStorage.removeItem("phone")
            AsyncStorage.removeItem("studentCode")
            state.userToken = null
        },
        RETRIEVE_TOKEN: (state, action) => {
            state.userToken = action.payload.token
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            return {
                ...state,
                loading: true
            }
        }).addCase(login.rejected, (state, action) => {
            alert("MSSV hoặc password sai")
        }).addCase(login.fulfilled, (state, action) => {          
            state.userToken = action.payload._id

            // initialState.studentCode = action.payload.studentCode
            // console.log("initialState", initialState)
        })
    }
})

export const {getAccount, LOGOUT, RETRIEVE_TOKEN} = authSlice.actions
export default authSlice.reducer