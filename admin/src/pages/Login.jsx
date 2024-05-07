import React, { useState } from 'react'
import '../static/css/Login.css'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';

import { Card, CardActions, CardMedia, CardContent, Button, Backdrop, CircularProgress, TextField, Stack, Typography } from '@mui/material'
import { AccountCircle, AlternateEmail, Password } from '@mui/icons-material'

import servicePath from '../config/apiUrl'
import axios from 'axios'
import Alert from '@mui/material/Alert'
import { useNavigate } from 'react-router-dom'


export default function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setInLoding] = useState(false)

    //用于 loading效果
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);

    };

    const navigate = new useNavigate()
    //匹配用户
    const [emUSer, setEmUser] = useState(false);
    const [emPws, setEmPws] = useState(false);
    const [loginPass, setLoginPass] = useState(false);


    const checkLogin = () => {
        //reset alter message
        setLoginPass(false)
        setEmUser(false)
        setEmPws(false)

        if (!userName) {
            {/**打开loading效果 */ }
            setOpen(true);
            setTimeout(() => {
                setOpen(false)
                setEmUser(true)
            }, 500);
            return false

        } else if (!password) {
            setOpen(true);
            setTimeout(() => {
                setOpen(false)
                setEmPws(true)
            }, 500);

            return false
        }

        {/**打开loading效果 */ }
        setOpen(true);
        let dataProps = {
            'userName': userName,
            'password': password
        }

        const fetchData = async () => {

            //设置csrf
            const response = await axios.get('/api/getCsrfToken');
            const csrfToken = response.data.csrfToken;
            try {
                //请求连接
                axios({
                    method: 'post',
                    url: servicePath.checkLogin,
                    data: dataProps,
                    headers: {
                        'x-csrf-token': csrfToken, // 如果 CSRF token 是放在请求头中
                    },
                    //下面这个设置是前后端共享session
                    withCredentials: true
                }).then(
                    res => {
                        setOpen(false);
                        if (res.data.data == 'Login successful') {
                            localStorage.setItem('openID', res.data.openId)
                            navigate('/admin')
                        } else {
                            setTimeout(() => {
                                setOpen(false)
                                setLoginPass(true)
                            }, 500);
                        }
                    }
                )

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }


    return (
        <div className='login-div'>
            {/*点击显示loading效果*/}
            {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
            <Card sx={{ minWidth: 275 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/B2.jpg"
                    title="green iguana"
                />
                <CardContent>
                    {/**stack 用来做格式的 */}
                    <Stack component="form" spacing={3} noValidate autoComplete="off" justifyContent='center'>
                        <Typography gutterBottom variant="h6" component="div">
                            Orca Blog System
                        </Typography>
                        {/**textfiled 要给id 或name */}
                        <TextField id='usernameInput'
                            fullWidth
                            label={<AccountCircle />}
                            color="secondary" focused
                            placeholder='Enter your user name'
                            onChange={(e) => { setUserName(e.target.value) }} />
                        <TextField id='pswInput'
                            type="password"
                            label={<Password />}
                            color="secondary" focused
                            placeholder='Enter your password'
                            onChange={(e) => { setPassword(e.target.value) }} />
                        {/**显示警告 */}
                        {emUSer && <Alert severity="error" onClose={() => { setEmUser(false) }}>User name can not be null </Alert>}
                        {emPws && <Alert severity="error" onClose={() => { setEmPws(false) }}>Password can not be null </Alert>}
                        {loginPass && <Alert severity="error">User name and password error </Alert>
                        }

                    </Stack>
                </CardContent>
                <CardActions>
                    {/* <Button size="small" onClick={handleOpen}>Show backdrop</Button> */}
                    <Button size="small" onClick={checkLogin} >Login</Button>
                </CardActions>

            </Card>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}
