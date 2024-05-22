import React, { Children, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Authlayout = ({children}) => {
    const {token} = useSelector((state)=>state.auth)
    console.log(token);
    const [isAuthenticated,setIsAuthenticated]= useState(false);
   
    useEffect(() => {
        if (!token) {
          window.location.href = "/login";
        }
    
        setIsAuthenticated(true);
      }, [token]);
    
      if (isAuthenticated === true) {
        return <>{children}</>;
      } else {
        return ("loadingg...........")
      }
}

export default Authlayout
