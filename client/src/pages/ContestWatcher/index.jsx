import React from 'react';
import AllContests from './AllContests';
import { Route, Routes } from 'react-router';
import Site from './Site';

export default function ContestWatcher() {
return(
  <Routes>

    <Route path='/' element={<AllContests/>} />
    <Route path='/:site_name' element={<Site />} />

</Routes>
)

}
