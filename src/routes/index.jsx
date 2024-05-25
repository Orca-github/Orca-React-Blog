import React from 'react'
import {Navigate} from 'react-router-dom'
import ArticleBrecrumb from '../component/ArticleBrecrumb'
import Detail from '../component/Detail'
// import MainPage from '../component/main_page'
import ArticlePage from '../component/ArticlePage'
import TypeId_List from '../component/TypeId_List'
import FullScreen from '../component/Home/FullScreen'
import ArticleType from '../component/ArticleType'
export default [

    {
        path:'/list',
        element:<ArticlePage/>,
        children:[{
            path:':id',
            element:<TypeId_List/>
        }
        ]
    },
 
    {
        path:'/detail/:id',
        element:<Detail/>
    }
    ,{ path: '/type', element: <ArticleType /> }

    ,{ path: '/index', element: <FullScreen /> }


    ,{ path: '/', element: <FullScreen /> }


    ,{ path: '*', element: <Navigate to="/" /> } 

]