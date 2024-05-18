import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/globals/status/statuses";
import API from "../src/http";
const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogs:[],
    singleblog:{},
    status: null,
  },
  reducers: {
    setBlogs(state, action) {
      state.blogs = action.payload;
    },
    setBlog(state,action){
      state.singleblog=action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
   
  },
});
export const { setBlogs, setStatus,setBlog } = blogSlice.actions;
export default blogSlice.reducer;

export function blog(data) {
  return async function blogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post("/blog", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.status === 201) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// all blog 
export function fetchBlog(){
    return async function fetchBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
       try {

        const response = await API.get("/blog");
        if(response.status=== 200 ){
          const blogs =response.data.data;
            dispatch(setBlogs(blogs))
           dispatch( setStatus(STATUSES.SUCCESS))
        }
        else{
dispatch(setStatus(STATUSES.ERROR))
     }
       } catch (error) {
        dispatch(setStatus(STATUSES.ERROR))
       }
    }
}

// singleblogfetch
 export function singleBlog(id){
  return async function singleBlogThunk(dispatch){
dispatch(setStatus(STATUSES.LOADING));
try {
  const response =  await API.get(`/blog/${id}`)
  if(response.status ===200){
    const singleblog = response.data.data;
    dispatch(setBlog(singleblog))
    dispatch(setStatus(STATUSES.SUCCESS));
  }
  else{
    dispatch(setStatus(STATUSES.ERROR))
  }
} catch (error) {
  dispatch(setStatus(STATUSES.ERROR))
}
  }

}

// delete blog
export function deleteBlog(id){
    return async function deleteBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.Loading))
       try {

        const response = await API.delete(`/blog/${id}`)
        console.log(response);
        if(response.status=== 200){

           dispatch( setStatus(STATUSES.SUCCESS));
           console.log("hello from sicee");
        }
        else{
dispatch(setStatus(STATUSES.ERROR))
     }
       } catch (error) {
        dispatch(setStatus(STATUSES.ERROR))
       }
    }
}

// edit blog 
 export function blogEdit (data,id){
 
  return async function blogEditThunk(dispatch){
    dispatch(setStatus(STATUSES.LOADING));
   try {
    const response = await API.patch(`/blog/${id}`,data)
    if(response.status===200){
      dispatch(setBlog(singleBlog));
      dispatch(setStatus(STATUSES.SUCCESS))
     
    }
    else{
      dispatch(setStatus(STATUSES.ERROR));
    }
   } catch (error) {
    dispatch(setStatus(STATUSES.ERROR));
   }
  }
}