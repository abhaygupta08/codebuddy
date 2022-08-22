import React from 'react';
import { Navigate, Route, Routes } from 'react-router';
import CodeRoomDashboard from './Dashboard';
import RoomPage from './RoomPage';
import io from 'socket.io-client';

const socket = io('/');

export default function CodeRoom() {
  return (
        <Routes>
        <Route path='/' element={<CodeRoomDashboard socket={socket} />} />
          <Route path='/join' element={<Navigate to={'../'} replace/>} />

          <Route path='/:roomId' element={<RoomPage socket={socket} />} />
        </Routes>
  );
}
