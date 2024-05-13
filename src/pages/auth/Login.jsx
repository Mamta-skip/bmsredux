import React from 'react'
import Form from './component/Form'
import { useDispatch } from 'react-redux'
import { login } from '../../../store/authSlice';
function Login() {
  const dispatch =useDispatch();
  const handleLogin = (data)=>{
    dispatch(login(data))
  }
  return (
    <>
	<Form type={'Login'} onSubmit={handleLogin} />
	</>
  )
}

export default Login
