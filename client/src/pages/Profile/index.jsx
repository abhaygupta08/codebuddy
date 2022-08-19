import React from 'react';
import { Routes, Route } from 'react-router';
import MyProfile from './MyProfile';

export default function Profile() {
  return (
    <Routes>
      <Route path='/' element={<MyProfile />} />
      <Route path='/:username' element={<MyProfile />} />
      <Route path='*' element={<div>404 : Page Not Found</div>} />
    </Routes>
  );
}
