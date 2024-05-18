import React, { useEffect } from "react";
import Layouts from "../../components/layout/Layouts";

import Form from "./components/form/Form";
import { useDispatch, useSelector } from "react-redux";
import { blog, setStatus } from "../../../store/blogSlice";
import STATUSES from "../../globals/status/statuses";
import { useNavigate } from "react-router-dom";
function Addblog() {
  const {status}=useSelector((state)=> state.blog)
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const handleAddblog = (data) => {
    dispatch(blog(data));
  
  };
  useEffect(()=>{
    if(status===STATUSES.SUCCESS){
      navigate('/');
      dispatch(setStatus(null))
    }
  },[status])
 
  return <Form type={"Add"} onSubmit={handleAddblog} />;
}

export default Addblog;
