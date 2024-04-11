import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../components/Layout/Layout';
import Home from '../pages/Home/Home';
import Details from '../pages/Details/Details'
import AddPost from '../pages/AddPost/AddPost';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Profile from '../pages/Profile/Profile';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route index element={<Home />} />
         <Route path='details' element={<Details />} />
        </Route>
          <Route path='login' element={<Login />} />
          <Route path='Profile' element={<Profile />} />
          <Route path='AddPost' element={<AddPost />} />
          <Route path='Register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter