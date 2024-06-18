import React from 'react'
import {Navigate} from 'react-router-dom'
import ArticleBrecrumb from '../component/ArticleBrecrumb'
import Detail from '../component/Detail'
// import MainPage from '../component/main_page'
import ArticlePage from '../component/ArticlePage'
import ArticleList from '../component/ArticleList'
import FullScreen from '../component/Home/FullScreen'
import ArticleType from '../component/ArticleType'
import ArticleSearch from '../component/ArticleSearch'
import Project from '../component/Project'
import About from '../component/About'
// import Contact from '../component/Contact'

export default [

    {
        path:'/list',
        element:<ArticlePage/>,
        children:[{
            path:':id',
            element:<ArticleList/>
        }
        ]
    },
 
    {
        path:'/detail/:id',
        element:<Detail/>
    }
    ,{ path: '/type', element: <ArticleType /> }
    ,{ path: '/search', element: <ArticleSearch /> }

    ,{ path: '/project', element: <Project /> }

    ,{ path: '/about', element: <About /> }
    // ,{ path: '/contact', element: <Contact /> }



    ,{ path: '/index', element: <FullScreen /> }


    ,{ path: '/', element: <FullScreen /> }


    ,{ path: '*', element: <Navigate to="/" /> } 

]