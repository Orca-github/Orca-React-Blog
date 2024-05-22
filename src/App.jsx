import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import Footer from './component/Footer'
import { useRoutes, useLocation } from 'react-router-dom'
import routes from './routes'
import { Box, Container } from '@mui/material';

import { NavLink, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { boxSizeReducer } from './redux/store'
import MainView from './component/Home/MainView'
import ParticlesBackground from './ParticlesBackground'
function App() {
  const element = useRoutes(routes)
  const backgroundImage = useSelector(state => state.back.backgroundImage);

  const location = useLocation();
  const showMainView = location.pathname === '/'; // 替换 '/specific-route' 为实际路径

  //设置顶图
  let boxSize = "100vh"
  if (!showMainView) {
    boxSize = "30vh"
  }
  return (
    <>
      {/* // 动态粒子效果 */}
      {/* <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}> */}
      <ParticlesBackground />
      {/* </Box> */}

      <Box sx={{
        height: `${boxSize}`, // Full viewport height
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
        zIndex: 3,
        // padding: '64px' ,// 设置四个边的 padding 为 64px
        overflow: 'hidden', // 确保内容不会超出背景范围
      }}>

          <Header />

        {showMainView && <MainView />}
        {/* {!showMainView &&
          <Box >
            {element}
          </Box>} */}

      </Box>


      {/* {showMainView &&
        <Box >{element}</Box>} */}
      <Box sx={{ position: 'relative', zIndex: 2, padding: '2px', width: '100%' }}>
        {element}
      </Box>
      <Box sx={{ position: 'relative', zIndex: 2, width: '100%' }}>

        <Footer />
      </Box>
    </>
  )
}

export default App
