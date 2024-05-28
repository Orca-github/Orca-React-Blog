import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
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

import ExpandBtn from './component/Home/ExpandBtn'
import WaveWapper from './component/Home/WaveWapper'

function App() {
  const element = useRoutes(routes)
  const backgroundImage = useSelector(state => state.back.backgroundImage);

  const location = useLocation();
  const showMainView = location.pathname === '/'  || location.pathname === '/index'; // 替换 '/specific-route' 为实际路径

  const contentRef = useRef(null);

  //设置顶图
  let boxSize = "100vh"
  if (!showMainView) {
    boxSize = "30vh"
  }
  return (
    <>
    <Box sx={{ position: 'relative', zIndex: 2, width: '100%',minHeight:"100vh" }}>
      {/* // 动态粒子效果 */}
      <Box sx={{ position: 'relative', zIndex: 0 }}>
        <ParticlesBackground />
      </Box>

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
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '5px', // 边框高度
          background: 'linear-gradient(to bottom,#637d9de7 20%, #535a7eda 90% )'
          // #637d9de7 50%, #535a7eda 50%
        }



      }}>

        <WaveWapper />
        <Header />

        {showMainView && <>
          <MainView />
          <ExpandBtn scrollToContent={() => contentRef.current.scrollIntoView({ behavior: 'smooth' })} />

        </>
        }
        {/* {!showMainView &&
          <Box >
            {element}
          </Box>} */}
      </Box>

      {/* {showMainView &&
        <Box >{element}</Box>} */}
      <Box sx={{ position: 'relative', zIndex: 2, paddingTop: '1.5%', paddingBottom: "4rem", width: '100%' }} ref={contentRef}>
        {element}
        
      </Box>
      <Box sx={{ position: 'absolute', zIndex: 2, width: '100%' ,bottom:0}}>

        <Footer />
      </Box>
      </Box>
    </>
  )
}

export default App
