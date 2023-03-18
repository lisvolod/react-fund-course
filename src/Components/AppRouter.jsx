import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Errors from '../pages/Errors';
import Posts from '../pages/Posts';
const AppRouter = () => {
  return (
    <Routes>
          <Route path='/about' element={<About />}></Route>
          <Route path='/posts' element={<Posts />}></Route>
          <Route path='/errors' element={<Errors />}></Route>
          <Route path="*" element={<Navigate to ="/errors" />}/>
    </Routes>
  )
}

export default AppRouter
