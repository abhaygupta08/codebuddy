import Navbar from '../components/Navbar';
import React, { Suspense } from 'react';
import Home from '../pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Account from '../pages/Account';
import IDE from '../pages/IDE';
import Loader from '../components/Loader';
import RequireAuth from './RequireAuth';
import Unathorized from '../pages/Unathorized';
import {ROLES} from '../constants';
import Logout from '../pages/Logout';
import ContestWatcher from '../pages/ContestWatcher';
import Profile from '../pages/Profile';
import AllSnippet from '../pages/Snippets/AllSnippet';
import SnippetPage from '../pages/Snippets/SnippetPage';
import NotFound from '../pages/NotFound';
import CodeRoom from '../pages/CodeRoom';
import Problem from '../pages/Problem';

export default function RouteController() {
  return (
    <main style={{ minHeight: '100vh' }}>
      {' '}
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader width='20' height='20'  />}>

          <Routes>
            {/* Public Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/account/*' element={<Account />} />
            <Route path='/unauthorized' element={<Unathorized />} />
            <Route path='/ide' element={<IDE />} />

            <Route path='/contest-watcher/*' element={<ContestWatcher />} />
            <Route path='/code-room/*' element={<CodeRoom />} />

            <Route path='/logout' element={<Logout />} />
            <Route path='/user/*' element={<Profile />} />
            
            
            {/* Private Routes */}
            <Route element={<RequireAuth allowedRoles={[ROLES.User]} />} >

            <Route path='/problemset/*' element={<Problem />} />
            <Route path='/snippets' element={<Navigate to={'./all'} replace />} />
            <Route path='/snippets/all' element={<AllSnippet/>} />

            </Route>

            <Route path='/snippets/:snippetId' element={<SnippetPage />} />

            {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />} >
            <Route path='/admin' element={<div> You're Admin !</div>} />
            </Route> */}

        {/* Catch All */}
        <Route path='*' element={<NotFound/>} />

          </Routes>
        </Suspense>
      </BrowserRouter>
    </main>
  );
}
