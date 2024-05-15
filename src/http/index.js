import axios from "axios";
import { application } from "express";
import { json } from "react-router-dom";
const API=axios.create({
    baseURL:'https://react30.onrender.com/api/user',
    headers:{
        "Content-Encoding":"application/json",
        "Accept":"application/json"
    },

})
export default API