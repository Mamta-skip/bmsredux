import React, { useEffect } from "react";
import Form from "./component/Form";
import { useDispatch, useSelector } from "react-redux";
import { login, setStatus } from "../../../store/authSlice";
import STATUSES from "../../globals/status/statuses";
import { useNavigate } from "react-router-dom";
import Layouts from "../../components/layout/Layouts";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, status,token } = useSelector((state) => state.auth);
  const handleLogin = (data) => {
    dispatch(login(data));
    
  };
  
  useEffect(() => {
    if (status === STATUSES.SUCCESS) {
    
       navigate("/");
       localStorage.setItem("jwtToken",token)
       dispatch(setStatus(null))
      
    } 
  }, [status]);
  return (
    <Layouts>
      <Form type={"Login"} onSubmit={handleLogin} user={user} />
    </Layouts>
  );
}

export default Login;
