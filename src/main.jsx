import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import store from './redux/store.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
    {/* <Routes>
      <Route  path="*" element={<App />}    />
    </Routes> */}
    <App/>
    </BrowserRouter>
  </React.StrictMode>
  ,
)

// // 创建根节点
// const root = ReactDOM.createRoot(document.getElementById('root'));

// const renderApp = () => {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// };

// renderApp(); // 初始渲染

// store.subscribe(() => {
//   renderApp(); // 每次 store 更新时重新渲染应用
//   //console.log("@@@@@@@@@@")
// });
