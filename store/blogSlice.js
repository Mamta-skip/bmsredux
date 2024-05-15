import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/globals/status/statuses";
import API from "../src/http";
const blogSlice =createSlice({
    name:'blog',
    initialState:{
        data:null,
        status:null,

    },
    reducers:{
        setBlog(state,action){
            state.data=action.payload
        },
        setStatus(state,action){
            state.status= action.payload
        }
    }
})
export const{setBlog,setStatus} =blogSlice.actions;
export default blogSlice.reducer

 export function blog(data){
return async function blogThunk(dispatch){
    dispatch(setStatus(STATUSES.Loading))
    try {
        const response = await API.post('/blog',data,{
            headers : {
                "Content-Type" : 'multipart/form-data'
            }
    });
    if(response.status===201){
    
dispatch(setStatus(STATUSES.Success))
    }
    else{
        dispatch(setStatus(STATUSES.Error))
    }
    } catch (error) {
        dispatch(setStatus(STATUSES.Error))
    }
}

}