import React, { useEffect } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router';
import { toast } from 'react-toastify';
import axios from '../api/axios';
import Loader from '../components/Loader';
// allowedRoles -- array like [2001, 1984 , 5150]
// {
//   "Admin": 5150,
//   "Editor": 1984,
//   "User": 2001
// }

export default function RequireAuth ({ allowedRoles }) {
  const [isLoading, setIsLoading] = React.useState(true);
  
  const [auth , setAuth] = React.useState(null);
  useEffect(() => {
    async function verifyUser(){
      try{
      const response = await axios.get('/user', { withCredentials: true });
      // console.log(response);
      setAuth(response?.data);
    }
      catch(error){
        if(error.response.status === 401) toast.error('Please Log in to access this page');
        
        // console.log(error);
      }
      
      finally{
      setIsLoading(false);
    }}
    verifyUser();
}
      
  , []);
  
  // console.log(auth);


  const location = useLocation();

if(isLoading) return <Loader width='20' height='20' />;

  if (auth?.roles?.find((role) => allowedRoles?.includes(role))) {
    return <Outlet {...location} />;
  } else {
    // all roles failed
    if (auth?.username) {
    toast.error('You are not authorized to access this page!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    
      return <Navigate to='/unauthorized' state={{ from: location }} />;
    }
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "jwt_access=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      return <Navigate
        to={`/account/login?next=${location.pathname}`}
        state={{ from: location }}
      />;
    
  }
}
