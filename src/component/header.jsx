import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import '../static/pages/header.css'


import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import axios from 'axios'
import servicePath from '../config/apiUrl';
import { useNavigate } from 'react-router-dom'

//material ui 里的 item样式
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function header() {
  //mUI 里的
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  //处理按钮点击
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event, path) => {
    useNav(path)
    setAnchorEl(null);
  };
  //路由跳转
  const useNav = useNavigate()//这个定义必须写在函数组件的顶层 

  const handleGo = (event, path, id) => {
    if (path && id) {

      useNav(path + id)
    }
    if (path && !id){
      useNav(path)
    }
    

  };

  //自定义的
  const [navArray, setNavArray] = useState([])

  useEffect(() => {
    //获取type数据
    const fetchData = async () => {
      try {
        const response = await axios(servicePath.getTypeInfo).then(
          (res) => {
            return res.data
          }
        )
        setNavArray(response.data)

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData()
  }, [])

  return (
    <div className='header'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          <Grid item xs={6}>
            <span className='header-logo'>Orca</span>
            <span className='header-txt'>Blog</span>
          </Grid>
          {/**按钮 */}
          <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }} >

            <Button
              id="basic-button"
              aria-haspopup="true"
              onClick={(event) => handleGo(event, '/index')}
            >
              Home
            </Button>

            <Button
              id="basic-button2"
              aria-controls={open ? 'basic-menu2' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              Article
            </Button>
            <Menu
              id="basic-menu2"
              anchorEl={anchorEl}
              open={open}
              onClose={(event) => handleClose('path')}
              MenuListProps={{
                'aria-labelledby': 'basic-button2',
              }}
              disableScrollLock={true}
            >
              <MenuItem onClick={(event) => handleClose(event, '/search')}>Search</MenuItem>
              <MenuItem onClick={(event) => handleClose(event, '/type')}>Type</MenuItem>
            </Menu>

            <Button
              id="basic-button"
              aria-haspopup="true"
              onClick={(event) => handleGo(event, '/project')}
            >
              Project
            </Button>

            <Button
              id="basic-button"
              aria-haspopup="true"
              onClick={(event) => handleGo(event, '/about')}
            >
              About
            </Button>

            <Button
              id="basic-button"
              aria-haspopup="true"
              onClick={(event) => handleGo(event, '/contact')}
            >
              Contact
            </Button>
            </Grid>

            {/*下面是动态生成的*/}

            {/* {
              navArray.map((typeItem) => {
                return (<Button key={typeItem.id}
                  onClick={(event) => handleGo(event, 'list/', typeItem.id)}
                >
                  {typeItem.typeName}
                </Button>)
              })
            } */}

          </Grid>
          
      </Box>
    </div>
  )
}
