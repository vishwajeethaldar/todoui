import { Routes, Route } from "react-router-dom";
import React from 'react'
import {Home,Login, Signup, Todos} from "../pages/";

 const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/todos/:id" element={<Todos/>}/>
    </Routes>
  )
}


export default MainRoutes