import React from 'react';
import { Route, Routes } from "react-router-dom";
import HomePage from './homepage';
import Login from './login';
import Signup from './signup';
import Mycourses from './mycourses';
import AddCourses from './addCourses';


function Main() {
  return (
    <Routes>
        <Route path='/homepage' element={<HomePage/> }/>
        <Route path='/login' element={<Login/> }/>
        <Route path='/signup' element={<Signup/> }/>
        <Route path='/mycourses' element={<Mycourses/> }/>
        <Route path='/addcourses' element={<AddCourses/> }/>


    </Routes>
  );
}

export default Main;
