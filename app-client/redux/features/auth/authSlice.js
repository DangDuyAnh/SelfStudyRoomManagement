import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosClient from '../../../utils/axiosClient'
import { loginMessage } from '../../../utils/message/responseMessage'
import AsyncStorage from '@react-native-async-storage/async-storage';


const initialState = {
    data:{},
    loading: false,
    error: {}, 
    code: '',
    userToken: null
}

export const  login =  createAsyncThunk('auth/login', async (params, thunkAPI) => {
    
  
    const newParams = {
        phonenumber: params.phoneNumber,
        password: params.password
    }
    const userToken = "12345"
    try {
        
        await AsyncStorage.setItem('userToken', userToken)
        // const res = await axiosClient('post', '/auth/login', {}, newParams)
        // return res
        return userToken
    } catch(error) {
        return thunkAPI.rejectWithValue(error.response.data)
    } 
})

export const signup = createAsyncThunk('auth/signup', async (params, thunkAPI) => {
    const res = await axiosClient('post', '/auth/signup', params=params)
    return res
})

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        LOGOUT: (state) => {
            // console.log("state.userToken", state.userToken)
            AsyncStorage.removeItem("userToken")
            state.userToken = null
        },
        RETRIEVE_TOKEN: (state, action) => {
            // console.log("action.payload.token", action.payload.token)
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
            console.log("rejected")
            let newState = {...state}
            newState.loading = false
            newState.code = action.payload.code
            if(action.payload.code == 1004){
                if(action.payload.details == "phoneNumber") {
                    newState.error = loginMessage.USER_INVALID
                }
                if(action.payload.details == "password") {
                    newState.error = loginMessage.PASSWORD_INVALID
                }
            }
            return newState
        }).addCase(login.fulfilled, (state, action) => {
            // state.loading = false
            // state.message = action.payload.message
            // state.code = action.payload.code
            // state.data = action.payload.data
            
            state.userToken = action.payload
        })
    }
})

export const {getAccount, LOGOUT, RETRIEVE_TOKEN} = authSlice.actions
export default authSlice.reducer