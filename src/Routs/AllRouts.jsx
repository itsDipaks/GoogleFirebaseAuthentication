import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Afterlogin from '../components/pages/afterlogin/Afterlogin'
import Homepage from '../components/pages/Homepage'
import Login from '../components/pages/login/Login'
import Signup from '../components/pages/Signupdata/Signup'

const AllRouts = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/User" element={<Afterlogin/>}/>
        </Routes>
    </div>
  )
}

export default AllRouts