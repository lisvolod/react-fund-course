import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Errors from '../pages/Errors';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';
const AppRouter = () => {
  return (
    <Routes>
          <Route path='/about' element={<About />}></Route>
          <Route exact path='/posts' element={<Posts />}></Route>
          <Route exact path='/posts/:id' element={<PostIdPage />}></Route>
          <Route path='/errors' element={<Errors />}></Route>
          <Route path="*" element={<Navigate to ="/posts" />}/>
    </Routes>
  )
}

export default AppRouter
