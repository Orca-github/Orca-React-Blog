import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login'
import AdminIndex from './AdminIndex'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'
import ArticleList2 from './ArticleList2'

export default function Main() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<AdminIndex />} >
            <Route path="add" element={<AddArticle />} />
            {/* <Route path="list2" element={<ArticleList />} /> */}
            <Route path="list" element={<ArticleList2 />} />
            <Route path="add/:id" element={<AddArticle />} />

          </Route>

          <Route path="/add" element={<AddArticle />} />
          <Route path="/list" element={<ArticleList />} />
          <Route path="/" element={<Login />} />



        </Routes>
      </BrowserRouter>
    </div>
  )
}
