import React from 'react'
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Login'
import AdminIndex from './AdminIndex'

export default function Main() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/login"  element={<Login/>} / >
            <Route path="/admin"  element={<AdminIndex/>} / >
        </Routes>
      </BrowserRouter>
    </div>
  )
}
