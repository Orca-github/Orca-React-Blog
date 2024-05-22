import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './redux/store.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
     {/**使用Provider包裹 让所有App的后代容器组件都能接收到store */}
    <Provider store={store}>

    {/* <Routes>
      <Route  path="*" element={<App />}    />
    </Routes> */}
    <App/>
    </Provider>

    </BrowserRouter>
  </React.StrictMode>
  
)


