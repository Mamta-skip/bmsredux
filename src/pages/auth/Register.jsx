import React from 'react'
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
    if(status===STATUSES.Success){
   return  navigate("/login");
    }else{
     return navigate('/register');
    }
  }
  return (
   <Form type={'Register'} onSubmit={handleRegister}/>
  )
}

export default Register
