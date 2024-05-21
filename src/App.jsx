import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import Footer from './component/Footer'
import { useRoutes, useLocation } from 'react-router-dom'
import routes from './routes'
import { Box } from '@mui/material';

import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

import MainView from './component/Home/MainView'

function App() {
  const element = useRoutes(routes)
  const backgroundImage = useSelector(state => state.back.backgroundImage);

  const location = useLocation();
  const showMainView = location.pathname === '/'; // 替换 '/specific-route' 为实际路径

  return (
    <>
      <Box sx={{
        height: '100vh', // Full viewport height
        width: '100%',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        // padding: '64px' ,// 设置四个边的 padding 为 64px
        overflow: 'hidden' // 确保内容不会超出背景范围
      }}>
        <Header />
        {showMainView && <MainView />}
        {!showMainView &&
          <Box >
            {element}
          </Box>}

      </Box>


      {showMainView &&
        <Box >{element}</Box>}
      <Footer />
    </>
  )
}

export default App
