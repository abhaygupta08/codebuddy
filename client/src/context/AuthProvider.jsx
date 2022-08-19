import React, { createContext, useEffect, useState } from "react";
import axios from "../api/axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const [auth , setAuth] = useState(false);

  async function verifyUser(){
    try{
    const response = await axios.get('/user', { withCredentials: true });
    setAuth(response?.data);
  }
    catch(error){
      setAuth(null);
    }
}
  useEffect(() => {
    verifyUser();
  } , []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
