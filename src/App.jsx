import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import Footer from './component/Footer'
import {useRoutes} from 'react-router-dom'
import routes from './routes'

import {NavLink,Outlet} from 'react-router-dom'

function App() {
  const element = useRoutes(routes)
  return (
    <>
    <Header/>
    {element}
    <Footer/>
    </>
  )
}

export default App
