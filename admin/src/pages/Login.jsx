import React, { useState } from 'react'
import '../static/css/Login.css'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';

import { Card, CardActions, CardMedia, CardContent, Button, Backdrop, CircularProgress, TextField, Stack, Typography } from '@mui/material'
import { AccountCircle, Password } from '@mui/icons-material'

export default function Login() {

    const [userName, setUserName] = useState('')
    const [psw, setPsw] = useState('')
    const [isLoading, setInLoding] = useState(false)

    //用于 loading效果
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);

    };

    //匹配用户
    const checkLogin = () => {
        setOpen(true);
        setTimeout(() => {
            setOpen(false);
        }, 1000)
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
                            onChange={(e) => { setUserName(e.target.value) }} />
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
