import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import AllProblems from './AllProblems'
import ProblemPage from './ProblemPage'


export default function Problem() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='./all' replace />} />
      <Route path='/all' element={<AllProblems/>} />
      <Route path='/:problemId' element={<ProblemPage />} />
    </Routes>
    )
}
