import React, { useEffect } from 'react'
import Form from './component/Form'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../../store/authSlice'
import { useNavigate } from 'react-router-dom';
import STATUSES from '../../globals/status/statuses';


function Register() {
  
  const {status} = useSelector((state)=>state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleRegister= (data)=>{
    dispatch(register(data))
  
  }
  useEffect(()=>{
    if(status===STATUSES.Success){
        navigate("/login");
       }else{
         navigate('/register');
       }
   },[status])
  return (
   <Form type={'Register'} onSubmit={handleRegister}/>
  )
}

export default Register
