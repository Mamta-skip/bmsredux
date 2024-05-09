import { createSlice } from "@reduxjs/toolkit";
const authSlice=createSlice({
    name:'auth',
    initialState:{
        user:null,
        token:uull,
        status:null
    },
    reducers:{
        setStatus(action,state){
            state.status =action.payload
        },
        setUser(action,state){
            state.user= action.payload
        },
        setToken(action,state){
            state.token=action.payload
        }
    }
})
export const{setStatus,setUser,setToken}= authSlice.actions
export default authSlice.reducer