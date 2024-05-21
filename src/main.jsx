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





// // 创建根节点
// const root = ReactDOM.createRoot(document.getElementById('root'));

// const renderApp = () => {
//   root.render(
//     <React.StrictMode>
//       <BrowserRouter>
//       <Provider store={store}>
//         <App />
//         </Provider>
//       </BrowserRouter>
//     </React.StrictMode>
//   );
// };

// renderApp(); // 初始渲染

// //检测redux中状态的改变 如果 redux的状态发生了改变 那么重新渲染
// //由于用了react-redux  所以不用再写subscribe了
// store.subscribe(() => {
//   renderApp(); // 每次 store 更新时重新渲染应用
//   //console.log("@@@@@@@@@@")
// });
