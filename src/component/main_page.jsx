import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import '../static/pages/main_content.css'
import Mian_left from './mian_left'
import Author from './author';
// import {NavLink,useRoutes} from 'react-router-dom'
// import routes from '../routes';

//主页的内容显示
//左 右 两侧布局



const MainPage=()=> {


  return (
    <Box className='comm-main'  sx={{ flexGrow: 1 }} >
      <Grid container spacing={0.5} columns={16} justifyContent="center" >
        <Grid className='comm-left' xs={8}  sx={{  minHeight:'80vh' }}>
          {/* <NavLink to ="/list">List</NavLink> */}
          <Mian_left/>
        </Grid>
        <Grid className="comm-right" xs={4}>
          <Author/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainPage

// export default function MainPage() {


//   return (
//     <Box className='comm-main'  sx={{ flexGrow: 1 }} >
//       <Grid container spacing={0.5} columns={16} justifyContent="center" >
//         <Grid className='comm-left' xs={8}>
//           {/* <NavLink to ="/list">List</NavLink> */}
//           <Mian_left/>
//         </Grid>
//         <Grid className="comm-right" xs={4}>
//           <Author/>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

