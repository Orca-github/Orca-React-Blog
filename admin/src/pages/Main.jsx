import React from 'react'
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Login'
import AdminIndex from './AdminIndex'
import AddArticle from './AddArticle'

export default function Main() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/admin"  element={<AdminIndex/>} / >
            <Route path="/add"  element={<AddArticle/>} / >
            <Route path="/"  element={<Login/>} / >


        </Routes>
      </BrowserRouter>
    </div>
  )
}
