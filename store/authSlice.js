import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/globals/status/statuses";
import API from "../src/http";
const authSlice=createSlice({
    name:'auth',
    initialState:{
        user:null,
        token:null,
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

 export function register(data)
{
    return async function registerThunk(dispatch){
        dispatch(setStatus(STATUSES.Loading))
       try {
        const response = await API.post('/register',data)
        if (response.status===201){
            dispatch(setUser(data))
dispatch(setStatus(STATUSES.Success))

        }
        else{
            dispatch(setStatus(STATUSES.Error)) 
        }
    }
        catch (error) {
            dispatch(setStatus(STATUSES.Error)) 
       }
}
}


export function login(data){
    return async function loginThunk(dispatch){
        dispatch(setStatus(STATUSES.Loading))
        try {
            const response = await API.post('/login',data)
         if (response.status===200 && response.data.token){
             dispatch(setToken(response.data.token))
 dispatch(setStatus(STATUSES.Success))
 
         }
         else{
             dispatch(setStatus(STATUSES.Error)) 
         }
     }
         catch (error) {
             dispatch(setStatus(STATUSES.Error)) 
        }
    }
}
