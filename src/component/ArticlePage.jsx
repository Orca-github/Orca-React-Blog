import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import '../static/pages/main_content.css'
// import Mian_left from './mian_left'
import {NavLink,Outlet} from 'react-router-dom'
// import ArticleBrecrumb from '../component/ArticleBrecrumb'
import Author from './author';

//主页的内容显示
//左 右 两侧布局

export default function ArticlePage() {

  return (
    <Box className='comm-main'  sx={{ flexGrow: 1 }} >
      <Grid container spacing={0.5} columns={16} justifyContent="center" >
        <Grid className='comm-left' xs={8}>
          <NavLink to ="/list">List</NavLink>
          {/* <Mian_left/> */}
          <Outlet/>
        </Grid>
        <Grid className="comm-right" xs={4}>
          <Author/>
        </Grid>
      </Grid>
    </Box>
  );
}