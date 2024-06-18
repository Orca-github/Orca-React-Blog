import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import '../static/pages/main_content.css'
// import Mian_left from './mian_left'
import Author from './author';

import { useDispatch } from 'react-redux';
import { findListReducer } from '../redux/store';
import servicePath from '../config/apiUrl';

import ArticleList from './ArticleList';
// import {NavLink,useRoutes} from 'react-router-dom'
// import routes from '../routes';

//主页的内容显示
//左 右 两侧布局



const MainPage=()=> {
  const dispatch = useDispatch();

  dispatch(findListReducer(`${servicePath.getArticleList}`));

  return (
    // <Box className='comm-main'  sx={{ flexGrow: 1 }} >
      <Grid container spacing={0.5} columns={12} justifyContent="center" >
        <Grid className='comm-left' xs={8}  
        // sx={{  minHeight:'80vh' }}
        sx={{ backgroundColor: 'rgba(255, 255, 255, 0)',border:"None"}}
        >
          {/* <NavLink to ="/list">List</NavLink> */}
          {/* <Mian_left/> */}
          <ArticleList/>

        </Grid>
        <Grid className="comm-right" xs={4}>
          <Author/>
        </Grid>
      </Grid>
    // </Box>
  );
}

export default MainPage


