import React from 'react'
import {Navigate} from 'react-router-dom'
import ArticleBrecrumb from '../component/ArticleBrecrumb'
import Detail from '../component/Detail'
import MainPage from '../component/main_page'
import ArticlePage from '../component/ArticlePage'
import TypeId_List from '../component/TypeId_List'
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
    ,{ path: '/index', element: <MainPage /> }
    
    ,{ path: '/', element: <MainPage /> }
    ,{ path: '*', element: <Navigate to="/" /> } 



   

]