import AuthContext from '../../context/AuthProvider';
import React, { useContext, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

export default function Account() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate('/user', { replace: true });
    }
  }, [auth]);

  return (
    <div className='flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8 '>
        <Routes>
          <Route path='/' element={<Navigate to={'./login'} replace />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
        </Routes>
      </div>
    </div>
  );
}
